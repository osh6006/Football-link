import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import TopButton from "components/common/top-button";
import HowToLeague from "components/home/how-to-league";
import RootContainer from "./components/layouts/root-container";

import ModalProviders from "providers/modal-providers";

import { useLeagueStore } from "stores/league-store";

function App() {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (e: Event) => {
    const container = document.querySelector(".main");
    const scrollTop = container?.scrollTop || 0;

    if (scrollTop >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
    const container = document.querySelector(".main");
    container?.addEventListener("scroll", debouncedHandleScroll, false);
    return () =>
      container?.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  return (
    <RootContainer>
      <ModalProviders />
      {/*  Side Bar */}
      <Sidebar onClose={() => {}} />
      {/* Nav & Page*/}
      <div className="relative h-fit w-[100dvw-280px] lg:ml-[280px] ">
        <Navbar />
        {selectedLeague ? (
          <Outlet />
        ) : (
          <div className="my-24 flex h-[calc(100dvh-55px)] flex-col items-center justify-center gap-y-2 p-5 font-bold sm:my-0 ">
            <HowToLeague />
          </div>
        )}
      </div>

      <TopButton isVisible={isVisible} />
    </RootContainer>
  );
}

export default App;
