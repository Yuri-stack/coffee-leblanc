import { Outlet } from "react-router-dom";
import { Header } from "../components/Navbar";

export function DefaultLayout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}
