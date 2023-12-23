import React from 'react';
import NavBar from './NavBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaneBookingForm from './PlaneBookingForm';
import Footer from './Footer';

// Import your images
import image1 from '../assets/11.jpg';
import image2 from '../assets/22.jpg';
import image3 from '../assets/33.jpg';

function Home() {
  return (
    <>
      <div className="mb-5">
        <NavBar />
      </div>
      <div className='mb-5'>
      <div className="container" style={{ position: 'relative' }}>
        <div id="imageSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100 img-fluid" // Added img-fluid for responsiveness
                alt="Feel The Dream:)"
              />
              <div className="carousel-caption">
                <h5>Feel The Dream:)</h5>
                <p>
                  <div className="fs-3 mb-4">
                    The world is a beautiful place, and flying shows us that beauty from a different angle.
                  </div>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100 img-fluid" // Added img-fluid for responsiveness
                alt="Enjoy the Nervous"
              />
              <div className="carousel-caption">
                <h5>Enjoy the Nervous</h5>
                <p>
                  <div className="fs-3 mb-4">
                    The world is a beautiful place, and flying shows us that beauty from a different angle.
                  </div>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100 img-fluid" // Added img-fluid for responsiveness
                alt="Be Emotional"
              />
              <div className="carousel-caption">
                <h5>Be Emotional</h5>
                <p>
                  <div className="fs-3 mb-4">
                    The world is a beautiful place, and flying shows us that beauty from a different angle.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
          <PlaneBookingForm />
        </div>
      
      </div>
      </div>

      <div  >
          <Footer />
        </div>
    </>
  );
}

export default Home;
