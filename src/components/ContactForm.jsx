import { useState } from "react"

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  })

  const {subject, message} = formData

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <form id="contact-form">
        <input type="text" id="subject" className="form-control bg-lightGray mb-2" placeholder="Subject" value={subject} onChange={onChange} />
        <textarea name="message" id="message" rows="10" placeholder="Message..." className="bg-lightGray form-control mb-3" value={message} onChange={onChange}></textarea>
        <a href={`mailto:support@aesthetica.com?Subject=${subject}&body=${message}`}>
          <button className="btn btn-primary btn-block" type="button">SEND</button>
        </a>
      </form>
    </>
  )
}

export default ContactForm