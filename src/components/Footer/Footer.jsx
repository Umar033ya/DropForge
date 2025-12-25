import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Drop<span>Forge</span></h2>
          <p>Fast • Secure • Reliable</p>
        </div>

        <div className="footer-links">
          <h4>Menu</h4>
          <a href="/">Home</a>
          <a href="/cases">Cases</a>
          <a href="/support">Support</a>
        </div>

        <div className="footer-social">
          <h4>Follow</h4>
          <a href="#">Telegram</a>
          <a href="#">Discord</a>
          <a href="#">Instagram</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 DropForge. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
