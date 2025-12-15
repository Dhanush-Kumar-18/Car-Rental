export default function Booking() {

  const handleBooking = () => {
    alert("Booking Confirmed!");
  };

  return (
    <div className="booking-page">

      <div className="booking-overlay">

        <h1 className="booking-title">BOOK A CAR</h1>

        <div className="booking-box">

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter your mobile number" />
          </div>

          <div className="form-group">
            <label>From Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>To Date</label>
            <input type="date" />
          </div>

          <button className="booking-btn" onClick={handleBooking}>
            CONFIRM BOOKING
          </button>

        </div>
      </div>
    </div>
  );
}
