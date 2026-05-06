import "./Partner.css";

const testimonials = [
  {
    name: "Dr. Luqman Khan",
    rating: 4,
    text: "I am the partner of the Medrix Records Management Services LLP and working with Ujjwal. Our experience is very good and would like to continue in future.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ajayraj Infratech Pvt. Ltd.",
    rating: 4,
    text: "All team members are very helpful and experienced. Filing GST & other compliances was smooth and well managed.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Seshasayana Reddy",
    rating: 5,
    text: "They provide seamless service and support. GST filings and compliance were handled with least follow-ups.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Partner = () => {
  return (
    <section className="partner-section">
      <h1>Testimonials That Speak for <span style={{ color: "#f5c542" }} > Us</span></h1>

      <div className="partner-container">
        {testimonials.map((item, index) => (
          <div className="partner-card" key={index}>
            <div className="partner-user">
              <img src={item.img} alt="user" />
              <div>
                <h3>{item.name}</h3>
                <p className="partner-rating">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)} {item.rating}/5
                </p>
              </div>
            </div>

            <p className="partner-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;