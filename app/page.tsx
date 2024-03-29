import live_thumbnail from '../public/img/live-thumbnail.jpg'
import map from '../public/img/live-thumbnail.jpg'
import bg__img from '../public/img/home__bg.webp'
import Image from 'next/image'
import Link from 'next/link'
import CountDown from '../components/CountDown'
import { pb } from '../components/PocketBase'


export default async function Home() {

  const records = await pb.collection('events').getFullList(200, {
    sort: '-created',
  });


  const results = records.map((record) =>
    // <div className="event">
    //   <div className="calendar">
    //     <div className="event__date">
    //       {record.date_of_event}
    //     </div>
    //     <div className="event__time">
    //       {record.time_of_event}
    //     </div>
    //   </div>
    //   <div className="event__info">
    //     <div className="event__title">{record.name}</div>
    //     <div className="event__description">{record.description}</div>
    //   </div>
    // </div>
    <li>{record.Name}</li>

  );


  return (
    <main className='section container'>
      <div className="home__welcome">
        <Image className='home__bg-img' src={bg__img} alt='bg image'></Image>

        <svg className='home__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 57">
          <path d="M8.66667 57H52V51.3H8.70133C7.36667 51.2658 5.77778 50.7442 5.77778 48.45C5.77778 46.1558 7.36667 45.6342 8.70133 45.6H52V5.7C52 4.18827 51.3913 2.73845 50.3077 1.66949C49.2242 0.600534 47.7546 0 46.2222 0H8.66667C5.18267 0 0 2.27715 0 8.55V48.45C0 54.7228 5.18267 57 8.66667 57ZM14.4444 14.25H23.1111V8.55H28.8889V14.25H37.5556V19.95H28.8889V37.05H23.1111V19.95H14.4444V14.25Z" fill="black" />
        </svg>

        <h1 className="title">Lets bring them home</h1>
        <h1 className="description">To live out Gods purpose for salvation by reflecting the unconditional love of God through dynamic Christian worship, mutual care & support, active community engagement and proactive servant leadership, working towards peace and harmony in community.</h1>
        <button className='button' data-name="color" data-value="blue">
          <h1 className='button__text'>Message Us</h1>
        </button>
      </div>

      <div className="home__events">
        <div className="home__event-wrapper">
          date kn
          {results}
        </div>
      </div>

      <div className="home__main">
        <h1 className="title">Livestream</h1>
        <div className="home__main-group">
          <Image className="home__main-img" alt="About Church image" src={live_thumbnail} />
          <div className="home__main-info">
            <h1 className="subtitle">
              Build your relationship with Christ
            </h1>
            <div className="home__countdown-group">
              <div className="home__countdown-text">Sunday, March 6, 2022 starts in:</div>
              <CountDown></CountDown>
            </div>


            <div className="buttons">
              <Link className="youtube" href="https://www.youtube.com/@meadowbrookunitedchurch82/live" target='_blank'>Youtube</Link>
              <Link className="youtube" href="https://www.youtube.com/@meadowbrookunitedchurch82/live" target='_blank'>Order of Service</Link>
            </div>
          </div>
        </div>
        <div className="home__info-group">
          <div className="home__map">
            <h1 className="subtitle">Map</h1>
            <Image src={map} alt="map"></Image>
            <h1 className="description">
              2 Flemington Drive
              Kingston 19
              Jamaica
            </h1>
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
