import React from "react";

const About = () => {
  return (
    <section style={styles.about}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I am a passionate web developer specializing in creating dynamic,
        responsive, and user-centric websites. With expertise in modern
        technologies like React, Node.js, and Tailwind CSS, I turn ideas
        into fully functional digital experiences.
      </p>
    </section>
  );
};

const styles = {
  about: {
    padding: "80px 20px",
    background: "#040273", // ✅ Updated background color
    textAlign: "center",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "20px",
    color: "#fff", // better contrast
  },
  text: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#e6e6e6", // light text for readability
  }
};

export default About;
