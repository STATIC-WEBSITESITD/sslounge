import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'

const Contact = () => {
  return (
    <>
      <section className="section banner-contact">
          <div className="hero-container">
              <div className="card card-contact">
                  <h2 className="card-contact-title">Let's get in Touch</h2>
                  <div className="alert form-message success hidden">
                      <span className="check-icon"><i className="fa-solid fa-2xl fa-check"></i></span>
                      <p>Thank you! Form submitted successfully.</p>
                  </div>
      
                  <div className="alert form-message error hidden">
                      <span className="cross-icon"><i className="fa-solid fa-2xl fa-xmark"></i></span>
                      <p>Oops! Form submission failed. Please try again.</p>
                  </div>
                  <form id="contact-form" className="form">
                      <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                          <div className="col">
                              <div className="form-input-wrapper">
                                  <label htmlFor="first-name">First Name</label>
                                  <input type="text" name="first-name" id="first-name" placeholder="Enter Your First Name" />
                              </div>
                          </div>
                          <div className="col">
                              <div className="form-input-wrapper">
                                  <label htmlFor="last-name">Last Name</label>
                                  <input type="text" name="last-name" id="last-name" placeholder="Enter Your Last Name" />
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                          <div className="col">
                              <div className="form-input-wrapper">
                                  <label htmlFor="email">Email</label>
                                  <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                          <div className="col">
                              <div className="form-input-wrapper">
                                  <label htmlFor="phone">Phone Number</label>
                                  <input type="tel" name="phone" id="phone" placeholder="Enter Your Telephone" />
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                      </div>
                      <div className="form-input-wrapper">
                          <label htmlFor="message">Messages</label>
                          <textarea name="message" id="message" rows="4" placeholder="Enter Your Message"></textarea>
                      </div>
                      <div>
                          <button type="submit" className="btn btn-primary btn-nohover">Send Message</button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    </>
  )
}

export default Contact
