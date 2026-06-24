import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'
import { PHONE_DISPLAY, WHATSAPP_LINK } from '../constants/contact'

const Home = () => {
  return (
    <>
      <section className="section banner-home">
          <div className="hero-container">
              <div className="banner-home-content">
                  <div className="accent-line sub-heading-line sub-heading-w-50 animate-box animated animate__animated"
                    data-animate="animate__fadeInDown">
                    <h6 className="sub-heading-text accent-color">Style & Shine Lounge — By Samina Khan</h6>
                </div>
                <h1 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">A New Look. A New You.<br />
                    <span className="home-heading-wrapper">A New Experience.</span></h1>
                <p className="accent-color home-content-description animate-box animated animate__animated"
                    data-animate="animate__fadeInUp">Beauty. Fashion. Confidence. All in One Place. Whether it's a special occasion or your everyday glow-up, Style & Shine Lounge will be your first choice!</p>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gspace-3 animate-box animated animate__animated"
                    data-animate="animate__fadeInUp">
                    <Link to="/about" className="btn btn-primary">Discover More</Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-contact-container whatsapp-link"
                    >
                        <div>
                            <i className="fa-solid fa-phone-volume contact-home-icon"></i>
                        </div>
                        <div className="d-flex flex-column gspace-1">
                            <h6>Bookings & Enquiries</h6>
                            <p className="accent-color mb-0">{PHONE_DISPLAY}</p>
                        </div>
                    </a>
                </div>
              </div>
          </div>
      </section>
      
      
      <section className="section about-intro">
          <div className="hero-container">
              <div className="about-intro__main-content">
                  <div className="about-intro__content-container">
                      <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">Know More About Us</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInUp">You Look Amazing.<br />
                          Every Single Day.</h2>
                      <p className="about-intro__content-description animate-box animated animate__animated"
                          data-animate="animate__fadeInUp">At Style & Shine Lounge by Samina Khan, we believe every person deserves to feel confident and radiant. We bring together Beauty, Fashion, and Confidence — all under one roof.</p>
                      <div className="animate-box animated animate__animated" data-animate="animate__fadeInUp">
                          <Link to="/about" className="btn btn-primary">About Us</Link>
                      </div>
      
                      <div className="about-intro__content-spacer"></div>
      
                      <div className="image-container about-intro__highlight-image animate-box animated animate__animated"
                          data-animate="animate__fadeInUp">
                          <img src={imagePath("imageabout1.jpg")} alt="About Intro Highlight Image" />
                      </div>
                      <div className="card card-about-intro__highlight animate-box animated animate__animated"
                          data-animate="animate__fadeInLeft">
                          <h3>Where Beauty Meets Style</h3>
                          <p className="accent-color">From bridal makeovers to everyday glow-ups — professional makeup, hair styling, nail art, and skin care, all crafted with love by Samina Khan's expert team.</p>
                      </div>
                  </div>
      
                  <div className="about-intro__image-container animate-box animated animate__animated"
                      data-animate="animate__fadeInRight">
                      <div className="about-intro__image-decoration">
                          <div className="image-spacer"></div>
                      </div>
      
                      <div className="image-container about-intro__image">
                          <img src={imagePath("about123.jpg")} alt="About Image" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      
      <section className="section">
          <div className="d-flex flex-column text-center align-items-center gspace-2">
              <div className="sub-heading-double sub-heading-w-20 justify-content-center animate-box animated animate__animated"
                  data-animate="animate__fadeIn">
                  <h6 className="sub-heading-text">Our Premium Services</h6>
              </div>
              <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Our Premium Services</h2>
              <p className="animate-box animated animate__animated" data-animate="animate__fadeInDown">From bridal makeovers to everyday glow-ups — premium beauty services crafted to celebrate your unique confidence at every occasion.</p>
              <div className="service-content-container">
                  <div className="service-container service-container--cinematic-makeup animate-box animated-delay-fast animate__animated"
                      data-animate="animate__fadeInUp">
                      <div className="service-content-spacer"></div>
                      <a href="#" className="card service-description-card">
                          <h6 className="service-subtitle">Premium</h6>
                          <h3 className="service-title">Hair Styling & Hair Spa</h3>
                      </a>
                  </div>
                  <div className="service-container service-container--fashion-makeup animate-box animated animate__animated"
                      data-animate="animate__fadeInUp">
                      <div className="service-content-spacer"></div>
                      <a href="#" className="card service-description-card">
                          <h6 className="service-subtitle">Professional</h6>
                          <h3 className="service-title">Professional Makeup</h3>
                      </a>
                  </div>
                  <div className="service-container service-container--bridal-makeup animate-box animated-delay-slow animate__animated"
                      data-animate="animate__fadeInUp">
                      <div className="service-content-spacer"></div>
                      <a href="#" className="card service-description-card">
                          <h6 className="service-subtitle">Luxury</h6>
                          <h3 className="service-title">Bridal & Party Makeovers</h3>
                      </a>
                  </div>
                  <div className="service-container service-container--hair-style animate-box animated animate__animated"
                      data-animate="animate__fadeInUp">
                      <div className="service-content-spacer"></div>
                      <a href="#" className="card service-description-card">
                          <h6 className="service-subtitle">Expert</h6>
                          <h3 className="service-title">Nail Art & Nail Care</h3>
                      </a>
                  </div>
              </div>
              <div className="animate-box animated-delay-slow animate__animated" data-animate="animate__zoomIn">
                  <Link to="/services" className="btn btn-primary">View All Services</Link>
              </div>
          </div>
      </section>
      
      
      <div className="section whychooseus-banner">
          <div className="hero-container">
              <div className="whychooseus-content-container">
                  <div className="whychooseus-content">
                      <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                          <h6 className="sub-heading-text">Why Choose Style & Shine Lounge</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInLeft">Your Confidence<br />Shines Every Moment.</h2>
                      <p className="whychooseus-content-description animate-box animated animate__animated"
                          data-animate="animate__fadeInLeft">Where Beauty Meets Style — we combine skill, premium products, and genuine passion to deliver a beauty experience that exceeds your expectations every single visit.</p>
                      <div className="chooseus-container  animate-box animated-delay-fast animate__animated"
                          data-animate="animate__fadeInLeft">
                          <div className="chooseus-icon">
                              <i className="fa-solid fa-check"></i>
                          </div>
                          <div className="d-flex flex-column gspace-1">
                              <h3>Hygiene and Safety</h3>
                              <p>We use only sterilized tools and dermatologist-approved products to ensure your skin stays healthy and protected throughout every treatment.</p>
                          </div>
                      </div>
                      <div className="chooseus-container animate-box animated animate__animated"
                          data-animate="animate__fadeInLeft">
                          <div className="chooseus-icon">
                              <i className="fa-solid fa-check"></i>
                          </div>
                          <div className="d-flex flex-column gspace-1">
                              <h3>Expert Beauty Artists</h3>
                              <p>Our certified beauty professionals bring expertise to every appointment — delivering flawless results tailored to your style and occasion.</p>
                          </div>
                      </div>
                      <div className="chooseus-container animate-box animated-delay-slow animate__animated"
                          data-animate="animate__fadeInLeft">
                          <div className="chooseus-icon">
                              <i className="fa-solid fa-check"></i>
                          </div>
                          <div className="d-flex flex-column gspace-1">
                              <h3>Bridal & Party Makeovers</h3>
                              <p>Whether it's a special occasion or your everyday glow-up, Style & Shine Lounge will be your first choice for stunning transformations.</p>
                          </div>
                      </div>
                  </div>
                  <div className="whychooseus-image-container animate-box animated animate__animated"
                      data-animate="animate__fadeInRight">
                      <div className="whychooseus-decoration-border">
                          <div className="image-spacer"></div>
                      </div>
      
                      <div className="image-container chooseus-image">
                          <img src={imagePath("Dailymakeupimg.jpg")} alt="Chooseus Image" />
                      </div>
      
                      <div className="whychooseus-decoration-paint">
                          <div className="image-container chooseus-image-paint">
                              <img src={imagePath("gambar-pemanis-e17643142116311111.png")} alt="Choose Us Image" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      
      <section className="section testimonial-banner">
          <div className="hero-container">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 gspace-2">
                  <div className="testimonial-quote-icon animate-box animated animate__animated" data-animate="animate__zoomIn">
                      <i className="fa-solid fa-quote-right"></i>
                  </div>
      
                  <div className="testimonial-content-container animate-box animated animate__animated"
                      data-animate="animate__fadeInUp">
                      <div className="testimonial-btn-container">
                          <button className="testimonial-btn" id="prev" type="button">
                              <i className="fa-solid fa-arrow-left"></i>
                          </button>
                          <button className="testimonial-btn" id="next" type="button">
                              <i className="fa-solid fa-arrow-right"></i>
                          </button>
                      </div>
                      <div className="testimonial-slider">
                          <div className="testimonial-slider-wrapper" id="testimonial-slider">
                              <div className="testimonial-slide" data-index="0">
                                  <p className="testimonial-quote">
                                      I had my bridal makeup done here and I looked absolutely stunning on my big day.
                                      The team was so professional, patient, and truly understood my vision. I couldn't
                                      have asked for a better experience!
                                  </p>
      
                                  <div className="d-flex flex-column align-items-center">
                                      <h5 className="testimonial-name">Aisha Rahman</h5>
                                      <p className="testimonial-designation">Bride & Happy Client</p>
                                  </div>
                              </div>
      
                              <div className="testimonial-slide" data-index="1">
                                  <p className="testimonial-quote">
                                      The hair treatment I received was beyond amazing. My hair felt silky, healthy,
                                      and full of life. The staff is warm, skilled, and truly passionate about what
                                      they do. I keep coming back every month!
                                  </p>
      
                                  <div className="d-flex flex-column align-items-center">
                                      <h5 className="testimonial-name">Priya Sharma</h5>
                                      <p className="testimonial-designation">Regular Client</p>
                                  </div>
                              </div>
                              <div className="testimonial-slide" data-index="2">
                                  <p className="testimonial-quote">
                                      Style & Shine Lounge transformed my entire look for my graduation event. The
                                      makeup artist listened carefully and delivered exactly what I dreamed of. Highly
                                      recommend to everyone!
                                  </p>
      
                                  <div className="d-flex flex-column align-items-center">
                                      <h5 className="testimonial-name">Maya Chen</h5>
                                      <p className="testimonial-designation">Loyal Customer</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-nav-container">
                          <button className="testimonial-nav-btn active"></button>
                          <button className="testimonial-nav-btn"></button>
                          <button className="testimonial-nav-btn"></button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      
      <section className="section section-pb-large">
          <div className="hero-container">
              <div className="d-flex flex-column flex-lg-row gspace-5">
                  <div className="pricing-image-container">
                      <div className="pricing-image-decoration animate-box animated animate__animated"
                          data-animate="animate__fadeInUp">
                          <div className="image-spacer"></div>
                      </div>
      
                      <div className="image-container image-pricing animate-box animated animate__animated"
                          data-animate="animate__fadeInUp">
                          <img src={imagePath("pricetreatment123.jpg")} alt="Pricing" />
                      </div>
      
                      <div className="pricing-feature animate-box animated animate__animated" data-animate="animate__fadeInUp">
                          <div className="pricing-feature__value">
                              <span className="pricing-feature__number counter" data-target="12">00</span>
                              <span className="pricing-feature__symbol">+</span>
                          </div>
      
                          <div className="pricing-feature__text">
                              <h3 className="pricing-feature__title">Premium Services</h3>
                              <p className="pricing-feature__desc">
                                  Your go-to destination for beauty in Andheri West, Mumbai.
                              </p>
                          </div>
                      </div>
      
                  </div>
                  <div className="pricing-content">
                      <div className="sub-heading-line animate-box animated animate__animated" data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">Premium Beauty Treatments</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Because
                          being beautiful should never harm you</h2>
                      <div className="pricing-list-container">
                          <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                              <div className="pricing-list__heading-container">
                                  <h3>Hair Styling & Hair Spa</h3>
                                  <p className="pricing-sub-heading">Nourishing care for silky, healthy hair</p>
                              </div>
                              <div className="pricing-list__price">
                                  <div className="pricing-list__line"></div>
                                  <h3>Enquire</h3>
                              </div>
                          </div>
                          <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                              <div className="pricing-list__heading-container">
                                  <h3>Professional Makeup</h3>
                                  <p className="pricing-sub-heading">Expert makeup for every occasion</p>
                              </div>
                              <div className="pricing-list__price">
                                  <div className="pricing-list__line"></div>
                                  <h3>Enquire</h3>
                              </div>
                          </div>
                          <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                              <div className="pricing-list__heading-container">
                                  <h3>Nail Art & Nail Care</h3>
                                  <p className="pricing-sub-heading">Complete nail care & creative nail art</p>
                              </div>
                              <div className="pricing-list__price">
                                  <div className="pricing-list__line"></div>
                                  <h3>Enquire</h3>
                              </div>
                          </div>
                          <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                              <div className="pricing-list__heading-container">
                                  <h3>Skin Care & Facial Treatments</h3>
                                  <p className="pricing-sub-heading">Deep cleansing & skin rejuvenation</p>
                              </div>
                              <div className="pricing-list__price">
                                  <div className="pricing-list__line"></div>
                                  <h3>Enquire</h3>
                              </div>
                          </div>
                          <div className="pricing-list animate-box animated animate__animated" data-animate="animate__fadeInUp">
                              <div className="pricing-list__heading-container">
                                  <h3>Bridal & Party Makeovers</h3>
                                  <p className="pricing-sub-heading">Glamorous looks for your most special moments</p>
                              </div>
                              <div className="pricing-list__price">
                                  <div className="pricing-list__line"></div>
                                  <h3>Enquire</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      
      <section className="section banner-appointment-cta">
          <div className="hero-container">
              <div className="appointment-cta-content">
                  <div className="request-loader-container animate-box animated animate__animated" data-animate="animate__zoomIn">
                      <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                          <i className="fa-solid fa-play"></i>
                      </button>
                  </div>
      
                  <div className="appointment-cta-heading animate-box animated animate__animated"
                      data-animate="animate__fadeInRight">
                          <div className="accent-line sub-heading-line sub-heading-w-50">
                              <h6 className="sub-heading-text accent-color">Andheri West, Mumbai</h6>
                          </div>
                          <h2 className="accent-color">Where Beauty Meets Style...
                              <br />
                              Book Your Appointment!
                          </h2>
                  </div>
              </div>
          </div>
      </section>
      
      
      <div className="section p-0">
          <div id="modal-overlay" className="modal-overlay">
              <span className="modal-close"><i className="fa-solid fa-xmark"></i></span>
              <div className="video-modal">
                  <iframe id="modal-video-frame" allowFullScreen title="Video"></iframe>
              </div>
          </div>
      </div>
      
      
      <section className="section p-0">
          <div className="appointment-header-container">
              <div className="hero-container">
                  <div className="appointment-header-wrapper animate-box animated animate__animated"
                      data-animate="animate__fadeInDown">
                      <div className="sub-heading-line sub-heading-w-50">
                          <h6 className="sub-heading-text">Bookings & Enquiries:</h6>
                      </div>
                      <h2>Style & Shine Lounge</h2>
                  </div>
              </div>
          </div>
          <div className="appointment-content-container">
              <div className="appointment-content-image animate-box animated animate__animated"
                  data-animate="animate__fadeInLeft">
                  <div className="image-spacer"></div>
              </div>
              <div className="appointment-content-form animate-box animated animate__animated"
                  data-animate="animate__fadeInRight">
                  <h3>Book Your Appointment at<br />
                      Style & Shine Lounge
                  </h3>
                  <p className="appointment-content-description">Fill in your details and our team will get in touch to confirm your appointment. Call us at{' '}
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      <strong>{PHONE_DISPLAY}</strong>
                    </a>{' '}
                    for bookings & enquiries.</p>
                  <div className="alert form-message success hidden">
                      <span className="check-icon"><i className="fa-solid fa-2xl fa-check"></i></span>
                      <p>Thank you! Form submitted successfully.</p>
                  </div>
      
                  <div className="alert form-message error hidden">
                      <span className="cross-icon"><i className="fa-solid fa-2xl fa-xmark"></i></span>
                      <p>Oops! Form submission failed. Please try again.</p>
                  </div>
                  <form id="appointment-form" className="form">
                      <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                          <div className="col">
                              <div className="d-flex flex-column gspace-0">
                                  <label htmlFor="first-name">First Name <span className="important-marker">*</span> </label>
                                  <input type="text" name="first-name" id="first-name" placeholder="First Name" />
                              </div>
                          </div>
                          <div className="col">
                              <div className="d-flex flex-column gspace-0">
                                  <label htmlFor="last-name">Last Name <span className="important-marker">*</span> </label>
                                  <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                      </div>
                      <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                          <div className="col">
                              <div className="d-flex flex-column gspace-0">
                                  <label htmlFor="telephone">Telephone <span className="important-marker">*</span> </label>
                                  <input type="tel" name="telephone" id="telephone" placeholder="Telephone" />
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                          <div className="col">
                              <div className="d-flex flex-column gspace-0">
                                  <label htmlFor="treatment-display">
                                      Treatment <span className="important-marker">*</span>
                                  </label>
      
                                  <div className="dropdown-container dd-multi">
                                      <input type="text" id="treatment-display" className="dd-multi__input" readOnly
                                          role="combobox" aria-haspopup="listbox" aria-expanded="false"
                                          aria-controls="treatment-list" />
      
                                      <div className="dropdown-select dd-multi__select">
                                          <div className="dd-multi__chips"></div>
                                          <i className="fa-solid fa-caret-down"></i>
                                      </div>
      
                                      <div className="dropdown-list dd-multi__list" role="listbox" id="treatment-list">
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="hair-styling-spa">Hair Styling & Hair Spa</div>
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="professional-makeup">Professional Makeup</div>
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="nail-art-care">Nail Art & Nail Care</div>
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="skin-care-facial">Skin Care & Facial Treatments</div>
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="bridal-party-makeover">Bridal & Party Makeovers</div>
                                          <div className="dropdown-option dd-multi__option" role="option"
                                              data-value="premium-beauty">Premium Beauty Treatments</div>
                                      </div>
      
                                      
                                      <input type="hidden" className="dd-multi__value" id="treatment" name="treatment" />
                                  </div>
                                  <p className="error-text hidden">This field is required</p>
                              </div>
                          </div>
                      </div>
                      <div className="d-flex flex-column gspace-0">
                          <label htmlFor="message">Message</label>
                          <textarea name="message" id="message" rows="4" placeholder="Note"></textarea>
                      </div>
      
                      <button type="submit" className="btn btn-primary btn-nohover">Book Appointment</button>
                  </form>
              </div>
          </div>
      </section>
      
      
      <section className="section-py-medium">
          <div className="hero-container">
              <div className="d-flex flex-column gspace-5">
                  <div className="d-flex flex-column gspace-2 justify-content-center align-items-center text-center">
                      <div className="sub-heading-double sub-heading-w-30 justify-content-center animate-box animated animate__animated"
                          data-animate="animate__fadeInDown">
                          <h6 className="sub-heading-text">FAQ</h6>
                      </div>
                      <h2 className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Frequently Asked
                          Questions</h2>
                  </div>

                  <div className="row">

                      <div className="col-md-12">
                          <div className="accordion" id="faqAccordion1">
                              <div className="accordion-item">
                                  <h2 className="accordion-header">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                          How do I book an appointment?
                                      </button>
                                  </h2>
                                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                                      <div className="accordion-body">
                                          <span>
                                              You can book an appointment directly through our website by filling out
                                              the booking form on this page. Simply select your preferred treatment,
                                              provide your contact details, and our team will confirm your slot as
                                              soon as possible.
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                          What types of makeup services do you offer?
                                      </button>
                                  </h2>
                                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                                      <div className="accordion-body">
                                          <span>
                                              We offer a wide range of makeup services including Cinematic Makeup,
                                              Bridal Makeup, Fashion Makeup, and Daily Makeup. Each service is tailored
                                              to your event, skin tone, and personal style by our certified makeup
                                              artists.
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                          Are the products you use safe for sensitive skin?
                                      </button>
                                  </h2>
                                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                                      <div className="accordion-body">
                                          <span>
                                              Absolutely! We use only dermatologist-tested, skin-safe products that are
                                              suitable for all skin types including sensitive skin. If you have specific
                                              allergies or skin conditions, please let us know when booking so we can
                                              prepare accordingly.
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                          How long does a makeup session typically take?
                                      </button>
                                  </h2>
                                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                                      <div className="accordion-body">
                                          <span>
                                              Session duration depends on the service. A daily makeup look typically
                                              takes 45–60 minutes, while bridal or cinematic makeup can take 90–120
                                              minutes. We recommend arriving a few minutes early to allow time for
                                              consultation and skin prep.
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                                          Do you offer home or on-location services?
                                      </button>
                                  </h2>
                                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                                      <div className="accordion-body">
                                          <span>
                                              Yes! We offer on-location services for special events such as weddings,
                                              photoshoots, and corporate events. Please contact us in advance to check
                                              availability and discuss travel arrangements for your specific location.
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <div className="section-py-medium">
          <div className="hero-container">
              <div className="blog-section-container">
                  <div className="blog-content-title animate-box animated animate__animated" data-animate="animate__fadeInDown">
                      <div className="sub-heading-line sub-heading-w-50">
                          <h6 className="sub-heading-text">Beauty Tips & Inspiration</h6>
                      </div>
                      <h2>Latest from Style & Shine</h2>
                      <p className="blog-section-description">Stay updated with the latest beauty trends, expert tips, and styling inspiration from the Style & Shine Lounge team.</p>
                      <div>
                          <Link to="/blogs" className="btn btn-primary">More Article</Link>
                      </div>
                  </div>
                  <div className="blog-content-container animate-box animated animate__animated"
                      data-animate="animate__fadeInRight">
                      <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                          <div className="col">
                              <Link to="/blogs" className="card card-blog">
                                  <div className="image-container">
                                      <img src={imagePath("servicesdailymakeup.jpg")} alt="Blog Image" />
                                  </div>
      
                                  <h4 className="blog-title">Chic & Glam: Your Daily Dose of Beauty Inspiration</h4>
                              </Link>
                          </div>
                          <div className="col">
                              <Link to="/blogs" className="card card-blog">
                                  <div className="image-container">
                                      <img src={imagePath("Event-amkeupimg1223.jpg")} alt="Blog Image" />
                                  </div>
      
                                  <h4 className="blog-title">Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
                                  </h4>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
