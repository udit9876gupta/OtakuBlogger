import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'OtakuBlogger Homepage',
    template: '%s | OtakuBlogger',
  },
  description: 'Anime Blog Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}