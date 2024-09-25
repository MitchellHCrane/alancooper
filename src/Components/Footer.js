import "../css/footer.css";
import "../css/App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:254-733-3008">(254)-733-3008</a>
          </p>
          <p className="footerP">Fax: (254)-613-6326</p>
          <p className="footerP">
            Email:{" "}
            <a href="mailto:alan@firstclasshomemortgage.com">
              alan@firstclasshomemortgage.com
            </a>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">Alan Cooper (NMLS #1912420)</p>
          {/* <p className="footerP">
            Regulated by State of Utah Division of Real Estate NMLS #1843
          </p> */}
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              PO BOX 1091, Hewitt, Texas, 76643
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
