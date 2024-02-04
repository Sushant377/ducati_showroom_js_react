import Content from "./content/Content";
import Layout from "./layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function App() {
  const [state, setState] = useState("Home");

  const title = "welcome to Ducati showroom";

  const nav = {
    home: "Home",
    contact: "Contact",
    about: "About",
    testride: "Test Ride",
  };

  return (
    <div>
      <Layout nav={nav} title={title} setState={setState}>
        <Content state={state} />
      </Layout>
    </div>
  );
}

export default App;
