import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>MediCare is your trusted online medical consultation platform.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/symptoms">Symptom Checker</a>
            </li>
            <li>
              <a href="/articles">Articles</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@medicare.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 MediCare. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

