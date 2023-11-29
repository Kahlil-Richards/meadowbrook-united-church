import './contact.css'

export default function Contact() {
    return (
        <main className="main">
            <h1 className="title">Contact</h1>
            <h1 className="subtitle"></h1>
            <h1 className="description">
                Thank you for visiting our website. Please fill out the following form to request information about our ministries and services or to provide feedback about our site.
            </h1>
            <form action="" className="contact__form">
                <div className='contact__input-flex' >
                    <h1 className="subtitle contact__message">Name: </h1>
                    <input type="text" className="contact__input" />
                </div>
                <div className='contact__input-flex' >
                    <h1 className="subtitle contact__message">Email: </h1>
                    <input type="text" className="contact__input" />
                </div>
                <div className='contact__input-flex' >
                    <h1 className="subtitle contact__message">Message: </h1>
                    <textarea className="contact__input" />
                </div>
            </form>
        </main>
    )
}
