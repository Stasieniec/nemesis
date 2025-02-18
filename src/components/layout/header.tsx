'use client'

import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { MainNav } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8">
          <div className="font-heading text-xl font-bold">
            <span className="text-primary">Nemesis</span>
          </div>
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                baseTheme: undefined,
                elements: {
                  avatarBox: "w-10 h-10",
                  card: "bg-background border border-border shadow-md",
                  userPreview: "bg-background",
                  userPreviewTextContainer: "font-heading",
                  userButtonPopoverCard: "bg-background border border-border shadow-md",
                  userButtonPopoverActionButton: "text-foreground hover:bg-accent hover:text-accent-foreground",
                  userButtonPopoverActionButtonText: "font-sans text-foreground",
                  userButtonPopoverActionButtonIcon: "text-muted-foreground",
                  userButtonPopoverFooter: "hidden",
                  userPreviewMainIdentifier: "text-foreground",
                  userPreviewSecondaryIdentifier: "text-muted-foreground",
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  )
} 