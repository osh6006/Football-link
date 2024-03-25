import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import RootContainer from "./components/layouts/root-container";

import { useLeagueStore } from "stores/league-store";

function App() {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  return (
    <RootContainer>
      {/*  Side Bar */}
      <Sidebar />
      {/* Nav & Page*/}
      <div className="relative  h-fit w-[100dvw-280px] lg:ml-[280px] ">
        <Navbar />
        {selectedLeague ? (
          <Outlet />
        ) : (
          <div className="flex h-[calc(100dvh-55px)] flex-col items-center justify-center gap-y-2 p-5 font-bold ">
            <h1
              className="text-center text-xl
            text-MediumGrey sm:text-2xl"
            >
              You haven't selected a league yet.
            </h1>
            <h1
              className="text-center text-xl
            text-MediumGrey sm:text-2xl"
            >
              Please choose a league 🤔
            </h1>
          </div>
        )}
      </div>
    </RootContainer>
  );
}

export default App;
