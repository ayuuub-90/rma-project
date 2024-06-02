import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";

import Connexion from "./pages/auth/Connexion.jsx";
import store from "./redux/store.js";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";
import EventComingPage from "./pages/EventComingPage.jsx";
import EventReplays from "./pages/events/EventReplays.jsx";
import Authenticate from "./pages/auth/Authenticate.jsx";
import Profile from "./pages/auth/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import EventDetails from "./pages/events/EventDetails.jsx";
import Event from "./pages/events/Event.jsx";
import MyEventsRoute from "./pages/events/user_events/MyEventsRoute.jsx";
import Error404 from "./pages/Error404.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ChangePassword from "./pages/auth/ChangePassword.jsx";
import Integrate from "./pages/auth/Integrate.jsx";
import AdminRoute from "./pages/admin/AdminRoute.jsx";
import AdminMenu from "./pages/admin/AdminMenu.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/agenda" element={<EventComingPage />} />
      <Route path="/replays" element={<EventReplays />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password/:token" element={<ChangePassword />} />

      <Route path="/complete-registration/:token" element={<Authenticate />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/integrate" element={<Integrate />} />
        <Route path="/mon-events" element={<MyEventsRoute />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/replay" element={<Event />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="" element={<AdminMenu />} />
      </Route>

      {/* default path */}
      <Route path="" index={true} element={<HomePage />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
