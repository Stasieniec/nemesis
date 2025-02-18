import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  return (
    <div className="container py-8">
      <h1 className="font-heading text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Cards */}
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold">Active Goals</h3>
          <p className="text-3xl font-mono text-accent mt-2">3</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold">Nemesis Streak</h3>
          <p className="text-3xl font-mono text-accent mt-2">7 days</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold">Goals Completed</h3>
          <p className="text-3xl font-mono text-accent mt-2">12</p>
        </div>
      </div>
    </div>
  )
} 