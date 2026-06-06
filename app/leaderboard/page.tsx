'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { QuizResult } from '@/lib/types'
import { getScoreTier, formatTime } from '@/lib/types'

const TIER_CONFIG = {
  perfect: {
    heading: 'Perfect',
    range: '10/10 →',
    message: 'git commit -m "Perfect score. No bugs found."',
    color: 'text-amber-400',
    bg: 'bg-amber-900',
    border: 'border-amber-600',
  },
  good: {
    heading: 'Good Work',
    range: '7-9/10 →',
    message: 'Build successful with warnings.',
    color: 'text-green-400',
    bg: 'bg-green-900',
    border: 'border-green-700',
  },
  mid: {
    heading: 'Keep Up',
    range: '4-6/10 →',
    message: 'Merge conflicts detected.',
    color: 'text-orange-300',
    bg: 'bg-orange-900',
    border: 'border-orange-700',
  },
  low: {
    heading: 'Work Hard',
    range: '0-3/10 →',
    message: 'npm install brain --save && retry',
    color: 'text-red-300',
    bg: 'bg-red-900',
    border: 'border-red-700',
  },
}

const MEDALS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' }
const TIER_ORDER: Array<keyof typeof TIER_CONFIG> = ['perfect', 'good', 'mid', 'low']

export default function LeaderboardPage() {
  const [results, setResults] = useState<QuizResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState('')
  const [updated, setUpdated] = useState<Date | null>(null)

  const load = useCallback(async () => {
    try {
      const res  = await fetch('/api/leaderboard', { cache: 'no-store' })
      const data = await res.json()
      if (data.results) { setResults(data.results); setUpdated(new Date()) }
      else setError('Could not load results.')
    } catch { setError('Network error.') }
    finally { setLoading(false) }
  }, [])

  useEffect(() => {
    load()
    const id = setInterval(load, 30000)
    return () => clearInterval(id)
  }, [load])

  const grouped = {
    perfect: [] as QuizResult[],
    good:    [] as QuizResult[],
    mid:     [] as QuizResult[],
    low:     [] as QuizResult[],
  }
  results.forEach(r => grouped[getScoreTier(r.score)].push(r))

  const globalRankMap = new Map(results.map((r, i) => [r.id, i + 1]))

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm font-mono transition-colors">
              ← Play Quiz
            </Link>
            {updated && (
              <span className="text-slate-500 text-xs font-mono">
                Updated {updated.toLocaleTimeString()}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Leaderboard</h1>
          <p className="text-slate-400 text-sm font-mono">
            GIAIC · AI Prompting 2026 · Class 2 · {loading ? '...' : `${results.length} students`}
          </p>
        </div>

        {loading && (
          <div className="text-center py-16 text-slate-400 font-mono text-sm">Loading results...</div>
        )}

        {!loading && error && (
          <div className="bg-red-950 border border-red-700 rounded-xl p-6 text-center">
            <p className="text-red-400 font-mono text-sm">{error}</p>
            <button onClick={load}
              className="mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {results.length === 0 ? (
              <div className="text-center py-16 rounded-xl" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <p className="text-slate-400 font-mono text-sm">No results yet. Be the first to play.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 md:items-start">
                {TIER_ORDER.map(tier => {
                  const cfg   = TIER_CONFIG[tier]
                  const group = grouped[tier]

                  return (
                    <div key={tier}>
                      {/* Column header */}
                      <div className={`${cfg.bg} border ${cfg.border} rounded-t-xl px-4 py-4`}>

                        {/* Heading + star for perfect */}
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className={`text-xl font-bold ${cfg.color}`}>{cfg.heading}</h2>
                          {tier === 'perfect' && (
                            <span className="star-blink" style={{ fontSize: '16px' }}>⭐</span>
                          )}
                        </div>

                        {/* Range — white bold */}
                        <p className="text-white font-bold font-mono text-sm mt-0.5">
                          {cfg.range}
                        </p>

                        {/* Developer message — readable */}
                        <p className="text-slate-200 font-mono text-xs mt-2 leading-relaxed break-words">
                          {cfg.message}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-black/20">
                          <span className="text-slate-300 text-xs">
                            {group.length} {group.length === 1 ? 'student' : 'students'}
                          </span>
                        </div>
                      </div>

                      {/* Student list */}
                      <div className="border border-t-0 rounded-b-xl overflow-hidden" style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,255,255,0.08)',
                      }}>
                        {group.length === 0 ? (
                          <div className="px-4 py-8 text-center">
                            <p className="text-slate-600 text-xs font-mono">No students here</p>
                          </div>
                        ) : (
                          group.map((r, i) => {
                            const globalRank = globalRankMap.get(r.id) ?? 999
                            const medal      = MEDALS[globalRank]
                            const tierRank   = i + 1

                            return (
                              <div key={r.id}
                                className="px-4 py-3 border-b last:border-0 transition-colors"
                                style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className={`font-mono ${medal ? 'text-sm' : 'text-xs text-slate-500'}`}>
                                    {medal || `#${tierRank}`}
                                  </span>
                                  <span className="text-teal-400 font-mono text-xs">
                                    {r.time_taken != null ? formatTime(r.time_taken) : '—'}
                                  </span>
                                </div>
                                <p className={`text-sm font-medium truncate ${globalRank <= 3 ? 'text-white' : 'text-slate-300'}`}>
                                  {r.student_name}
                                </p>
                                <p className="text-slate-500 font-mono text-xs mt-0.5">
                                  {r.roll_number}
                                </p>
                              </div>
                            )
                          })
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}

        <div className="mt-8 text-center">
          <Link href="/"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Take the Quiz →
          </Link>
          <p className="text-slate-700 text-xs font-mono mt-4">
            GIAIC · Agentic AI · Karachi · refreshes every 30s
          </p>
        </div>
      </div>
    </div>
  )
}