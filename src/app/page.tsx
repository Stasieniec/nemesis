import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Nemesis</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Find your rival, achieve your goals
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
          <Button variant="destructive" size="lg">Find Your Nemesis</Button>
        </div>
        <div className="mt-8 font-mono text-sm text-muted-foreground">
          <p>Active Rivalries: <span className="text-accent">1,337</span></p>
          <p>Goals Achieved: <span className="text-accent">42,069</span></p>
        </div>
      </div>
    </main>
  )
}
