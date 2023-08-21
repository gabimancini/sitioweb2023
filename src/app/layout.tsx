import './globals.css'
import type { Metadata } from 'next'
import {Lato} from 'next/font/google'
import Navigation from './components/header';
import Hero from './components/hero';
import Mission from './components/mission';
import Services from './components/services';
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={lato.className}>
        <header className='absolute w-full z-10 md:p-6'>
          <Navigation />
        </header>
        <main>
          <Hero />
          <Mission/>
          <Services/>
        </main>
      </body>
    </html>
  )
}
