'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonSplash = require("./App.bs.js");

((require("./styles/tailwind.css")));

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonSplash.make, { }), "root");

/*  Not a pure module */
