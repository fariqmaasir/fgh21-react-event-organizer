import react from "react";
import Logo from "./Logo";
import {
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="flex justify-around pt-20">
        <div className="flex flex-col gap-20">
          <div>
            <Logo />
            <div>
              Find events you love with our
              <div className="flex gap-3 text-gray-400">
                <FaSquareFacebook />
                <FaSquareWhatsapp />
                <FaSquareInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className>© 2020 Wetick All Rights Reserved</div>
        </div>
        <div>
          <div className="font-semibold">Wetick</div>
          <div className="text-gray-400">
            <div>About us</div>
            <div>Features</div>
            <div>Blog</div>
            <div>Payments</div>
            <div>Mobile App</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">Features</div>
          <div className="text-gray-400">
            <div>Booking</div>
            <div>Create Event</div>
            <div>Discover</div>
            <div>Register</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <div className="text-gray-400">
            <div>Partnership</div>
            <div>Help</div>
            <div>Terms Of Service</div>
            <div>Privacy Policy</div>
            <div>Sitemap</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;