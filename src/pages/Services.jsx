import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <section className="section banner-inner">
                <div className="hero-container">
                    <div className="banner-inner-container">
                        <h1 className="banner-inner-title">Our Premium Services</h1>
                        <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
                            Discover our full range of premium beauty services at Style & Shine Lounge by Samina Khan — crafted to bring out your confidence and leave you looking absolutely radiant.</p>
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
                    <p className="animate-box animated animate__animated" data-animate="animate__fadeInDown">Whether it's a special occasion or your everyday glow-up, Style & Shine Lounge will be your first choice — Beauty. Fashion. Confidence. All in One Place.</p>
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
                    <div className="service-content-container">
                        <div className="service-container service-container--cinematic-makeup animate-box animated-delay-fast animate__animated"
                            data-animate="animate__fadeInUp">
                            <div className="service-content-spacer"></div>
                            <a href="#" className="card service-description-card">
                                <h6 className="service-subtitle">Advanced</h6>
                                <h3 className="service-title">Skin Care & Facial Treatments</h3>
                            </a>
                        </div>
                        <div className="service-container service-container--fashion-makeup animate-box animated animate__animated"
                            data-animate="animate__fadeInUp">
                            <div className="service-content-spacer"></div>
                            <a href="#" className="card service-description-card">
                                <h6 className="service-subtitle">Exclusive</h6>
                                <h3 className="service-title">Premium Beauty Treatments</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
