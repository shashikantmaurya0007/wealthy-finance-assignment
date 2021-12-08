import React from "react";
import Left from "../Component/Left";
import Right from "../Component/Right";
import "../Styling/home.css";
function Home() {
  return (
    <main className="main-style">
      <section className="left">
        <Left />
      </section>
      <section className="right">
        <Right />
      </section>
    </main>
  );
}

export default Home;
