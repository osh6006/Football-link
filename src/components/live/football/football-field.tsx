import * as React from "react";

interface IFootballFieldProps {}

const FootballField: React.FunctionComponent<IFootballFieldProps> = (props) => {
  return (
    <div className="container ">
      <div className="line border border-white"></div>
      <div className="half w-1/2 border-r border-white"></div>
      <div className="panelty left absolute left-0 top-40 h-64 w-32 border border-white bg-green-600">
        <div className="absolute bottom-16 left-0 h-0 w-0 border-4 border-white"></div>
      </div>
      <div className="panelty right absolute right-0 top-40 h-64 w-32 border border-white bg-green-600">
        <div className="absolute bottom-16 right-0 h-0 w-0 border-4 border-white"></div>
      </div>
      <div className="p-spot left absolute">
        <div className="absolute left-24 top-32 text-4xl text-white">
          &#8226;
        </div>
      </div>
      <div className="p-spot right absolute">
        <div className="absolute right-24 top-32 text-4xl text-white">
          &#8226;
        </div>
      </div>
      <div className="center absolute left-32 top-24 h-32 w-32 rounded-full border border-white"></div>
      <div className="p-place left absolute left-0 top-24 h-36 w-36 rounded-full border-4 border-white"></div>
      <div className="p-place right absolute right-0 top-24 h-36 w-36 rounded-full border-4 border-white"></div>
    </div>
  );
};

export default FootballField;
