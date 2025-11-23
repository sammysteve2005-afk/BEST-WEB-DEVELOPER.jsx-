import React, { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>WebDev<span style={styles.dot}>.</span></div>

      {/* Desktop Nav Links */}
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.linkBtn}>Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div style={styles.menuButton} onClick={toggleMenu} data-menu-button>
        ☰
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul style={styles.mobileMenu}>
          <li><a href="#home" style={styles.mobileLink}>Home</a></li>
          <li><a href="#services" style={styles.mobileLink}>Services</a></li>
          <li><a href="#projects" style={styles.mobileLink}>Projects</a></li>
          <li><a href="#about" style={styles.mobileLink}>About</a></li>
          <li><a href="#contact" style={styles.mobileButton}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    width: "100%",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    fontFamily: "Arial, sans-serif"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  dot: {
    color: "#007bff"
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px"
  },
  linkBtn: {
    textDecoration: "none",
    background: "#007bff",
    padding: "8px 15px",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px"
  },
  menuButton: {
    display: "none",
    fontSize: "28px",
    cursor: "pointer"
  },

  // Mobile Menu
  mobileMenu: {
    position: "absolute",
    top: "60px",
    right: "20px",
    background: "#fff",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    listStyle: "none",
    padding: "15px"
  },
  mobileLink: {
    display: "block",
    padding: "10px 0",
    textDecoration: "none",
    color: "#333",
    borderBottom: "1px solid #eee"
  },
  mobileButton: {
    display: "block",
    padding: "10px 0",
    background: "#007bff",
    textDecoration: "none",
    color: "#fff",
    textAlign: "center",
    borderRadius: "6px",
    marginTop: "10px"
  }
};

// Responsive behavior using inline styles (JS-based)
if (typeof window !== "undefined") {
  const resizeHandler = () => {
    const navLinks = document.querySelector("nav ul");
    const menuButton = document.querySelector("[data-menu-button]");

    // ensure elements exist before touching styles
    if (!navLinks || !menuButton) return;

    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
      menuButton.style.display = "block";
    } else {
      navLinks.style.display = "flex";
      menuButton.style.display = "none";
    }
  };

  window.addEventListener("resize", resizeHandler);
  // set initial state
  resizeHandler();
}

export default Navigation;
