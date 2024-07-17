import react from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Event from "./pages/Event";
import Booking from "./pages/Booking";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreateEvent from "./components/CreateEvent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-wishlist",
    element: <MyWishlist />,
  },
  {
    path: "/my-booking",
    element: <MyBooking />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
