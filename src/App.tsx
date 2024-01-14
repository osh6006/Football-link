import { Outlet } from "react-router-dom";
import useAuth from "./hooks/use-auth";
import Button from "./components/common/Button";

function App() {
  const { signOut } = useAuth();

  return (
    <>
      {/* Nav */}
      <div>Nav</div>
      {/* Pages */}
      <div>App</div>
      <Button onClick={signOut}>SignOut</Button>
      <Outlet />
    </>
  );
}

export default App;
