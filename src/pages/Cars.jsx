import { useNavigate } from "react-router-dom";

export default function Cars() {
  const navigate = useNavigate();

  const cars = [
    {
      name: "Audi A4",
      type: "Sedan · 5 seats",
      price: "₹6,000 / day",
      img: "https://tse2.mm.bing.net/th/id/OIP.PRiClcPdofY41a75tPwf1QHaEo?pid=Api&P=0&h=180"
    },
    {
      name: "BMW X5",
      type: "SUV · 5 seats",
      price: "₹9,000 / day",
      img: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/01/BMW-X5-xDrive30d_HERO-3x2-1.jpg"
    },
    {
      name: "Mercedes C-Class",
      type: "Sedan · 5 seats",
      price: "₹7,500 / day",
      img: "https://www.autotrader.com/wp-content/uploads/2023/10/2024-mercedes-c-class-left-3qtr.jpg"
    },
    {
      name: "Range Rover Sport",
      type: "SUV · 5 seats",
      price: "₹12,000 / day",
      img: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/uljxcg4253zyzgjwqtys"
    },
    {
      name: "Hyundai Creta",
      type: "SUV · 5 seats",
      price: "₹4,000 / day",
      img: "https://c.ndtvimg.com/hyundai-creta-facelift-review_625x300_1527234234351.jpg"
    },
    {
      name: "Kia Seltos",
      type: "SUV · 5 seats",
      price: "₹4,500 / day",
      img: "https://tse3.mm.bing.net/th/id/OIP.yIc-aR8JJuAfIqYjHzC0SAHaEK?pid=Api&P=0&h=180"
    },
    {
      name: "Toyota Innova",
      type: "MPV · 7 seats",
      price: "₹5,500 / day",
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2f%2fcdni.autocarindia.com%2fExtraImages%2f20200807023221_Innova-Crysta-main.jpg&h=795&w=1200&c=1"
    },
    {
      name: "Maruti Swift",
      type: "Hatchback · 5 seats",
      price: "₹2,500 / day",
      img: "https://wallpaperaccess.com/full/1681093.jpg"
    },
    {
      name: "Honda City",
      type: "Sedan · 5 seats",
      price: "₹3,500 / day",
      img: "https://wallpaperaccess.com/full/840749.jpg"
    },
    {
      name: "Mahindra Thar",
      type: "SUV · 4 seats",
      price: "₹6,500 / day",
      img: "https://img.indianautosblog.com/2018/07/Modified-Mahindra-Thar-by-Reddy-customs-front.jpg"
    }
  ];

  return (
    <div className="cars-page">

      <div className="cars-hero">
        <h1>Simple Car Rental</h1>
        <p>Choose from a curated fleet for your next trip.</p>
      </div>

      <div className="cars-section">
        <h2>Available cars</h2>

        <div className="cars-grid">
          {cars.map((car, index) => (
            <div className="car-card" key={index}>
              <img src={car.img} alt={car.name} />

              <div className="car-info">
                <h3>{car.name}</h3>
                <p>{car.type}</p>

                <div className="car-bottom">
                  <span>{car.price}</span>
                  <button onClick={() => navigate("/booking")}>
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
