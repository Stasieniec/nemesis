import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

export default async function GoalsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-4xl font-bold">Your Goals</h1>
        <Button>Add New Goal</Button>
      </div>

      <div className="grid gap-6">
        {/* Active Goal */}
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-heading text-2xl font-semibold">Complete 100 Leetcode Problems</h2>
              <p className="text-muted-foreground">Competing with Alex M.</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              In Progress
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Progress</span>
                <span>45/100</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Your Progress</p>
                <p className="font-mono text-2xl text-accent">45</p>
              </div>
              <div>
                <p className="text-muted-foreground">Nemesis Progress</p>
                <p className="font-mono text-2xl text-primary">42</p>
              </div>
              <div>
                <p className="text-muted-foreground">Days Left</p>
                <p className="font-mono text-2xl">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Goal */}
        <div className="rounded-lg border bg-card p-6 opacity-75">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-heading text-2xl font-semibold">30 Days of Working Out</h2>
              <p className="text-muted-foreground">Competed with Sarah K.</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
              Completed
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Final Score</span>
                <span>28/30 days</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-accent" style={{ width: "93%" }}></div>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Your Score</p>
                <p className="font-mono text-2xl text-accent">28</p>
              </div>
              <div>
                <p className="text-muted-foreground">Nemesis Score</p>
                <p className="font-mono text-2xl text-primary">26</p>
              </div>
              <div>
                <p className="text-muted-foreground">Result</p>
                <p className="font-mono text-2xl text-accent">Victory!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 