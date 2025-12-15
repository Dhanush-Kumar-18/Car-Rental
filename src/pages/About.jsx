export default function About() {
  return (
    <div className="about-page">

      {/* Banner */}
      <div className="about-banner">
        <h1>ABOUT US</h1>
      </div>

      {/* Content */}
      <div className="about-content">
        <p>
          We are a trusted self-drive car rental service offering reliable and
          affordable vehicles for every journey. From compact city cars to
          premium SUVs, we provide options that suit all travel needs.
        </p>

        <p>
          Our booking process is designed to be simple and flexible. Customers
          can choose their preferred car, book online, and enjoy a smooth driving
          experience without hidden charges or complicated paperwork.
        </p>

        <p>
          Whether it’s a short city ride, a weekend getaway, or a long road trip,
          we ensure our cars are well-maintained, sanitized, and ready to go.
        </p>

        <p className="about-highlight">
          Customer satisfaction is our priority, and we aim to make every
          journey comfortable, safe, and stress-free.
        </p>
      </div>

      {/* Features */}
      <div className="about-features">
        <div className="feature-box">
          <h3>Multiple Types of Cars</h3>
        </div>

        <div className="feature-box">
          <h3>Simple Booking Process</h3>
        </div>

        <div className="feature-box">
          <h3>Multiple Pickup Locations</h3>
        </div>
      </div>

    </div>
  );
}
