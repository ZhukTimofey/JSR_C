import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import  HomePageContainer from './pages/HomePage/containers/HomePageContainer'
import Routes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


