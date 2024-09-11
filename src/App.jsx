import react from "react";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Event from "./pages/Event";
import Create from "./pages/Create";
import Booking from "./pages/Booking";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/SignUp";
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
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/event/:id",
    element: <Event />,
  },
  {
    path: "/booking/:id",
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
    path: "/create",
    element: <CreateEvent />,
  },
  {
    path: "/create-event",
    element: <Create />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />;
      </PersistGate>
    </Provider>
  );
}

export default App;
