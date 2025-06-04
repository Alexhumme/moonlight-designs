import React from "react";

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p> My Website</p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}