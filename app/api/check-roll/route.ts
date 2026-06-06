import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const rollNumber = (body.rollNumber ?? '').trim()
    if (!rollNumber) return NextResponse.json({ played: false })

    const { data, error } = await supabase
      .from('quiz_results')
      .select('id, roll_number, student_name, score, created_at')
      .eq('roll_number', rollNumber)
      .maybeSingle()

    if (error) return NextResponse.json({ played: false })
    if (data)  return NextResponse.json({ played: true, entry: data })
    return NextResponse.json({ played: false })
  } catch {
    return NextResponse.json({ played: false })
  }
}