import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ProfileForm } from "@/components/profile/profile-form"

export default async function ProfilePage() {
  const { userId } = await auth()
  if (!userId) redirect('/')

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-heading font-bold mb-8">Profile Settings</h1>
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  )
} 