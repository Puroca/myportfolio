import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import MobileMenu from "../components/MobileMenu"

const DefaultLayout = () => {
  return (
      <div>
          <TopBar />
          <MobileMenu />
          <div className="min-h-screen">
              <Outlet />
          </div>
          <Footer />
      </div>
  );
}

export default DefaultLayout