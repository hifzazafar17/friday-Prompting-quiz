'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import type { Question, Screen, QuizResult } from '@/lib/types'
import { getScoreMessage, getScoreTier, formatTime } from '@/lib/types'
import { getRandomQuestions, shuffleOptions } from '@/lib/questions'

const TOTAL_SECONDS = 450 // 7.5 minutes

const BLOCKED_MSGS = [
  { title: 'Error 403: Forbidden',
    body: (_: string, s: number) => `This roll number already has a commit on record. Yours: ${s}/10. No force-push allowed.` },
  { title: 'git push --force rejected',
    body: (_: string, s: number) => `You already pushed to main. Score: ${s}/10. Branch protection rules exist for a reason.` },
  { title: 'TypeError: play() called twice',
    body: (_: string, s: number) => `Cannot invoke play() on an instance that has already resolved. Score: ${s}/10.` },
  { title: 'Segmentation fault (core dumped)',
    body: (_: string, s: number) => `Process already completed. Exit code: ${s}/10. Restart not permitted.` },
  { title: '409 Conflict',
    body: (r: string, s: number) => `Resource already exists at this roll number. Previous score: ${s}/10. DELETE not supported.` },
  { title: 'Stack Overflow (not the website)',
    body: (_: string, s: number) => `You've already called this function. Recursion depth: 1. Score: ${s}/10.` },
  { title: 'npm ERR! duplicate package',
    body: (r: string, s: number) => `Package '${r}' already installed in this registry. Score: ${s}/10.` },
  { title: 'Duplicate key violates unique constraint',
    body: (r: string, s: number) => `INSERT failed. roll_number='${r}' already exists. Score: ${s}/10.` },
]

function pickBlocked(roll: string) {
  const h = roll.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return BLOCKED_MSGS[h % BLOCKED_MSGS.length]
}

function Spinner() {
  return (
    <span className="flex items-center justify-center gap-2 text-teal-400 text-sm">
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      Checking...
    </span>
  )
}

function tierColor(score: number) {
  const t = getScoreTier(score)
  if (t === 'perfect') return 'text-yellow-300'
  if (t === 'good')    return 'text-green-400'
  if (t === 'mid')     return 'text-orange-400'
  return 'text-red-400'
}

