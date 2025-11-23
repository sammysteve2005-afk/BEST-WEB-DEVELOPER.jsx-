import React from "react";

const Newsletter = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📬 Submit Your Web Project</h2>
      <p style={styles.text}>
        Share your project details with me! Enter your email, select the type of website you want, and submit your web project. I’ll get back to you with a custom solution.
      </p>

      <form style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
        />
        <select style={styles.select}>
          <option value="">Select website type</option>
          <option value="business">Business Website</option>
          <option value="portfolio">Portfolio Website</option>
          <option value="ecommerce">E-Commerce Website</option>
          <option value="realestate">Real Estate Website</option>
          <option value="restaurant">Restaurant Website</option>
          <option value="education">School / Learning Website</option>
        </select>
        <button type="submit" style={styles.button}>
          Submit Your Web
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "30px",
    textAlign: "center",
    background: "#D4A656",
    borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
      }
    };
    
    export default Newsletter;
