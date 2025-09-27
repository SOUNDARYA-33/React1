import React from "react";
import "../component/css/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <p>© {new Date().getFullYear()} My Languages. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
