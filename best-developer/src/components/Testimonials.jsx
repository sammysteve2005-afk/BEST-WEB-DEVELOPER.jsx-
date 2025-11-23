import React from "react";

const Testimonial = () => {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>What Clients Say</h2>

      <div style={styles.card}>
        <div style={styles.profileSection}>
          <img
            src="https://via.placeholder.com/80"
            alt="Client"
            style={styles.avatar}
          />
          <div>
            <h3 style={styles.clientName}>Sarah Thompson</h3>
            <p style={styles.clientRole}>Founder, Digital Bloom Agency</p>
          </div>
        </div>

        <p style={styles.testimonialText}>
          “Working with this web developer was an amazing experience. The final 
          website was fast, modern, fully responsive, and exceeded our 
          expectations. Communication was smooth and the attention to detail 
          was outstanding!”
        </p>

        <p style={styles.rating}>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#040273",
    color: "#fff",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  card: {
    maxWidth: "600px",
    margin: "auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#1a1a7a", // slightly lighter blue for contrast
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    textAlign: "left",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    marginRight: "15px",
    border: "2px solid #fff",
  },
  clientName: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
  },
  clientRole: {
    margin: 0,
    color: "#ccc",
  },
  testimonialText: {
    marginTop: "15px",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#e0e0ff",
  },
  rating: {
    marginTop: "20px",
    fontSize: "22px",
    color: "#ffbf00",
  },
};

export default Testimonial;
