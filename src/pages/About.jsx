import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'

const About = () => {
  return (
    <>
      <section className="section banner-inner">
          <div className="hero-container">
              <div className="banner-inner-container">
                  <h1 className="banner-inner-title">About Us</h1>
                  <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      Learn more about Style & Shine Lounge by Samina Khan — where Beauty, Fashion, and Confidence come together, all in one place.</p>
              </div>
          </div>
      </section>
      
      
      <section className="section about-benefits">
          <div className="hero-container">
              <div className="about-benefits__main-content">
      
                  <div className="about-benefits__image-container animate-box animated-delay-fast animate__animated"
                      data-animate="animate__fadeInRight">
                      <div className="about-benefits__image-decoration">
                          <div className="image-spacer"></div>
                      </div>
      
                      <div className="image-container about-benefits__image">
                          <img src={imagePath("about123.jpg")} alt="About Image" />
                      </div>
                  </div>
      
                  <div className="about-benefits__content-container animate-box animated animate__animated"
                      data-animate="animate__fadeInLeft">
                      <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">Style & Shine Lounge — By Samina Khan</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">You Look Amazing.<br />
                          A New Look. A New You.</h2>
                      <p className="about-benefit__content-description animate-box animated animate__animated"
                          data-animate="animate__fadeInUp">Founded by Samina Khan with a passion for beauty and self-expression, Style & Shine Lounge is your destination for Beauty, Fashion, and Confidence — all in one place, at Andheri West, Mumbai.</p>
      
                      <div className="about-benefits__list-container">
                          <div className="about-benefits__icon-list-container">
                              <i className="fa-solid fa-check about-benefits__icon-list"></i>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                              <h3>Premium Beauty Services</h3>
                              <p>From Hair Styling & Hair Spa to Professional Makeup, Nail Art, Skin Care, and Bridal Makeovers — we offer a complete range of premium beauty treatments.</p>
                          </div>
                      </div>
      
                      <div className="about-benefits__list-container">
                          <div className="about-benefits__icon-list-container">
                              <i className="fa-solid fa-check about-benefits__icon-list"></i>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                              <h3>Safe Products for Skin</h3>
                              <p>We use only skin-safe, dermatologist-tested products that are gentle on all skin types, ensuring a healthy glow without any harmful side effects.</p>
                          </div>
                      </div>
      
                      <div className="about-benefits__list-container">
                          <div className="about-benefits__icon-list-container">
                              <i className="fa-solid fa-check about-benefits__icon-list"></i>
                          </div>
                          <div className="d-flex flex-column gspace-2">
                              <h3>Your First Choice for Every Occasion</h3>
                              <p>Whether it's a special occasion or your everyday glow-up, Style & Shine Lounge by Samina Khan will always be your first choice!</p>
                          </div>
                      </div>
      
                      <div>
                          <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
                      </div>
                  </div>
      
              </div>
          </div>
      </section>
      
      
      
      
      <div className="section about-experience">
          <div className="hero-container">
              <div className="about-experience__main-content">
      
                  <div className="about-experience__content-container">
                      <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">In Andheri West, Mumbai</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Where Beauty Meets Style<br />& Your Confidence Shines!</h2>
                      <p className="about-experience__content-description animate-box animated animate__animated"
                          data-animate="animate__fadeInDown">Step into Style & Shine Lounge and leave the stress behind. Every visit is designed to be a relaxing, rejuvenating experience where you are pampered from start to finish — by Samina Khan's expert team.</p>
                      <div className="image-container">
                          <img src={imagePath("Homeheroimage1alk.jpg")} alt="About Experience Image" />
                      </div>
                  </div>
      
                  <div className="about-experience__highlight-container animate-box animated animate__animated"
                      data-animate="animate__fadeInRight">
                      <div className="image-container">
                          <img src={imagePath("whyusimg123.jpg")} alt="About Experience Image" />
                      </div>
                          <p>Our comprehensive menu of services covers everything you need to look and feel your best — from head to toe, we've got you covered with expert care and premium treatments.</p>
                          <div className="row row-cols-md-3 row-cols-1 grid-spacer-2 w-100">
                              <div className="col">
                                  <ul className="check-list">
                                      <li>Hair Styling</li>
                                      <li>Hair Spa</li>
                                      <li>Professional Makeup</li>
                                      <li>Nail Art</li>
                                  </ul>
                              </div>
                              <div className="col">
                                  <ul className="check-list">
                                      <li>Nail Care</li>
                                      <li>Skin Care</li>
                                      <li>Facial Treatments</li>
                                      <li>Bridal Makeovers</li>
                                  </ul>
                              </div>
                              <div className="col">
                                  <ul className="check-list">
                                      <li>Party Makeovers</li>
                                      <li>Premium Beauty</li>
                                      <li>Everyday Glow-ups</li>
                                      <li>Special Occasions</li>
                                  </ul>
                              </div>
                          </div>
                  </div>
      
              </div>
          </div>
      </div>
      
      
      <section className="section-py-medium">
          <div className="hero-container">
              <div className="d-flex flex-column gspace-5">
                  <div className="d-flex flex-column gspace-2 justify-content-center align-items-center text-center">
                      <div className="sub-heading-double sub-heading-w-20 justify-content-center animate-box animated animate__animated"
                          data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">Our Team</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Meet Our Expert<br />Beauty Artists</h2>
                  </div>
      
                  <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col">
                          <div className="team-content-container team-founder-hair-style animate-box animated-delay-fast animate__animated"
                              data-animate="animate__fadeInUp">
                              <div className="team-name-container">
                                  <div className="content-spacer"></div>
                                  <h3 className="team-name">Samina Khan</h3>
                                  <p className="team-details">Founder & Lead Artist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="team-content-container team-cofounder-fashion-style animate-box animated animate__animated"
                              data-animate="animate__fadeInUp">
                              <div className="team-name-container">
                                  <div className="content-spacer"></div>
                                  <h3 className="team-name">Sofia</h3>
                                  <p className="team-details">Senior Makeup Artist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="team-content-container team-makeup-artist animate-box animated-delay-slow animate__animated"
                              data-animate="animate__fadeInUp">
                              <div className="team-name-container">
                                  <div className="content-spacer"></div>
                                  <h3 className="team-name">Efrina</h3>
                                  <p className="team-details">Makeup Artist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="team-content-container team-makeup-styler animate-box animated animate__animated"
                              data-animate="animate__fadeInUp">
                              <div className="team-name-container">
                                  <div className="content-spacer"></div>
                                  <h3 className="team-name">Nita</h3>
                                  <p className="team-details">Nail Art Specialist</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      
    </>
  )
}

export default About
