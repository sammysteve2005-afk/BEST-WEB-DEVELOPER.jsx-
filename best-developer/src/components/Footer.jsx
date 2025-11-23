import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>weCan</div>

        {/* Footer Links */}
        <div style={styles.linksGrid}>
          <div style={styles.column}>
            <h4>Our Products</h4>
            <ul>
              <li><a href="#" style={styles.columnLink}>The Support Suite</a></li>
              <li><a href="#" style={styles.columnLink}>The Sales Suite</a></li>
              <li><a href="#" style={styles.columnLink}>Support</a></li>
              <li><a href="#" style={styles.columnLink}>Guide</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Top Features</h4>
            <ul>
              <li><a href="#" style={styles.columnLink}>Ticketing System</a></li>
              <li><a href="#" style={styles.columnLink}>Knowledge Base</a></li>
              <li><a href="#" style={styles.columnLink}>Community Forums</a></li>
              <li><a href="#" style={styles.columnLink}>Help Desk Software</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#" style={styles.columnLink}>Product Support</a></li>
              <li><a href="#" style={styles.columnLink}>Request Demo</a></li>
              <li><a href="#" style={styles.columnLink}>Library</a></li>
              <li><a href="#" style={styles.columnLink}>Peoplepower Blog</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="#" style={styles.columnLink}>About Us</a></li>
              <li><a href="#" style={styles.columnLink}>Press</a></li>
              <li><a href="#" style={styles.columnLink}>Investors</a></li>
              <li><a href="#" style={styles.columnLink}>Events</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Favourite Things</h4>
            <ul>
              <li><a href="#" style={styles.columnLink}>For Enterprise</a></li>
              <li><a href="#" style={styles.columnLink}>For Startups</a></li>
              <li><a href="#" style={styles.columnLink}>For Benchmark</a></li>
              <li><a href="#" style={styles.columnLink}>For Small Business</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.copy}>
          © {new Date().getFullYear()} Best Web Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#040273", // Changed background color
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "25px",
  },
  column: {
    textAlign: "left",
  },
  columnLink: {
    color: "#fff",
    textDecoration: "none",
  },
  copy: {
    textAlign: "center",
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;
