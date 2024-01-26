import useLeagueStore from "stores/league-store";

import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/navbar/sidebar";
import RootContainer from "./containers/root-container";
import ErrorComponent from "components/common/error-component";

function App() {
  const { selectedLeague } = useLeagueStore();

  return (
    <RootContainer>
      {/*  Side Bar */}
      <Sidebar />
      {/* Nav & Page*/}
      <div className="h-fit w-full">
        <Navbar />
        {selectedLeague ? (
          <Outlet />
        ) : (
          <div className="p-5">
            <ErrorComponent>
              <div className="flex min-h-28 items-center justify-center">
                <h1 className="text-center text-xl sm:text-2xl">
                  아직 리그를 선택하지 않았습니다. <br />
                  리그를 선택해 주세요
                </h1>
              </div>
            </ErrorComponent>
          </div>
        )}
      </div>
    </RootContainer>
  );
}

export default App;
