import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res }, {supabaseUrl, supabaseKey})
  await supabase.auth.getSession()
  return res
}