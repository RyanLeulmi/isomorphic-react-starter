import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./routes/home";
import Inventory from "./routes/inventory";

let ClientRouter = (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/inventory" component={Inventory} />
    </BrowserRouter>
)

export default ClientRouter;