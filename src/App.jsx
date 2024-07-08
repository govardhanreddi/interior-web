import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const whatsAppredirect = () => {
    const phoneNumber = '9951385067';
    const message = 'Hello, I want to chat with you!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images/logo.jpg" alt="Logo" className="nav-image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-elements">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#wcuSection">
                Why Choose us?
              </a>
              <a className="nav-link" href="#followUsSection">
                Follow Us
              </a>
              <a className="nav-link" href="#info-div">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {/* Add carousel items here */}
        </div>
      </div>
      <div className="banner-image">
        <div>
          <h1 className="banner-heading">Bring home beautiful interiors <span className='span-element'>that fit your budget</span></h1>
          <p className="banner-caption">Experience unmatched quality & timely delivery with Livspace</p>
          <button onClick={whatsAppredirect} className='info2-button'>VISIT US</button>
        </div>
      </div>
      <div className='info-div' id="wcuSection">
        <h1 className='info-heading'>The home design you crave</h1>
        <p className='info-description'>When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that lasts a very long time.</p>
        <button className='info-button' onClick={whatsAppredirect}>BOOK FREE CONSULTATION</button>
      </div>
      <div class="wcu-section pt-5 pb-5" >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="wcu-section-heading">Why Choose Us?</h1>
            <p class="wcu-section-description">
              We use both original recipes and classic versions of famous food
              items.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/usp-icons-1657525878-VEDjj/personalised-design-60x60-1657526074-fzE3H.png"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Personalised designs</h1>
              <p class="wcu-card-description">
              Transform your vision into reality with our custom design solutions. Our team collaborates with you to create unique and tailored designs that perfectly reflect your style and needs. Whether you're looking for something classic or contemporary, our personalized approach ensures that every detail aligns with your preferences and requirements.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/10-year-warranty-desktop-1646210954-fh1K8.png"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Flat 10-year warranty¹</h1>
              <p class="wcu-card-description">
              Experience peace of mind with our comprehensive 10-year warranty¹. We stand behind the quality and durability of our products, providing long-term protection and support. Our warranty covers all major defects and issues, ensuring that you can enjoy our products with confidence for a decade.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:60/h:60/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/transparent-pricing-desktop-1646210957-nGL2T.png"
                class="wcu-card-image"
              />
              <h1 class="wcu-card-title mt-3">Transparent pricing</h1>
              <p class="wcu-card-description">
              Say goodbye to hidden costs and unexpected charges. 
              Our transparent pricing model ensures that you know exactly 
              what you’re paying for. We provide clear and detailed cost
               breakdowns so you can make informed decisions without any surprises. 
               With us, what you see is what you get—honest and straightforward 
               pricing every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
      <div className='info2-div'>
        <div className="info2-hp">
          <h1 className='info2-heading'>Homes for every style</h1>
          <p className='info2-description'>Superior finishes, trendy designs and 
            quality modules at affordable prices.</p>
        </div>
        <div className="">
          <button onClick={whatsAppredirect} className='info2-button'>GET FREE QUOTE</button>
        </div>
      </div>
      <div className='photos-div'>
        <div className='container'>
          <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
          <div className="menu-item-card shadow p-3 mb-3">
            <img
              src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg"
              className="menu-item-image w-100"
              alt="Full Home Interiors"
            />
            <h1 className="menu-card-title">Full Home Interiors</h1>
            <a href="#" className="menu-item-link">
              View All
              <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="menu-item-card shadow p-3 mb-3">
            <img
              src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg"
              className="menu-item-image w-100"
              alt="Modular Interiors"
            />
            <h1 className="menu-card-title" >Modular Interiors</h1>
            <a href="#" className="menu-item-link">
              View All
              <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="menu-item-card shadow p-3 mb-3">
            <img
              src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/reno-1682066988-lqJkS.jpg"
              className="menu-item-image w-100"
              alt="Renovations"
            />
            <h1 className="menu-card-title" id="followUsSection" >Renovations</h1>
              <a href="" className="menu-item-link">
                View All
                <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      
</div>
<div className="follow-us-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="follow-us-section-heading">Follow Us</h1>
          </div>
          <div className="col-12">
            <div className="d-flex flex-row justify-content-center">
            <div className="follow-us-icon-container">
              <a href="https://www.instagram.com/aarainteriorsdesigner/" target="_blank">
                  <i className="fab fa-twitter icon"></i>
              </a>
              </div>
              <div className="follow-us-icon-container">
              <a href="https://www.instagram.com/aarainteriorsdesigner/" target="_blank">
                  <i className="fab fa-instagram icon"></i>
              </a>
              </div>
              <div className="follow-us-icon-container">
              <a href="https://www.instagram.com/aarainteriorsdesigner/" target="_blank">
                  <i className="fab fa-facebook icon"></i>
              </a>
              </div>
              <div onClick={whatsAppredirect} className="follow-us-icon-container">
                <i className="fab fa-whatsapp icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="follow-us-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
          <h1 className='follow-us-section-heading'>Download home interior guide</h1>
            <p className=''>Don't forget to consider these fundamental design guidelines to know before you start interior designing!</p>
            <a href="public/images/AARA Brouchre.pdf" download="AARA Brouchre.pdf"><button className=''>Download Now</button></a>
          </div>
          </div>
          </div>
          </div>
    <div className="footer-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="footer-section-mail-id">webpagename.com</h1>
            <p className="footer-section-address">
            © 2024 Aarainteriors.com All Rights Reserved
            </p>
          </div>
          <div> <div class="phone-container">
        <a href="tel:+919951385067" className="info-button1">Call Us Now</a>
    </div>
    <p className="footer-section-address">¹For full scope, please visit, www.aarainterior.com/in/service | ²For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or Rs.25000, whichever is higher interior designers in Pune interior designer near me best interior designers in Pune interior designers in bangalore interior design bangalore interior designer near me best interior designers in mumbai interior designer near me interior designer mumbai interior design mumbai interior designers in hyderabad best interior designers in Hyderabad interior designer near me interior designer Hyderabad interior designers in chennai interiors in chennai interior decorators in chennai best interior designers in chennai interior designers in noida interior designer near me interior decorator near me best interior designers in noida best interior designers in kolkata interior company in Kolkata home interiors Kolkata best interior designers in Kolkata interior designers in gurgaon interior designer near me home interior design interior design near me</p>
    </div>
        </div>
      </div>
    </div>

</div>
  );
}
export default App;
