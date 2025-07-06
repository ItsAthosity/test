import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "J2DL Market - Grow Garden Trading Hub",
  description: "Buy, sell, and trade rare pets from Grow a Garden. Secure transactions with sheckles or pet swaps.",
  keywords: "grow garden, pet trading, sheckles, rare pets, trading hub, j2dl market",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'