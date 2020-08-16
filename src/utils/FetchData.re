open PromiseMonad;
open Fetch;
[@bs.val] external baseAPI: string = "process.env.BASE_API";
[@bs.val] external clientID: string = "process.env.CLIENT_ID";

let fetchData = (~apiHost: string=baseAPI, ~method: requestMethod=Get, url) => {
  let fetchDataRes =
    fetchWithInit(
      {j|$(apiHost)$(url)&client_id=$(clientID)|j},
      RequestInit.make(
        ~method_=method,
        ~headers=
          Fetch.HeadersInit.make({
            "Content-Type": "application/json",
            "Accept": "*",
          }),
        (),
      ),
    )
    >>= Response.json
    >>= (
      data => {
        return(data);
      }
    );
  fetchDataRes;
};
