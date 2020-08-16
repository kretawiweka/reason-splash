'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var PromiseMonad = require("bs-promise-monad/src/PromiseMonad.bs.js");

function fetchData(apiHostOpt, method_Opt, url) {
  var apiHost = apiHostOpt !== undefined ? apiHostOpt : process.env.BASE_API;
  var method_ = method_Opt !== undefined ? method_Opt : /* Get */0;
  return PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("" + (String(apiHost) + ("" + (String(url) + ("&client_id=" + (String(process.env.CLIENT_ID) + ""))))), Fetch.RequestInit.make(method_, {
                            "Content-Type": "application/json",
                            Accept: "*"
                          }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)), (function (prim) {
                    return prim.json();
                  })), PromiseMonad.$$return);
}

exports.fetchData = fetchData;
/* No side effect */
