import "../App.css";
function Footer() {
  return (
    <>
      <div class="footer">
        <div>
          <div class="left">
            <p>subscribe to get latest updates</p>
            <form action="">
              <input
                type="email"
                required
                name=""
                placeholder="Email address"
                id=""
              />
              <span>
                <input type="submit" value="subscribe" />
              </span>
            </form>
          </div>
          <div class="right">
            <div class="contact-info">
              <p>contact</p>
              <p>www.watch.com</p>
              <p>Delhi,20</p>
              <p>infowatch@gmail.com</p>
              <p>01234567890</p>
              <p>www.watch.com</p>
            </div>
            <div class="about-us">
              <p>About us</p>
              <p>Breting Choroliner</p>
              <p>Speaktrum</p>
              <p>Turbine Gmt De</p>
              <p>Jobs</p>
              <p>products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
