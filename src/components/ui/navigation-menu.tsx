'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/nemesis"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Find Nemesis
      </Link>
      <Link
        href="/goals"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Goals
      </Link>
      <Link
        href="/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Profile
      </Link>
    </nav>
  )
} 