import { client } from '../../components/PocketBase'
import './gallary.css'

export default async function Home() {

    // const gallary = await client.collection('gallary').getOne('RECORD_ID', {
    //     expand: 'relField1,relField2.subRelField',
    // });

    // console.log(gallary)

    return (
        <main className="section">
            <h1 className="title">Gallary</h1>
            <h1 className="subtitle">Whats New</h1>
            <div className="gallary__img-group">{ }


            </div>
        </main>
    )
}
