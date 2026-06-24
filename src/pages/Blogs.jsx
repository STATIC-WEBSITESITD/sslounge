import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'

const Blogs = () => {
  return (
    <>
      <section className="sectio banner-inner">
          <div className="hero-container">
              <div className="banner-inner-container">
                  <h1 className="banner-inner-title">Archive</h1>
                  <p className="banner-inner-excerpt animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      Explore our latest beauty tips, styling guides, and expert insights to help you
                      look and feel your most confident self every day.</p>
              </div>
          </div>
      </section>
      
      
      <section className="section">
          <div className="hero-container">
              <div className="row row-cols-lg-3 row-cols-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("servicesdailymakeup.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Chic & Glam: Your Daily Dose of Beauty Inspiration</h4>
                      </Link>
                  </div>
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("Event-amkeupimg1223.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style</h4>
                      </Link>
                  </div>
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("about123.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style</h4>
                      </Link>
                  </div>
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("servicesdailymakeup.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Chic & Glam: Your Daily Dose of Beauty Inspiration</h4>
                      </Link>
                  </div>
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("Event-amkeupimg1223.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style</h4>
                      </Link>
                  </div>
                  <div className="col">
                      <Link to="/blogs/post" className="card card-blog">
                          <div className="image-container">
                              <img src={imagePath("about123.jpg")} alt="Blog Image" />
                          </div>
      
                          <h4 className="blog-title">Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style</h4>
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Blogs
