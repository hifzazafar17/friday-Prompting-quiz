export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Question {
  id: number
  concept: string
  difficulty: Difficulty
  question: string
  options: [string, string, string, string]
  correct: 0 | 1 | 2 | 3
}

export interface QuizResult {
  id: string
  roll_number: string
  student_name: string
  score: number
  time_taken: number | null
  created_at: string
}

export type Screen = 'landing' | 'blocked' | 'quiz' | 'result'

export function getScoreMessage(score: number): string {
  if (score === 10) return 'git commit -m "Perfect score. No bugs found."'
  if (score >= 7)  return 'Build successful with warnings. Review the failed test cases.'
  if (score >= 4)  return 'Merge conflicts detected. Re-read the spec.'
  return 'npm install brain --save && retry'
}

export function getScoreTier(score: number): 'perfect' | 'good' | 'mid' | 'low' {
  if (score === 10) return 'perfect'
  if (score >= 7)  return 'good'
  if (score >= 4)  return 'mid'
  return 'low'
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}