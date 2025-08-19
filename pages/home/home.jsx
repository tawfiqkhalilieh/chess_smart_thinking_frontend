import TimelineDemo from "../../components/TimeLineDemo";
import NavbarComponent from "@/components/NavBar";
import ThreeDCardDemo from "@/components/ThreeDCard";
import React from "react";

const card = (title, info, image) => (
  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center justify-items-center items-start px-6">
    {[1, 2, 3].map((e, i) => (
      <ThreeDCardDemo key={i} title={title} info={info} image={image} />
    ))}
  </div>
);

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <TimelineDemo />

      {card(
        "Make things float in air",
        "Hover over this card to unleash the power of CSS perspective",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      )}

      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
