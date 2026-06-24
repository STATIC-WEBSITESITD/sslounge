import { Link } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'

const SinglePost = () => {
  return (
    <>
      <section className="sectio banner-inner">
        <div className="hero-container">
          <div className="banner-inner-container">
            <h1 className="banner-inner-title">Single Post</h1>
            <p
              className="banner-inner-excerpt animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
            >
              Expert beauty tips, styling guides, and insider secrets to help you look and feel
              your most radiant self — every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py-medium">
        <div className="hero-container">
          <div className="blog-post-content-container">
            <div className="blog-post-content-wraper">
              <div className="image-container blog-post-image">
                <img src={imagePath('hero-images245.jpg')} alt="Blog Post Image" />
              </div>
              <h2>Chic & Glam: Your Daily Dose of Beauty Inspiration</h2>
              <p>
                Looking beautiful every day doesn't have to be complicated. With the right products,
                techniques, and a little self-care, you can elevate your everyday look from simple
                to stunning. Whether you're heading to the office or stepping out for a special event,
                these expert tips from our team will help you put your best face forward.
              </p>
              <p>
                Start with a clean, moisturized base — hydration is the foundation of any great
                makeup look. A lightweight primer smooths pores and helps your makeup last all day.
                Choose a foundation that matches your undertone perfectly, then build coverage only
                where you need it. A little concealer under the eyes and around the nose goes a long
                way. Set everything with a translucent powder to lock in that fresh, flawless finish
                and keep shine at bay throughout the day.
              </p>
              <h3>The Secret to Long-Lasting Makeup</h3>
              <p>
                The key to makeup that lasts from morning to night is layering your products
                correctly. Always apply setting spray after completing your look — it acts like a
                seal, keeping every layer in place. For lips, line slightly outside your natural
                lip line for extra definition, then fill in with lip liner before applying your
                lipstick or gloss. This prevents feathering and adds hours of wear time. Don't
                forget to blot between layers for a photo-ready finish that never looks cakey.
              </p>
              <h3>Skincare Is the Ultimate Beauty Hack</h3>
              <p>
                The best makeup starts with great skin. Incorporate a consistent skincare routine
                with cleansing, toning, and moisturizing twice daily. Use SPF every morning — it
                protects against sun damage, premature aging, and uneven tone. Exfoliate 2–3 times
                a week to remove dead skin cells and reveal a brighter, smoother complexion. When
                your skin is healthy and glowing, you'll need less makeup — and the makeup you do
                wear will look even more stunning. Visit our lounge for a professional facial
                treatment to give your skin the expert care it deserves.
              </p>
            </div>
            <div className="blog-post-content-sidebar">
              <div className="card card-blog-recent">
                <h3>Recent Post</h3>
                <Link to="/blogs/post">
                  <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                    <div className="col">
                      <div className="image-container recent-post-img">
                        <img src={imagePath('servicesdailymakeup.jpg')} alt="Single Post" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column gspace-1">
                        <h4 className="blog-title recent-post">
                          Chic & Glam: Your Daily Dose of Beauty Inspiration
                        </h4>
                        <p className="blog-title-excerpt recent-post">
                          Elevate your everyday makeup routine with expert tips from our beauty artists…
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/blogs/post">
                  <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                    <div className="col">
                      <div className="image-container recent-post-img">
                        <img src={imagePath('Event-amkeupimg1223.jpg')} alt="Single Post" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column gspace-1">
                        <h4 className="blog-title recent-post">
                          Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style
                        </h4>
                        <p className="blog-title-excerpt recent-post">
                          Discover the secrets to healthy, radiant hair and a glowing complexion all year…
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/blogs/post">
                  <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 align-items-center">
                    <div className="col">
                      <div className="image-container recent-post-img">
                        <img src={imagePath('about123.jpg')} alt="Single Post" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column gspace-1">
                        <h4 className="blog-title recent-post">
                          Bridal Beauty Guide: Looking Perfect on Your Big Day
                        </h4>
                        <p className="blog-title-excerpt recent-post">
                          Everything a bride needs to know to look and feel absolutely stunning…
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
