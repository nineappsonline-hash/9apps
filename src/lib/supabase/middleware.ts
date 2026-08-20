import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return response
  }

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string) {
          request.cookies.set({ name, value })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set(name, value)
        },
        remove(name: string) {
          request.cookies.set({ name, value: '' })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.delete(name)
        },
      },
    })

    await supabase.auth.getUser()
  } catch {
    // If Supabase fails, just continue without auth
  }

  return response
}
