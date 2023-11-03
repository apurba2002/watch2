import { Link } from "react-router-dom";
import "../App.css";
function Nav(props) {
  const show = () => {
    document.getElementById("hide").classList.toggle("nav-down");
  };
  return (
    <>
      <div className="nav-wap" style={{ backgroundColor: props.color }}>
        <div className="nav">
          <p>watch</p>
          <div>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <a href="#product">Products</a>
            </p>
            <p>
              <a href="#detail">about</a>
            </p>
            <p>
              <a href="#right-img">review</a>
            </p>
          </div>
          <img
            src="asset/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.avif"
            alt=""
          />
        </div>
        <div class="nav-res">
          <div class="nav-show">
            <p>watch</p>
            <img src="icons8-menu.svg" alt="" onClick={show} />
          </div>
          <div class="nav-hide" onClick={show} id="hide">
            <p>home</p>
            <p>products</p>
            <p>about</p>
            <p>review</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
