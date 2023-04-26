import './globals.css'

export const metadata = {
  title: 'Readerai',
  description: 'Natural Language Processing Reader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
