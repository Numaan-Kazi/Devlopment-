import { SideMenu } from "@/components/Custom/SIdeMenu";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

export function AppLayout() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token") || "null");

  useEffect(() => {
    if (token) {
      navigate("/Landing");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <div className="flex min-h-screen">
      {token && (
        <SideMenu sidemenuIcon1="Overview.png" sidemenuName1="Overview" />
      )}

      <main className="w-full bg-[#8E9FC11F]">
        <Toaster richColors position="bottom-center" />
        <Outlet />
      </main>
    </div>
  );
}
