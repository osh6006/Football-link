import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import RootContainer from "./components/layouts/root-container";

function App() {
  return (
    <RootContainer>
      {/*  Side Bar */}
      <Sidebar />
      {/* Nav & Page*/}
      <div className="relative  h-fit w-[100dvw-280px] lg:ml-[280px] ">
        <Navbar />
        {true ? (
          <Outlet />
        ) : (
          <div className="flex h-[calc(100dvh-55px)] items-center justify-center p-5  ">
            <h1
              className="tex t-MediumGrey text-center
            text-xl sm:text-2xl"
            >
              아직 리그를 선택하지 않았습니다. <br />
              리그를 선택해 주세요
            </h1>
          </div>
        )}
      </div>
    </RootContainer>
  );
}

export default App;
