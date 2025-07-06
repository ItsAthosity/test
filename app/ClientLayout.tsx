"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <style jsx global>{`
          [data-v0-t] {
            display: none !important;
          }
          .v0-watermark {
            display: none !important;
          }
          [class*="v0"] {
            display: none !important;
          }
        `}</style>
      </body>
    </html>
  )
}
