import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string) {
        try {
          cookieStore.set({ name, value })
        } catch {
          // Server component — can't set cookies
        }
      },
      remove(name: string) {
        try {
          cookieStore.set({ name, value: '' })
        } catch {
          // Server component — can't delete cookies
        }
      },
    },
  })
}
