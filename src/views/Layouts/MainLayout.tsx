import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
import { Toaster } from "sonner"

const MainLayout = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);
  return (
    <div className="">
        <Outlet/>
        <Toaster position="top-right" />
    </div>
  )
}

export default MainLayout