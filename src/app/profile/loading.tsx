export default function ProfileLoading() {
  return (
    <div className="container py-8">
      <div className="h-12 w-48 rounded-lg bg-muted animate-pulse mb-8" />
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Profile Info Skeleton */}
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-muted animate-pulse mb-4" />
              <div className="h-6 w-32 bg-muted animate-pulse mb-2" />
              <div className="h-4 w-24 bg-muted animate-pulse" />
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="h-6 w-24 bg-muted animate-pulse mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-24 bg-muted animate-pulse" />
                  <div className="h-4 w-8 bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Content Skeleton */}
        <div className="space-y-6">
          {/* Preferences Skeleton */}
          <div className="rounded-lg border bg-card p-6">
            <div className="h-6 w-32 bg-muted animate-pulse mb-6" />
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-4 w-24 bg-muted animate-pulse mb-2" />
                  <div className="h-4 w-48 bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Activity Skeleton */}
          <div className="rounded-lg border bg-card p-6">
            <div className="h-6 w-36 bg-muted animate-pulse mb-6" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-muted" />
                  <div>
                    <div className="h-4 w-48 bg-muted animate-pulse mb-1" />
                    <div className="h-3 w-24 bg-muted animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 