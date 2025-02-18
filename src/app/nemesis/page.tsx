import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

export default async function NemesisPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  return (
    <div className="container py-8">
      <h1 className="font-heading text-4xl font-bold mb-8">Find Your Nemesis</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Matching Preferences */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="font-heading text-2xl font-semibold mb-4">Your Goals</h2>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <h3 className="font-heading text-lg font-medium mb-2">Fitness</h3>
              <p className="text-muted-foreground">Looking for someone to compete in daily workout challenges</p>
            </div>
            <div className="rounded-md bg-muted p-4">
              <h3 className="font-heading text-lg font-medium mb-2">Coding</h3>
              <p className="text-muted-foreground">Want to compete in solving coding problems</p>
            </div>
            <Button className="w-full mt-4">Add New Goal</Button>
          </div>
        </div>

        {/* Potential Matches */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="font-heading text-2xl font-semibold mb-4">Potential Nemeses</h2>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-medium">Sarah K.</h3>
                <span className="text-sm text-muted-foreground">95% Match</span>
              </div>
              <p className="text-muted-foreground mb-4">Also interested in fitness and coding challenges</p>
              <Button variant="outline" className="w-full">View Profile</Button>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-medium">Alex M.</h3>
                <span className="text-sm text-muted-foreground">87% Match</span>
              </div>
              <p className="text-muted-foreground mb-4">Matches your coding goals and schedule</p>
              <Button variant="outline" className="w-full">View Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 