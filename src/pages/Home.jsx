import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <div className="home-hero">
        <div className="hero-content">
          <h1>Self Drive Car Rentals</h1>
          <p>
            Rent premium and budget-friendly cars with flexible plans.
            Simple booking, transparent pricing, and reliable service.
          </p>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car"
        />
      </div>

      {/* INFO SECTION */}
      <div className="home-info">
        <h2>Why Choose Us?</h2>
        <p>
          We offer a wide range of self-drive cars for city rides, family trips,
          business travel, and long journeys. Our vehicles are well-maintained,
          affordable, and easy to book.
        </p>
      </div>

      {/* CAR PREVIEW SECTION */}
      <div className="home-cars">
        <div className="home-card">
          <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/10/2024-audi-rs7-sportback2.jpg" />
          <h3>Sedan Cars</h3>
          <p>Comfortable & fuel efficient</p>
        </div>

        <div className="home-card">
          <img src="http://st.automobilemag.com/uploads/sites/11/2019/04/Large-36133-2020Venue_SOCIAL.jpg" />
          <h3>SUV Cars</h3>
          <p>Perfect for family trips</p>
        </div>

        <div className="home-card">
          <img src="http://www.stugon.com/wp-content/uploads/2013/12/Exotic-Car-Wallpapers-HD-Edition-stugon.com-11.jpg" />
          <h3>Luxury Cars</h3>
          <p>Premium comfort & style</p>
        </div>
      </div>

      {/* LOGIN / SIGNUP SECTION */}
      <div className="home-auth">
        <h2>Get Started</h2>
        <p>Login or create an account to book your ride</p>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>

    </div>
  );
}