// ── Landing ───────────────────────────────────────────────────────────────────
function LandingScreen({ onStart }: { onStart: (name: string, roll: string) => Promise<void> }) {
  const [name, setName]       = useState('')
  const [roll, setRoll]       = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const n = name.trim(), r = roll.trim()
    if (!n) { setError('Enter your name.'); return }
    if (!/^\d{8}$/.test(r)) { setError('Roll number must be exactly 8 digits (e.g. 00492394).'); return }
    setLoading(true)
    try { await onStart(n, r) }
    catch { setError('Something went wrong. Try again.') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-teal-400 font-mono text-xs mb-2 tracking-widest uppercase">GIAIC · Agentic AI · Class 2</p>
          <h1 className="text-3xl font-bold text-white mb-2">AI Prompting 2026</h1>
          <p className="text-slate-400 text-sm">10 questions · 7.5 minutes · one attempt</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
          <p className="font-mono text-teal-400 text-xs mb-5">$ ./start-quiz</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1.5 font-medium">Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                placeholder="e.g. Ahmed Khan" disabled={loading}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white
                           placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors
                           disabled:opacity-50 text-sm"/>
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1.5 font-medium">Roll Number</label>
              <input type="text" value={roll}
                onChange={e => setRoll(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder="8-digit number (e.g. 00492394)" disabled={loading} maxLength={8}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white
                           placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors
                           disabled:opacity-50 font-mono text-sm tracking-widest"/>
              <p className="text-slate-500 text-xs mt-1">From your GIAIC ID card</p>
            </div>
            {error && (
              <div className="bg-red-950 border border-red-700 rounded-lg px-4 py-3">
                <p className="text-red-400 text-sm font-mono">{error}</p>
              </div>
            )}
            <button type="submit" disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-slate-700 text-white
                         font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed mt-2">
              {loading ? <Spinner/> : 'Start Quiz →'}
            </button>
          </form>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-slate-500 text-xs text-center">One attempt per student · Roll number is your unique identifier</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/leaderboard" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
            View leaderboard →
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Blocked ───────────────────────────────────────────────────────────────────
function BlockedScreen({ entry, onLeaderboard }: { entry: QuizResult; onLeaderboard: () => void }) {
  const msg  = pickBlocked(entry.roll_number)
  const body = msg.body(entry.roll_number, entry.score)
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 border border-red-700 rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"/>
            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
            <div className="w-3 h-3 rounded-full bg-green-500"/>
            <span className="font-mono text-slate-400 text-xs ml-2">quiz-engine — error</span>
          </div>
          <p className="text-red-400 font-mono text-xs mb-3">✗ {msg.title}</p>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">{body}</p>
          <div className="bg-slate-900 rounded-lg p-4 mb-5 font-mono text-sm space-y-1">
            <div className="flex justify-between"><span className="text-slate-500">student</span><span className="text-white">{entry.student_name}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">roll_no</span><span className="text-teal-400">{entry.roll_number}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">score</span><span className={tierColor(entry.score)}>{entry.score}/10</span></div>
            <div className="flex justify-between"><span className="text-slate-500">status</span><span className="text-yellow-400">LOCKED</span></div>
          </div>
          <button onClick={onLeaderboard}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Quiz ──────────────────────────────────────────────────────────────────────
function QuizScreen({ questions, onComplete }: {
  questions: Question[]
  onComplete: (score: number, timeTaken: number) => void
}) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore]       = useState(0)
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS)

  // Refs to avoid stale closures inside setInterval
  const scoreRef    = useRef(0)
  const timeLeftRef = useRef(TOTAL_SECONDS)
  const doneRef     = useRef(false)

  // Keep scoreRef in sync with state
  useEffect(() => { scoreRef.current = score }, [score])

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1
        timeLeftRef.current = next
        if (next <= 0 && !doneRef.current) {
          doneRef.current = true
          clearInterval(interval)
          // Time's up — submit whatever score they have
          onComplete(scoreRef.current, TOTAL_SECONDS)
          return 0
        }
        return next
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [onComplete])

  const q       = questions[currentQ]
  const isLast  = currentQ === questions.length - 1
  const letters = ['A', 'B', 'C', 'D']

  // Timer appearance
  const timerColor = timeLeft <= 60 ? 'text-red-400'
    : timeLeft <= 120 ? 'text-yellow-400'
    : 'text-teal-400'

  function handleSelect(idx: number) {
    if (revealed || doneRef.current) return
    setSelected(idx)
    setRevealed(true)
    if (idx === q.correct) setScore(s => s + 1)
  }

  function handleNext() {
    if (doneRef.current) return
    if (isLast) {
      doneRef.current = true
      const timeTaken = TOTAL_SECONDS - timeLeftRef.current
      onComplete(scoreRef.current, timeTaken)
    } else {
      setCurrentQ(c => c + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  function optStyle(idx: number) {
    const base = 'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all font-mono'
    if (!revealed) return `${base} bg-slate-900 border-slate-700 hover:border-teal-500 hover:bg-slate-800 cursor-pointer text-slate-200`
    if (idx === q.correct) return `${base} bg-green-950 border-green-500 text-green-300`
    if (idx === selected)  return `${base} bg-red-950 border-red-500 text-red-300`
    return `${base} bg-slate-900 border-slate-800 text-slate-500`
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress + Timer row */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-400 text-xs font-mono">
            Question {currentQ + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-xs font-mono">⏱</span>
            <span className={`font-mono text-sm font-bold tabular-nums ${timerColor}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-teal-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}/>
        </div>

        {/* Question card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl mb-4">
          <div className="flex gap-2 mb-4">
            <span className="bg-slate-700 text-teal-400 text-xs px-2 py-1 rounded font-mono">{q.concept}</span>
            <span className={`text-xs px-2 py-1 rounded font-mono ${
              q.difficulty === 'hard'   ? 'bg-red-950 text-red-400'
            : q.difficulty === 'medium' ? 'bg-yellow-950 text-yellow-400'
            :                             'bg-green-950 text-green-400'}`}>
              {q.difficulty}
            </span>
          </div>
          <p className="text-white text-base leading-relaxed mb-6 font-medium">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => handleSelect(idx)}
                disabled={revealed || doneRef.current} className={optStyle(idx)}>
                <span className="text-slate-500 mr-3">{letters[idx]}.</span>{opt}
              </button>
            ))}
          </div>
          {revealed && (
            <div className={`mt-4 px-4 py-3 rounded-lg text-sm font-mono ${
              selected === q.correct
                ? 'bg-green-950 border border-green-800 text-green-300'
                : 'bg-red-950 border border-red-800 text-red-300'}`}>
              {selected === q.correct ? '✓ Correct — git add .'
                : `✗ Incorrect — correct: ${letters[q.correct]}`}
            </div>
          )}
        </div>

        {revealed && !doneRef.current && (
          <button onClick={handleNext}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition-colors">
            {isLast ? 'See Results →' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  )
}

// ── Result ────────────────────────────────────────────────────────────────────
function ResultScreen({ name, rollNumber, score, timeTaken, submitting, submitError, onLeaderboard }: {
  name: string; rollNumber: string; score: number; timeTaken: number
  submitting: boolean; submitError: string; onLeaderboard: () => void
}) {
  const message = getScoreMessage(score)
  const tier    = getScoreTier(score)
  const cfg = {
    perfect: { border: 'border-yellow-500', icon: '🏆', label: 'PERFECT SCORE',    color: 'text-yellow-300' },
    good:    { border: 'border-green-500',  icon: '✓',  label: 'BUILD SUCCESSFUL', color: 'text-green-400'  },
    mid:     { border: 'border-orange-500', icon: '!',  label: 'MERGE CONFLICT',   color: 'text-orange-400' },
    low:     { border: 'border-red-500',    icon: '✗',  label: 'BUILD FAILED',     color: 'text-red-400'    },
  }[tier]

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className={`bg-slate-800 border ${cfg.border} rounded-xl p-6 shadow-xl`}>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500"/>
            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
            <div className="w-3 h-3 rounded-full bg-green-500"/>
            <span className="font-mono text-slate-400 text-xs ml-2">quiz-engine — result</span>
          </div>
          <p className={`font-mono text-xs mb-2 ${cfg.color}`}>{cfg.icon} {cfg.label}</p>
          <div className="text-center py-6">
            <span className={`text-7xl font-bold font-mono ${cfg.color}`}>{score}</span>
            <span className="text-slate-500 text-3xl font-mono">/10</span>
          </div>
          <div className="bg-slate-900 rounded-lg px-4 py-3 mb-5">
            <p className="font-mono text-teal-400 text-sm break-words">{message}</p>
          </div>
          <div className="font-mono text-sm space-y-1.5 mb-5">
            <div className="flex justify-between">
              <span className="text-slate-500">name</span>
              <span className="text-white">{name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">roll_no</span>
              <span className="text-teal-400">{rollNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">time</span>
              <span className="text-slate-300">{formatTime(timeTaken)}</span>
            </div>
          </div>
          {submitError && (
            <div className="bg-red-950 border border-red-800 rounded-lg px-4 py-3 mb-4">
              <p className="text-red-400 text-sm font-mono">{submitError}</p>
            </div>
          )}
          <button onClick={onLeaderboard} disabled={submitting}
            className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-slate-700 text-white
                       font-semibold py-3 rounded-lg transition-colors disabled:cursor-not-allowed">
            {submitting ? <Spinner/> : 'View Leaderboard →'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [screen, setScreen]             = useState<Screen>('landing')
  const [playerName, setPlayerName]     = useState('')
  const [rollNumber, setRollNumber]     = useState('')
  const [blockedEntry, setBlockedEntry] = useState<QuizResult | null>(null)
  const [questions, setQuestions]       = useState<Question[]>([])
  const [finalScore, setFinalScore]     = useState(0)
  const [finalTime, setFinalTime]       = useState(0)
  const [submitting, setSubmitting]     = useState(false)
  const [submitError, setSubmitError]   = useState('')

  const handleStart = useCallback(async (name: string, roll: string) => {
    const res  = await fetch('/api/check-roll', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rollNumber: roll })
    })
    const data = await res.json()
    if (data.played) {
      setBlockedEntry(data.entry); setPlayerName(name); setRollNumber(roll); setScreen('blocked'); return
    }
    const raw      = getRandomQuestions(10)
    const shuffled = raw.map(q => shuffleOptions(q).question)
    setQuestions(shuffled); setPlayerName(name); setRollNumber(roll); setScreen('quiz')
  }, [])

  const handleQuizComplete = useCallback(async (score: number, timeTaken: number) => {
    setFinalScore(score)
    setFinalTime(timeTaken)
    setScreen('result')
    setSubmitting(true)
    setSubmitError('')
    try {
      const res  = await fetch('/api/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNumber, studentName: playerName, score, timeTaken })
      })
      const data = await res.json()
      if (!data.success) setSubmitError('Score could not be saved — contact your teacher.')
    } catch {
      setSubmitError('Network error.')
    } finally {
      setSubmitting(false)
    }
  }, [rollNumber, playerName])

  if (screen === 'landing') return <LandingScreen onStart={handleStart}/>
  if (screen === 'blocked' && blockedEntry)
    return <BlockedScreen entry={blockedEntry} onLeaderboard={() => window.location.href = '/leaderboard'}/>
  if (screen === 'quiz')
    return <QuizScreen questions={questions} onComplete={handleQuizComplete}/>
  if (screen === 'result')
    return <ResultScreen name={playerName} rollNumber={rollNumber}
             score={finalScore} timeTaken={finalTime}
             submitting={submitting} submitError={submitError}
             onLeaderboard={() => window.location.href = '/leaderboard'}/>
  return null
}