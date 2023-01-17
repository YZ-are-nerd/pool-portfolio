import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='w-screen min-h-screen flex flex-col gap-1 overflow-x-hidden'>{children}</body>
    </html>
  )
}
