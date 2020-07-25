import React from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import TestimonialsContainer from './components/TestimonialsContainer'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



const App = () => {
  return (
    <Main>
      <Router />
      <TestimonialsContainer />
    </Main>
  );


};

export default App;
