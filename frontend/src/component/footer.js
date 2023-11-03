import "../App.css";

import { useState } from "react";

function Footer() {
  const PostData = async (e) => {
    e.preventDefault();
    let data = document.getElementById("email").value;

    const res = await fetch(
      "https://watch-2f7d5-default-rtdb.asia-southeast1.firebasedatabase.app/subscriber.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      }
    );
    document.getElementById("email").value = "Thanks for subscribe us ";
    document.getElementById("email").disabled = "true";
    document.getElementById("submit").disabled = "true";
  };

  return (
    <>
      <div class="footer">
        <div>
          <div class="left">
            <p>subscribe to get latest updates</p>
            <form action="" onSubmit={PostData}>
              <input
                type="email"
                required
                name=""
                placeholder="Email address"
                id="email"
              />
              <span>
                <input type="submit" value="subscribe" id="submit" />
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
              <p
                onClick={() => {
                  window.location.href = "p2";
                }}
              >
                Breting Choroliner
              </p>
              <p
                onClick={() => {
                  window.location.href = "p3";
                }}
              >
                Speaktrum
              </p>
              <p
                onClick={() => {
                  window.location.href = "p5";
                }}
              >
                Turbine Gmt De
              </p>
              <p>Jobs</p>
              <p
                onClick={() => {
                  window.location.href = "#product";
                }}
              >
                products
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
