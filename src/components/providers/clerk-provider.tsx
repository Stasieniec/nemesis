'use client'

import { ClerkProvider } from "@clerk/nextjs"

const appearance = {
  layout: {
    socialButtonsPlacement: "bottom" as const,
    socialButtonsVariant: "blockButton" as const,
  },
  variables: {
    colorPrimary: "hsl(345 82.7% 40.8%)",
    colorTextOnPrimaryBackground: "hsl(210 20% 98%)",
    colorBackground: "hsl(224 71.4% 4.1%)",
    colorInputBackground: "hsl(217.2 32.6% 17.5%)",
    colorInputText: "hsl(210 20% 98%)",
    colorText: "hsl(210 20% 98%)",
    colorTextSecondary: "hsl(215 20.2% 65.1%)",
    colorAlphaShade: "hsl(215 20.2% 65.1% / 0.1)",
    colorSuccess: "hsl(143 71.4% 40.8%)",
    colorWarning: "hsl(37 95.8% 58.6%)",
    colorError: "hsl(0 84.2% 60.2%)",
    fontFamily: "var(--font-inter)",
    fontFamilyButtons: "var(--font-space-grotesk)",
    borderRadius: "0.5rem",
  },
  elements: {
    card: "shadow-md bg-background border border-border",
    navbar: "hidden",
    footer: "hidden",
    formButtonPrimary: 
      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-none",
    formButtonReset: 
      "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    dividerLine: "bg-border",
    dividerText: "text-muted-foreground",
    formFieldInput: 
      "bg-background border-2 border-border focus:border-primary focus:ring-1 focus:ring-primary",
    headerTitle: "font-heading text-foreground",
    headerSubtitle: "text-muted-foreground",
    socialButtonsIconButton: 
      "border-2 border-border hover:bg-accent hover:text-accent-foreground",
    socialButtonsBlockButton: 
      "border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground",
    footerActionLink: 
      "text-primary hover:text-primary/90",
    identityPreviewEditButton: 
      "text-primary hover:text-primary/90",
    formFieldLabel: "text-foreground",
    formFieldLabelRow: "text-foreground",
    formFieldInputGroup: "text-foreground",
    formFieldError: "text-destructive",
    formFieldSuccess: "text-success",
    formFieldHint: "text-muted-foreground",
    form: "bg-background text-foreground",
    formResendCodeLink: "text-primary hover:text-primary/90",
    otpCodeFieldInput: "bg-background border-2 border-border text-foreground",
  },
} as const

export function ClerkClientProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={appearance}
    >
      {children}
    </ClerkProvider>
  )
} 