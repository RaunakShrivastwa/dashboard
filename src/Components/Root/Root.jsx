import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Dash from "../Dashboard/Dash";
import { Settings } from "react-feather";
import "./Root.scss";

function Root() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => setToggle(!toggle);

  
  return (
    <main class={`d-flex ${toggle ? "light-theme" : "dark-theme"}`}>
      <aside class="">
        <Sidebar />
      </aside>
      <section>
        <div class="wrapper container-lg">
          <header class="sticky-top custome_radius box_shadow">
            <div class="w-100">
              <Header />
            </div>
          </header>

          <Dash />
        </div>
      </section>

      <i-feather onClick={Toggle} class="setting">
        <Settings />
      </i-feather>
    </main>
  );
}

export default Root;
