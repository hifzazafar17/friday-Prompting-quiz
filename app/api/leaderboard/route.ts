import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('id, roll_number, student_name, score, time_taken, created_at')
      .order('score',      { ascending: false })
      .order('time_taken', { ascending: true,  nullsFirst: false })
      .order('created_at', { ascending: true })

    if (error) return NextResponse.json({ results: [] }, { status: 500 })
    return NextResponse.json({ results: data ?? [] })
  } catch {
    return NextResponse.json({ results: [] }, { status: 500 })
  }
}