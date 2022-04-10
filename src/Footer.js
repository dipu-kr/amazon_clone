import React from "react";
import "./css/footer.css";

function Footer() {
  const scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="top-footer">
        <p onClick={scrolltotop}>Back to top</p>
      </div>
      <div className="footer">
        <div className="w-full grid grid-cols-1 ml-0 texy-xs px-2 font-thin md:grid-cols-4 footer-content">
          <div className="col-span-1 sm:col-span-2">
            <h4>Get to Know Us</h4>
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">blog</a>
            </p>
            <p>
              <a href="#">About Amazon</a>
            </p>
            <p>
              <a href="#">Investor Relations</a>
            </p>
            <p>
              <a href="#">Amazon Devices</a>
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4>Make Money with Us</h4>
            <p>
              <a href="#">Sell products on Amazon</a>
            </p>
            <p>
              <a href="#">Sell on Amazon Business</a>
            </p>
            <p>
              <a href="#">Sell apps on Amazon</a>
            </p>
            <p>
              <a href="#">Become an Affiliate</a>
            </p>
            <p>
              <a href="#">Advertise Your Products</a>
            </p>
            <p>
              <a href="#">Self-Publish with Us</a>
            </p>
            <p>
              <a href="#">Host an Amazon Hub</a>
            </p>
            <p>
              <a href="#">
                ›See More Make Money <br />
                with Us
              </a>
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4>Amazon Payment Products</h4>
            <p>
              <a href="#">Amazon Business Card</a>
            </p>
            <p>
              <a href="#">Shop with Points</a>
            </p>
            <p>
              <a href="#">Reload Your Balance</a>
            </p>
            <p>
              <a href="#">Amazon Currency Converter</a>
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4>Let Us Help You</h4>
            <p>
              <a href="#">
                Amazon and COVID-
                <br />
                19
              </a>
            </p>
            <p>
              <a href="#">Your Account</a>
            </p>
            <p>
              <a href="#">Your Orders</a>
            </p>
            <p>
              <a href="#">
                Shipping Rates & <br />
                Policies
              </a>
            </p>
            <p>
              <a href="#">
                Returns & <br />
                Replacements
              </a>
            </p>
            <p>
              <a href="#">
                Manage Your <br />
                Content and Devices
              </a>
            </p>
            <p>
              <a href="#">Amazon Assistant</a>
            </p>
            <p>
              <a href="#">
                Help
                <br />
                with Us
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="middle-footer ml-0">
          <div className="footer-btn-1">
            <button>english</button>
          </div>
          <div className="footer-btn-2">
            <button> $ USD - U.S. Dollar</button>
          </div>
          <div className="footer-btn-3">
            <button>united states</button>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-6 text-center last-footer text-xs sm:text-sm md:text-lg">
        <p>
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
          <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
