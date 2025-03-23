import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { Link } from "@mui/material";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-3">
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
            Sign-Out of {session.user?.name}
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center h-full px-2 text-cyan-600 text-sm">
            Sign-In
          </div>
        </Link>
      )}

      <div
        className="flex items-center absolute left-24 h-full
                    px-2 absoulute left-60 text-cyan-600 text-sm"
      >
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
      </div>

      <div className="flex items-center space-x-4">
        <TopMenuItem title="Booking" pageRef="/booking/" />
        <Image
          src={"/image/logo.png"}
          className="h-12 w-auto"
          alt="logo"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
