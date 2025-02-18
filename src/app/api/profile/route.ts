import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    // Check if profile exists
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (profile) {
      return NextResponse.json(profile)
    }

    // Create new profile
    const { data: newProfile, error } = await supabaseAdmin
      .from('profiles')
      .insert({
        user_id: userId,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(newProfile)
  } catch (error) {
    console.error('Error creating profile:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 