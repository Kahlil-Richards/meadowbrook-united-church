import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='section'>
      <h1 className="title">Home</h1>
      <Link href="/about"></Link>
    </main>
  )
}
