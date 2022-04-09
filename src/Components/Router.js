import React from "react";
import { BrowserRouter,  Routes} from "react-router-dom";
import { Route } from 'react-router';
import App from "../App";
import AppB from "./AppB";
import NotFound from "./NotFound";




const Suka = (props) => {
    return (
        <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<App  boba={props.boba} history={props.history} />} />
        <Route path="/shop/:shopId" element={<AppB />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Suka;