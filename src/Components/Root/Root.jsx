import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Dash from "../Dashboard/Dash";
import { Settings } from "react-feather";
import "./Root.scss";

function Root() {
  return (
    <main class="d-flex dark-theme">
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

      <i-feather class="setting">
        hello
      </i-feather>
    </main>
  );
}

export default Root;
