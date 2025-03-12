import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Alex Imre',
    default: 'Alex Imre - Frontend Software Developer',
  },
  description:
    "🚀 I'm Alex, I work closely with users to design and ship impactful products that help them do more.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
