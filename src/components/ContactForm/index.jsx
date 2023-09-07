import { useState } from "react"


const ContactForm = () => {

    const [FormData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form data submitted:', FormData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={FormData.username}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Message:
                    <input
                        type="text"
                        name="message"
                        value={FormData.message}
                        onChange={handleChange}
                    />
                </label>
            </div>



            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    )
}

export default ContactForm