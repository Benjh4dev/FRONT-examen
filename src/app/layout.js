import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Examen',
  description: 'Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
