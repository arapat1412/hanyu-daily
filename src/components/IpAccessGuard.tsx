import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShieldX } from "lucide-react";
import { checkCurrentIpBlocked } from "../lib/admin";

export function IpAccessGuard({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [blocked, setBlocked] = useState(false);
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");

  useEffect(() => {
    if (isAdminRoute) {
      setBlocked(false);
      return;
    }
    let active = true;
    checkCurrentIpBlocked().then((value) => active && setBlocked(value));
    return () => { active = false; };
  }, [isAdminRoute]);

  if (blocked && !isAdminRoute) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
        <section className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-9 text-center shadow-xl shadow-slate-200/60">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><ShieldX className="h-7 w-7" /></div>
          <h1 className="mt-5 text-2xl font-black text-slate-950">Truy cập bị từ chối</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">Địa chỉ mạng này đã bị quản trị viên Hanyu Daily chặn.</p>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
