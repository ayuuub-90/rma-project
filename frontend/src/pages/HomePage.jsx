import Hero from "../components/Hero";
import HeroVideo from "../components/HeroVideo";
import Partners from "../components/Partners";
import Formations from "../components/Formations";
import EventComing from "../pages/events/EventComing";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] ">
        <Loading />
      </div>
    );
  }

  return (
    <div id="container">
      <Hero />
      <Formations />
      <HeroVideo />
      <EventComing />
      <Partners />
    </div>
  );
};

export default HomePage;
