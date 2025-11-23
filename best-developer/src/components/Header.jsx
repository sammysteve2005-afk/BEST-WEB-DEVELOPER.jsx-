import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Best Web Developer</h1>
      <nav>
        <ul style={styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
 
const styles = {
  header: {
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0f0f0f",
    color: "#fff",
    position: "sticky",
    top: 0,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: 0,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
};

export default Header;
