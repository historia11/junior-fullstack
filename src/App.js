import React from "react";
import Comments from "./componenst/Comments.jsx";
import FruitsList from "./componenst/FruitsList.jsx";
import Umkm from "./componenst/Umkm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componenst/Layout.jsx";

function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Umkm />} />
          <Route path="FruitsList.jsx" element={<FruitsList />} />
          <Route path="Comments.jsx" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
