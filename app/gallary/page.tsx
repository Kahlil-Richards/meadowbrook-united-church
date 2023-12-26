import Image from 'next/image'
import './gallary.css'
import img1 from '../../public/img/27tnf94km28u1p3.jpg'
import img2 from '../../public/img/ita7v64bfclh118.jpg'
import img3 from '../../public/img/scolvylejsooywd.jpg'
import img4 from '../../public/img/w2ud2zl7bvz9v4y.webp'
import img5 from '../../public/img/sxqp4va7qls01ia.jpg'
import img6 from '../../public/img/x684xc7jtmx7beb.jpg'



export default async function Gallary() {

    return (
        <main className="container section">
            <h1 className="title">Gallary</h1>
            <h1 className="subtitle">Whats New</h1>
            <div className="gallary__img-group">
                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img1} alt='gallary' ></Image>
                </ol>

                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img2} alt='gallary' ></Image>
                </ol>

                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img3} alt='gallary' ></Image>
                </ol>

                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img4} alt='gallary' ></Image>
                </ol>

                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img5} alt='gallary' ></Image>
                </ol>

                <ol className="gallary_img-container">
                    <Image className="gallary__img" src={img6} alt='gallary' ></Image>
                </ol>

            </div>
        </main >
    )
} 
