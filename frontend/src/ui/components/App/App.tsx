import React from 'react';
import './App.scss';
import CladeDetailsPage from "../Pages/CladeDetailsPage";
import DummyCladeProvider from "../../../io/DummyCladeProvider";



function App() {
  const cladeProvider = new DummyCladeProvider();

  switch (window.location.pathname.toLowerCase()) {
    case  "/":
    case "/pages/clade-details":
      return <CladeDetailsPage cladeProvider={cladeProvider} />;
    default:
      return <div><h1>Page not found: "{window.location.pathname}"</h1></div>
  }
}

export default App;
