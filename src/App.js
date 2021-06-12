import logo from './assets/logocolor.png'
import logo2 from './assets/logo2.png'
import hero from './assets/hero.png'
import g114 from './assets/g114.png'
import lightc from './assets/whitec.png'
import darkc from './assets/darkc.png'
import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'
import g86 from './assets/g86.png'
import logow from './assets/logo.png'
import fb from './assets/g99.png'
import li from './assets/g100.png'
import ig from './assets/g105.png'
import star from './assets/star.png'
function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar">
            <div className="navbar-logo">
              <div className="navbar-logo-image">
              <img src={logo} alt="" srcset="" />
                
              </div>
              <div className="navbar-logo-text">
                  Organic
                </div>
            </div>
            <div className="navbar-links">
              <div className="navbar-links-link Text-Style-2">Home</div>
              <div className="navbar-links-link">Product</div>
              <div className="navbar-links-link">Blog</div>
              <div className="navbar-links-link">About Us</div>
              <div className=" rounded-btn light">Contact</div>
            </div>
        </div>
        <div className="main">
          <div className="main-left">
            <h2 className="head-sub">Healthy life with</h2>
            <h1 className="head">Nature Organic</h1>
            <p className="mt-2">Vegetables are the eible <br></br>parts of a plant that is used in cooking or can be eaten now</p>
            <div className="rounded-btn-dark">Explore Now</div>
            </div>
          <div className="main-right">
            <div className="main-right-design">
            <div className="main-right-design-back">
              <div className="main-right-design-box">
                <img src={logo2} alt="" srcset="" className="main-right-design-box-logo" />
                <img src={hero} alt="" srcset="" className="main-right-design-box-hero" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="description">
        <div className="description-header">
            <img src={g114} alt="" srcset="" />
            <h2>Welcome to Nature</h2>
            <p className="mt-3">Lorem ipsuamus laboriosam ducimus quos ab iosam ducimus quos ab  iosam ducimus quos ab quo, <br></br> saepe cupiditate blanditiis, illum enim.</p>
        </div>
        <div className="description-content">
          <div className="description-content-card">
            <img src={lightc} alt="" srcset="" />
          </div>
        <div className="description-content-card"><img src={darkc} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={lightc} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={lightc} alt="" srcset="" /></div>
        </div>
      </section>
      <section className="description bg-lit">
        <div className="description-header">
           
            <h2>Proudly presented by</h2>
            <p className="mt-3">Lorem ipsuamus laboriosam ducimus quos ab iosam ducimus quos ab  iosam ducimus quos ab quo, <br></br> saepe cupiditate blanditiis, illum enim.</p>
        </div>
        <div className="description-content">
          
        <div className="description-content-card"><img src={a1} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={a2} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={a3} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={a2} alt="" srcset="" /></div>
        <div className="description-content-card"><img src={a1} alt="" srcset="" /></div>
        
        </div>
        <div className="markers mt-4">
          <div className="markers-point  bg-dark"></div>
          <div className="markers-point bg-aqua"></div>
          <div className="markers-point bg-dark"></div>
          <div className="markers-point bg-dark"></div>
        </div>
      </section>
      <section className="testim mt-4">
          <img src={g86} alt="" srcset="" className="icon1"/>
          <div className="testim-usr-image mt-2">
          
          </div>
          <h4 className="mt-2">Jane Doe</h4>
          <div className="testim-stars mt-2"></div>
          <p className="mt-2 line-height1">Thank you for all the amazing produce and products you deliver each week… <br />
          you make my life so easy an bring goodness into our family eating. <br />
          I’ve been roasting a lot of brussel sprouts and</p>
          <div className="markers ">
          <img src={star} alt="" srcset="" />
          <img src={star} alt="" srcset="" />
          <img src={star} alt="" srcset="" />
          <img src={star} alt="" srcset="" />
          </div>
          <div className="testim-subs mt-8">
          <h2>Subscribe to our Newsletter</h2>
          <p className="mt-3">Lorem ipsuamus laboriosam ducimus quos ab iosam ducimus quos ab  iosam ducimus quos ab quo, <br></br> saepe cupiditate blanditiis, illum enim.</p>
          <form action="">
            <input type="text" className="ip3" placeholder="Enter your email address"/>
            <button>Subscribe</button>
          </form>
          </div>
      </section>
      <section className="description">
        <div className="description-header">
            <img src={g114} alt="" srcset="" />
            <h2>Read Our Blog</h2>
            <p className="mt-3">Lorem ipsuamus laboriosam ducimus quos ab iosam ducimus quos ab  iosam ducimus quos ab quo, <br></br> saepe cupiditate blanditiis, illum enim.</p>
        </div>
        <div className="description-content">
          
          <div className="description-content-card">
          <div className="description-content-card-blog">
            <div className="description-content-card-blog-image image3">

            </div>
            <div className="description-content-card-blog-text">
            <div className="description-content-card-blog-text-head">
                Blog Post One
            </div>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed
             do eiusmod.
             
            </p>
            <div className="description-content-card-blog-text-head-readm">Read more</div>
            <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="description-content-card">
          <div className="description-content-card-blog">
            <div className="description-content-card-blog-image image2">

            </div>
            <div className="description-content-card-blog-text">
            <div className="description-content-card-blog-text-head">
                Blog Post One
            </div>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed
             do eiusmod.
             
            </p>
            <div className="description-content-card-blog-text-head-readm">Read more</div>
            <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="description-content-card">
          <div className="description-content-card-blog">
            <div className="description-content-card-blog-image image1">

            </div>
            <div className="description-content-card-blog-text">
            <div className="description-content-card-blog-text-head">
                Blog Post One
            </div>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed
             do eiusmod.
             
            </p>
            <div className="description-content-card-blog-text-head-readm">Read more
            <div className="bar"></div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <footer className="mt-2">
        <div className="footer-set">
            <img src={logow} alt="" srcset="" />
            <p className="mt-2">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing 
            elit, sed do eiusmod tempor </p>
            <div className="bar-vert"></div>
            &#169; Copyright 2020 Nature
        </div>
        <div className="footer-set"><div className="footer-set-head">
        Information
        <div className="bar-vert"></div>
        </div>
          <div className="footer-set-content">
            <div className="footer-set-content-links">
              <div className="footer-set-content-links-link">
              About us
              </div>
              <div className="footer-set-content-links-link">
              Products
              </div>
              <div className="footer-set-content-links-link">
              Contact Us
              </div>
              <div className="footer-set-content-links-link">
              Terms of Service
              </div>
            </div>
            <div className="footer-set-content-links">
            <div className="footer-set-content-links-link">
              About us
              </div>
              <div className="footer-set-content-links-link">
              Products
              </div>
            </div>
          </div>
        
        </div>
        <div className="footer-set">
        <div className="footer-set-head">
        Follow us
        <div className="bar-vert"></div>
        </div>
        <div className="footer-set-social">
          <div className="footer-set-social-icon"><img src={fb} alt="" srcset="" /></div>
          <div className="footer-set-social-icon"><img src={ig} alt="" srcset="" /></div>
          <div className="footer-set-social-icon"><img src={li} alt="" srcset="" /></div>
          <div className="footer-set-social-icon"><img src={fb} alt="" srcset="" /></div>
        </div>
        
        </div>
      </footer>
    </div>
  );
}

export default App;
