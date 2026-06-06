import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body       = await req.json()
    const rollNumber = (body.rollNumber ?? '').trim()
    const studentName = (body.studentName ?? '').trim()
    const score      = Number(body.score)
    const timeTaken  = body.timeTaken != null
      ? Math.max(0, Math.round(Number(body.timeTaken)))
      : null

    if (!rollNumber || !studentName)
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 })
    if (!Number.isInteger(score) || score < 0 || score > 10)
      return NextResponse.json({ success: false, error: 'Invalid score' }, { status: 400 })

    const { error } = await supabase
      .from('quiz_results')
      .insert({ roll_number: rollNumber, student_name: studentName, score, time_taken: timeTaken })

    if (error) {
      if (error.code === '23505') return NextResponse.json({ success: false, reason: 'duplicate' })
      return NextResponse.json({ success: false }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}