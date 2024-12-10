import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CalendarCheck, ClipboardPlus, Pill, Wallet } from "lucide-react";
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
    key: "medicine-request",
    icon: <Pill size={18} />,
    label: <Link href={"/medicine-request"}>Medicine Request</Link>,
  },
  {
    key: "nurse-request",
    icon: <ClipboardPlus size={18} />,
    label: <Link href={"/nurse-request"}>Nurse Request</Link>,
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
