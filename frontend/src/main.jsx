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
import Error404 from "./pages/Error404.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/agenda" element={<EventComingPage />} />
      <Route path="/replays" element={<EventReplays />} />
      <Route path="/complete-registration/:token" element={<Authenticate />} />
      
      {/* <Route path="/complete-registration/:token" element={<Authenticate />} /> */}

      <Route path="/test" element={<Test />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/replay" element={<Event />} />
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
