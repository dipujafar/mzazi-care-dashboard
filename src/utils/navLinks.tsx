import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CalendarCheck, Wallet } from "lucide-react";
import Link from "next/link";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "nursing-service-request",
    icon: <CalendarCheck size={18} />,
    label: (
      <Link href={"/nursing-service-request"}>Nursing Service Request</Link>
    ),
  },
  {
    key: "earnings",
    icon: <Wallet size={18} />,
    label: <Link href={"/earnings"}>Earnings</Link>,
  },

  {
    key: "vendors",
    icon: <GoPeople size={18} />,
    label: <Link href={"/vendors"}>Vendors</Link>,
  },
  {
    key: "users",
    icon: <GoPeople size={18} />,
    label: <Link href={"/user"}>Users</Link>,
  },
  {
    key: "passwordResetRequest",
    icon: <LuMessageSquarePlus size={18} />,
    label: <Link href={"/resetPasswordRequest"}>Password Reset Request</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  {
    key: "logOut",
    icon: <RiLogoutCircleLine size={18} />,
    label: <Link href={"/login"}>Logout</Link>,
  },
];
