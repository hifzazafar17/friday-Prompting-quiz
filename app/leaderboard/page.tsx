'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { QuizResult } from '@/lib/types'
import { getScoreTier, formatTime } from '@/lib/types'

const TIERS = {
  perfect: { label: 'git commit -m "Perfect score. No bugs found."',                color: 'text-yellow-300', bg: 'bg-yellow-950', border: 'border-yellow-700' },
  good:    { label: 'Build successful with warnings. Review the failed test cases.', color: 'text-green-400',  bg: 'bg-green-950',  border: 'border-green-800'  },
  mid:     { label: 'Merge conflicts detected. Re-read the spec.',                   color: 'text-orange-400', bg: 'bg-orange-950', border: 'border-orange-800' },
  low:     { label: 'npm install brain --save && retry',                             color: 'text-red-400',    bg: 'bg-red-950',    border: 'border-red-800'    },
}
const MEDALS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' }

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

  useEffect(() => { load(); const id = setInterval(load, 30000); return () => clearInterval(id) }, [load])

  const grouped = { perfect: [] as QuizResult[], good: [] as QuizResult[], mid: [] as QuizResult[], low: [] as QuizResult[] }
  results.forEach(r => grouped[getScoreTier(r.score)].push(r))

  let rank = 0

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm font-mono transition-colors">← Play Quiz</Link>
            {updated && <span className="text-slate-500 text-xs font-mono">Updated {updated.toLocaleTimeString()}</span>}
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Leaderboard</h1>
          <p className="text-slate-400 text-sm font-mono">
            GIAIC · AI Prompting 2026 · Class 2 · {loading ? '...' : `${results.length} students`}
          </p>
        </div>

        {loading && <div className="text-center py-16 text-slate-400 font-mono text-sm">Loading results...</div>}
        {!loading && error && (
          <div className="bg-red-950 border border-red-700 rounded-xl p-6 text-center">
            <p className="text-red-400 font-mono text-sm">{error}</p>
            <button onClick={load} className="mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">Retry</button>
          </div>
        )}
        {!loading && !error && results.length === 0 && (
          <div className="text-center py-16 bg-slate-800 border border-slate-700 rounded-xl">
            <p className="text-slate-400 font-mono text-sm">No results yet. Be the first to play.</p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="space-y-6">
            {(Object.keys(TIERS) as Array<keyof typeof TIERS>).map(tier => {
              const group = grouped[tier]
              if (!group.length) return null
              const cfg = TIERS[tier]
              return (
                <div key={tier}>
                  <div className={`${cfg.bg} border ${cfg.border} rounded-t-xl px-4 py-3`}>
                    <p className={`font-mono text-sm ${cfg.color}`}>── {cfg.label} ──</p>
                  </div>
                  <div className="bg-slate-800 border border-t-0 border-slate-700 rounded-b-xl overflow-hidden">
                    {/* Column headers */}
                    <div className="grid grid-cols-12 px-4 py-2 border-b border-slate-700 bg-slate-900">
                      <span className="col-span-1 text-slate-500 text-xs font-mono">#</span>
                      <span className="col-span-4 text-slate-500 text-xs font-mono">Name</span>
                      <span className="col-span-3 text-slate-500 text-xs font-mono">Roll No</span>
                      <span className="col-span-2 text-slate-500 text-xs font-mono text-center">Score</span>
                      <span className="col-span-2 text-slate-500 text-xs font-mono text-right">Time</span>
                    </div>
                    {group.map(r => {
                      rank++
                      return (
                        <div key={r.id} className={`grid grid-cols-12 px-4 py-3 items-center border-b
                          border-slate-700/50 last:border-0 transition-colors
                          ${rank <= 3 ? 'bg-slate-700/30' : 'hover:bg-slate-700/20'}`}>
                          <div className="col-span-1">
                            {MEDALS[rank]
                              ? <span className="text-base">{MEDALS[rank]}</span>
                              : <span className="text-slate-500 font-mono text-sm">{rank}</span>}
                          </div>
                          <div className="col-span-4">
                            <span className={`text-sm font-medium truncate ${rank <= 3 ? 'text-white' : 'text-slate-300'}`}>
                              {r.student_name}
                            </span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-teal-400 font-mono text-xs">{r.roll_number}</span>
                          </div>
                          <div className="col-span-2 text-center">
                            <span className={`font-mono font-bold text-sm ${cfg.color}`}>{r.score}/10</span>
                          </div>
                          <div className="col-span-2 text-right">
                            <span className="text-slate-400 font-mono text-xs">
                              {r.time_taken != null ? formatTime(r.time_taken) : '—'}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Take the Quiz →
          </Link>
          <p className="text-slate-600 text-xs font-mono mt-4">GIAIC · Agentic AI · Karachi · refreshes every 30s</p>
        </div>
      </div>
    </div>
  )
}