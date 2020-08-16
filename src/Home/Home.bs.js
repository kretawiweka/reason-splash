'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var PromiseMonad = require("bs-promise-monad/src/PromiseMonad.bs.js");
var FetchData$ReasonSplash = require("../utils/FetchData.bs.js");

function Home(Props) {
  var match = React.useState((function () {
          return null;
        }));
  var setData = match[1];
  var data = match[0];
  React.useEffect((function () {
          PromiseMonad.$great$great$eq(FetchData$ReasonSplash.fetchData(undefined, undefined, "/photos?page=1"), (function (value) {
                  Curry._1(setData, (function (param) {
                          return value;
                        }));
                  return PromiseMonad.$$return(undefined);
                }));
          
        }), ([]));
  React.useEffect((function () {
          console.log(data);
          
        }), [data]);
  return React.createElement("div", {
              className: "h-screen flex justify-center items-center"
            }, React.createElement("div", {
                  className: "max-w-sm rounded overflow-hidden shadow-lg p-4"
                }, React.createElement("div", {
                      className: "px-6 py-4"
                    }, data !== null ? $$Array.map((function (tag) {
                              return React.createElement("p", {
                                          key: tag,
                                          className: "text-gray-700 text-base"
                                        }, "A reason react starter with tailwind");
                            }), [
                            "Reason",
                            "Tailwind"
                          ]) : null), React.createElement("div", {
                      className: "px-6 py-4"
                    }, $$Array.map((function (tag) {
                            return React.createElement("span", {
                                        key: tag,
                                        className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                                      }, "#" + tag);
                          }), [
                          "Reason",
                          "Tailwind"
                        ]))));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
