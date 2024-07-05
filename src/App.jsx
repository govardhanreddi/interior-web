import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const whatsAppredirect = ()=>{
    const phoneNumber = '9951385067';
    const message = 'Hello, I want to chat with you!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  }
  return (
  <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">AARA</a>
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
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true" href="#">
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  </div>
    </div>
  <div className="banner-image">
    <div>
    <h1 className="banner-heading">Bring home beautiful interiors <span className='span-element'>that fit your budget</span></h1>
    <p className="banner-caption">Experience unmatched quality & timely delivery with Livspace</p>
    <button onClick={whatsAppredirect} className='info2-button'>VISIT US</button>
    </div>
  </div>
  <div className='info-div'>
    <h1 className='info-heading'>The home design you crave</h1>
    <p className='info-description'>When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that lasts a very long time.</p>
    <button className='info-button' onClick={whatsAppredirect}>BOOK FREE CONSULTATION</button>
  </div>
  <div className='info2-div'>
  <div className="info2-hp">
  <h1 className='info2-heading'>Homes for every style</h1>
  <p className='info2-description'>Superior finishes, trendy designs and quality modules at affordable prices.</p>
  </div>
  <div className="">
    <button onClick={whatsAppredirect} className='info2-button'>GET FREE QUOTE</button>
  </div>
</div>
<div className='photos-div'>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="menu-item-card shadow p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg"
                className="menu-item-image w-100"
              />
              <h1 className="menu-card-title">Full Home Interiors</h1>
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="menu-item-card shadow p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/vinviago-desk-1692618545-ToZjR.jpg"
                className="menu-item-image w-100"
              />
              <h1 className="menu-card-title">Luxary Interiors</h1>
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="menu-item-card shadow p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg"
                className="menu-item-image w-100"
              />
              <h1 className="menu-card-title">Modular Interiors</h1>
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="menu-item-card shadow p-3 mb-3">
              <img
                src="https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/reno-1682066988-lqJkS.jpg"
                className="menu-item-image w-100"
              />
              <h1 className="menu-card-title">Renovations</h1>
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
  );
}
export default App;
