'use strict';

var React = require("react");
var Home$ReasonSplash = require("../Home/Home.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var NotFound$ReasonSplash = require("../NotFound/NotFound.bs.js");

function Routes(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    return React.createElement(NotFound$ReasonSplash.make, { });
  } else {
    return React.createElement(Home$ReasonSplash.make, { });
  }
}

var make = Routes;

exports.make = make;
/* react Not a pure module */
