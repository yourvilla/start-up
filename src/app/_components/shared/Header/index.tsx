"use client";

import { drawerData } from "@/app/_helpers/home";
import Text from "../Text";
import LogoutIcon from "@mui/icons-material/Logout";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex p-8 w-full bg-dark justify-center  shadow-md">
      <Link
        className="w-1/4 text-center text-2xl font-bold text-summerSky cursor-pointer"
        href={"/home"}
      >
        Start-Up
      </Link>
      <div className="flex w-3/4 justify-center">
        {drawerData.map((data: { id: string; title: string; path: string }) => (
          <Link
            className={classNames(
              "mx-5 text-lg font-semibold cursor-pointer",
              data.path === pathname && "border-b-summerSky border-b-4"
            )}
            href={data.path}
          >
            {data.title}
          </Link>
        ))}
      </div>
      <LogoutIcon fontSize="large" />
    </div>
  );
}
