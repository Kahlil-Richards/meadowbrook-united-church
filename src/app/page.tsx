import live_thumbnail from '../../public/img'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='section'>
      <div className="home__welcome">

//SVG with className home__icon

        <h1 className="title">Let's bring them home</h1>
        <h1 className="description">text</h1>
        <a className="button" data-name="color" data-value="blue">
          <h1 className="button__text"></h1>
        </a>
      </div>

      <div className="home__events">
        <div className="home__event-wrapper">
// JavaScript to check database and return info as tag (like react components)
        </div>
      </div>

      <div className="home__main">
        <div className="home__main-group">
          <Image className="home__main-img" src={live_thumbnail} />
          <div className="home__main-info">

          </div>

          <h1 className="title">Home</h1>
          <Link href="https://www.youtube.com/@meadowbrookunitedchurch82/live" target='_blank'></Link>
        </div>
      </div>
    </main>
  )
}
