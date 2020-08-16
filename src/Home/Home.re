open PromiseMonad;
open FetchData;
[@bs.val] external baseApi: string = "process.env.BASE_API";

[@react.component]
let make = () => {
  React.useEffect(() => {
    let fetchPhoto = return(fetchData("/photos?page=1"));
    fetchPhoto
    >>= (
      value => {
        Js.log(value);
        return(value);
      }
    );
    None;
  });

  <div className="h-screen flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          {"A reason react starter with tailwind" |> React.string}
        </p>
      </div>
      <div className="px-6 py-4">
        {[|"Reason", "Tailwind"|]
         |> Array.map(tag =>
              <span
                key=tag
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                {"#" ++ tag |> React.string}
              </span>
            )
         |> React.array}
      </div>
    </div>
  </div>;
};
