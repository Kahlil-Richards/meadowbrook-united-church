import live_thumbnail from '../public/img/live-thumbnail.jpg'
import map from '../public/img/live-thumbnail.jpg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='section'>
      <div className="home__welcome">

        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="57" viewBox="0 0 52 57">
          <path d="M8.66667 57H52V51.3H8.70133C7.36667 51.2658 5.77778 50.7442 5.77778 48.45C5.77778 46.1558 7.36667 45.6342 8.70133 45.6H52V5.7C52 4.18827 51.3913 2.73845 50.3077 1.66949C49.2242 0.600534 47.7546 0 46.2222 0H8.66667C5.18267 0 0 2.27715 0 8.55V48.45C0 54.7228 5.18267 57 8.66667 57ZM14.4444 14.25H23.1111V8.55H28.8889V14.25H37.5556V19.95H28.8889V37.05H23.1111V19.95H14.4444V14.25Z" fill="black" />
        </svg>

        <h1 className="title">Lets bring them home</h1>
        <h1 className="description">To live out God's purpose for salvation by reflecting the unconditional love of God through dynamic Christian worship, mutual care & support, active community engagement and proactive servant leadership, working towards peace and harmony in community.</h1>
        <a className="button" data-name="color" data-value="blue">
          <h1 className="button__text"></h1>
        </a>
      </div>

      <div className="home__events">
        <div className="home__event-wrapper">
        </div>
      </div>

      <div className="home__main">
        <div className="home__main-group">
          <h1 className="title">Livestream</h1>
          <Image className="home__main-img" alt="About Church image" src={live_thumbnail} />
          <div className="home__main-info">
            <h1 className="subtitle">
              Build your relationship with Christ
            </h1>
            <div className="home__countdown-group">
              <div className="home__countdown">5 34 5 3</div>
              <div className="home__countdown-text">Days Hours Mins Seconds</div>
            </div>
          </div>
          <div className="buttons">
            <Link className="youtube" href="https://www.youtube.com/@meadowbrookunitedchurch82/live" target='_blank'>Youtube</Link>
            <Link className="youtube" href="https://www.youtube.com/@meadowbrookunitedchurch82/live" target='_blank'>Order of Service</Link>
          </div>
          <h1 className="title">Home</h1>
        </div>
        <div className="home__info-group">
          <div className="home__map">
            <h1 className="subtitle">Map</h1>
            <Image src={map} alt="map"></Image>
            <h1 className="description">
              2 Flemington Drive
              Kingston 19
              Jamaica</h1>
          </div>
          <div className="home__contact">
            <h1 className="subtitle">Contact Us</h1>
            <h1 className="description">
              Phone: 1-(876)-969-6918
              <br></br>
              Fax: 1-(876)-925-8202
              <br></br>
              Email: home@meadunited.org
              <br></br>
              Office Hours: (MON-FRI) 9:00 AM - 5:00PM
            </h1>
          </div>
          <div className="home__newsletter">
            <h1 className="subtitle">Newsletter</h1>
            <h1 className="description">
              subscribe to be updated
            </h1>
            <h1 className="description">Email: <input title="subscription" name="subscription" type=''></input></h1>
          </div>
        </div>
      </div>
    </main >
  )
}
