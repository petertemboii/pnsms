import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Peter" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Manage your plants efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
