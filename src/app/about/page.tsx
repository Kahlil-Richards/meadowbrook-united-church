import './about.css'
import Image from 'next/image'
import about from '../../../public/img/about.png'
import about__description from '../../../public/img/about.png'
import about2 from '../../../public/img/about2.jpg'
import webster from '../../../public/img/webster.jpg'
import council from '../../../public/img/council.jpg'
import wood from '../../../public/img/wood.jpeg'

export default function About() {
    return (
        <main className="main">
            <div className="section about__header">

                <h1 className="title">About</h1>
                <Image className='about__img' src={about} alt="" />
                <h1 className="subtitle">Meadowbrook united
                    church</h1>
            </div>
            <div className="section">
                <h1 className="description">
                    Meadowbrook UNITED Church (MUC) is a congregation of the United Church in Jamaica and the Cayman Islands (UCJCI).  The United Church was formed in 1965 by bringing the Presbyterian Church in Jamaica and the Congregational Union of Jamaica together.  The Disciples of Christ in Jamaica joined on 13 December 1992.  The UCJCI recognizes Jesus Christ as Lord and Head of the Church.  Within that context the church is organized in the following manner.
                </h1>
                <div className="about__description">
                    <Image src={about2} alt="About Church image" className="about__img-description" />
                    <h1 className="description">
                        On September 13, 1959 twenty-five members of the Presbyterian faith met for divine worship in the Assembly Hall of Meadowbrook High School and set the stage for a dynamic local mission – the Meadowbrook Presbyterian Church.
                    </h1>
                </div>
            </div>
            <div className="section">
                <h1 className="subtitle">M.U.C Links</h1>
                <ul className="about__links">
                    <li className="about__link">
                        <a href="http://ucjci.com" target="_blank" rel="noopener noreferrer">
                            <div className="about__link-img-container">
                                <Image src={about__description} alt="UCJCI Church image" className="about__link-img" />
                            </div>
                            <h1 className="description__bold">UCJCI</h1>
                        </a>
                    </li>
                    <li className="about__link">
                        <a href="http://www.webstermemorial.org/" target="_blank" rel="noopener noreferrer">
                            <div className="about__link-img-container">
                                <Image src={webster} alt="Webster Church image" className="about__link-img" />
                            </div>
                            <h1 className="description__bold">Webster</h1>
                        </a>
                    </li>
                    <li className="about__link">
                        <a href="http://www.cwmission.org/" target="_blank" rel="noopener noreferrer">
                            <div className="about__link-img-container">
                                <Image src={council} alt="Webster Church image" className="about__link-img" />
                            </div>
                            <h1 className="description__bold">World Mission</h1>
                        </a>
                    </li>
                    <li className="about__link">
                        <a href="http://www.woodschurch.org/" target="_blank" rel="noopener noreferrer">
                            <div className="about__link-img-container">
                                <Image src={wood} alt="Webster Church image" className="about__link-img" />
                            </div>
                            <h1 className="description__bold">Wood Memorial</h1>
                        </a>
                    </li>
                </ul>
            </div>
        </main >
    )
}