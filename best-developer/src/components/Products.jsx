import React from "react";

const products = [
  {
    title: "Business Website",
    description: "A clean, modern website for companies and brands.",
    price: "KSh 20,000",
    image:
      "https://img.freepik.com/free-photo/website-design-desktop-computer_23-2149433762.jpg"
  },
  {
    title: "Portfolio Website",
    description: "Perfect for developers, designers, photographers & creators.",
    price: "KSh 25,000",
    image:
      "https://img.freepik.com/premium-photo/portfolio-website-concept-laptop-screen-desk_1194795-2115.jpg"
  },
  {
    title: "E-Commerce Website",
    description: "Online store with cart, checkout, payments & product pages.",
    price: "KSh 45,000",
    image:
      "https://img.freepik.com/free-photo/ecommerce-online-shopping-website-mobile-phone_53876-96809.jpg"
  },
  {
    title: "Real Estate Website",
    description: "Property listing website with search, filters & galleries.",
    price: "KSh 55,000",
    image:
      "https://img.freepik.com/premium-photo/real-estate-website-with-modern-house-background_674881-1740.jpg"
  },
  {
    title: "Restaurant Website",
    description: "Menu pages, online booking, delivery integration & gallery.",
    price: "KSh 30,000",
    image:
      "https://img.freepik.com/free-photo/restaurant-website-laptop-screen_23-2148737793.jpg"
  },
  {
    title: "School / Learning Website",
    description: "Educational website with courses, info pages & forms.",
    price: "KSh 60,000",
    image:
      "https://img.freepik.com/premium-photo/online-learning-website-laptop-screen_1194795-3000.jpg"
  }
];

const Products = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>🔥 My Professional Website Packages</h2>

      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />

            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>{product.price}</p>

            <button style={styles.button}>Get This Website</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// STYLES
const styles = {
  wrapper: {
    padding: "40px 20px",
    textAlign: "center",
    background: "#D4A656",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "left",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "18px",
    margin: "0 0 8px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    margin: "0 0 12px 0",
  },
  price: {
    fontWeight: "bold",
    marginBottom: "12px",
  },
  button: {
    background: "#D4A656",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Products;
