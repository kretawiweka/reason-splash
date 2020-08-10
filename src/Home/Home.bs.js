'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

require("./style.scss");

function str(prim) {
  return prim;
}

function Home(Props) {
  return React.createElement("div", {
              className: "h-screen flex justify-center items-center"
            }, React.createElement("div", {
                  className: "max-w-sm rounded overflow-hidden shadow-lg p-4"
                }, React.createElement("div", {
                      className: "px-6 py-4"
                    }, React.createElement("p", {
                          className: "text-gray-700 text-base"
                        }, "A reason react starter with tailwind")), React.createElement("div", {
                      className: "px-6 py-4"
                    }, $$Array.map((function (tag) {
                            return React.createElement("span", {
                                        key: tag,
                                        className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                                      }, "#" + tag);
                          }), [
                          "Reason React",
                          "Tailwind"
                        ]))));
}

var make = Home;

exports.str = str;
exports.make = make;
/*  Not a pure module */
