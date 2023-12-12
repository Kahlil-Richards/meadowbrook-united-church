import PocketBase from 'pocketbase'
import './gallary.css'

export default async function Home() {

    const pb = new PocketBase('http://127.0.0.1:8090' as string)
    const records = await pb.collection('gallary').getFullList({
        sort: '-created',
    });

    return (
        <main className="section">
            <h1 className="title">Gallary</h1>
            <h1 className="subtitle">Whats New</h1>
            <div className="gallary__img-group">


            </div>
        </main>
    )
}
