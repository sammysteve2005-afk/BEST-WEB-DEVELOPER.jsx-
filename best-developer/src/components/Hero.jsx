import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Welcome To Best Web Developer</h1>
      <p style={styles.subtitle}>
        I build high-performance, visually stunning, and user-friendly websites.
      </p>
    </section>
  );
};

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // ✅ Background image added
    backgroundImage:
      "url('https://graphicgoogle.com/wp-content/uploads/2023/12/Free-Premium-Brand-3D-Device-Website-Mockup.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    color: "#fff",
    textAlign: "center",
    padding: "20px",

    // Optional: dark overlay for readability
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginBottom: "20px",
  },
};

export default Hero;
