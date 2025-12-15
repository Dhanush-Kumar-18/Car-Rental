import { useState, useEffect } from "react";

export default function Reviews() {
  const initialReviews = [
    {
      name: "Rahul Kumar",
      text: "The cars were clean and well maintained.",
      time: "2 days ago"
    },
    {
      name: "Priya Sharma",
      text: "Smooth booking experience and good support.",
      time: "3 days ago"
    }
  ];

  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Load reviews from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews"));
    if (saved && saved.length > 0) {
      setReviews(saved);
    } else {
      setReviews(initialReviews);
    }
  }, []);

  // Save reviews to localStorage
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = () => {
    if (!name || !text) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      name,
      text,
      time: "Just now"
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setText("");
    setShowForm(false);
  };

  return (
    <div className="reviews-page">

      {/* HEADER */}
      <div className="reviews-header">
        <div>
          <h2>Overall Rating</h2>
          <div className="rating">
            <span className="rating-score">4.8</span>
            <span className="rating-stars">★★★★★</span>
            <span className="rating-count">(12,430)</span>
          </div>
        </div>

        <button
          className="review-btn"
          onClick={() => setShowForm(!showForm)}
        >
          Write a review
        </button>
      </div>

      {/* WRITE REVIEW FORM */}
      {showForm && (
        <div className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Your Review"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={handleSubmit}>Submit Review</button>
        </div>
      )}

      {/* REVIEWS GRID */}
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{review.text}</p>

            <div className="review-user">
              <strong>{review.name}</strong>
              <span>{review.time}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
