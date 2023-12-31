import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Navigation from './components/header';
import Hero from './components/hero';
import Mission from './components/mission';
import Services from './components/services';
import Footer from './components/footer';
const lato = Lato({
  weight: ['300','400','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Devmagister',
  description: 'Devlopment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={lato.className}>
        <header className='absolute w-full z-10'>
          <Navigation />
        </header>
        <main>
          <Hero />
          <Mission />
          <Services />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
