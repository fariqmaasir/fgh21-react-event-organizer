import react from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Layout(props) {
    const navigate = useNavigate()
    const token = useSelector((state) => state.auth.token);
    if (token === null) {
      navigate("/login");
    }
    return(
    <>
        <Navbar/>
            {props.children}
        <Footer/>
    </>
    )
}
export default Layout