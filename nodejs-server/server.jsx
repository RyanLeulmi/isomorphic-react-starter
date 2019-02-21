import express from 'express';
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Route } from "react-router-dom";
import React,{ Fragment } from "react";
import Home from "../react-client/routes/home";
import Inventory from "../react-client/routes/inventory";


const port = 3000
const app = express()
app.use(express.static("build/"))

let ServerRouter = (url) => (
    <StaticRouter location={url}>
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/inventory" component={Inventory} />
        </Fragment>

    </StaticRouter>
)

let renderPage = (html) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React-SSR</title>
    </head>
    <body id="app">
        ${html}
    </body>
    <script defer src="clientBundle.js"></script>
    </html>
`;


app.get('*', (req, res) => {
    let stringified = renderToString(ServerRouter(req.url));
    let page = renderPage(stringified);
    res.send(page);
})

app.listen(port, () => console.log(`express server listening on port ${port}!`))