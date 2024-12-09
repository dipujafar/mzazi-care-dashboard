"use client";
import { Avatar, Badge, Button, Flex } from "antd";
import { FaBars } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/profile.png";

import Link from "next/link";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  return (
    <div className="flex items-center justify-between w-[97%] font-poppins">
      {/* Header left side */}
      <Flex align="center" gap={52}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full duration-1000"
        >
          <FaBars size={28} />
        </button>
        <div className="flex flex-col ">
          <h2 className="text-2xl  font-medium">
            Welcome, James
            <span className="block  text-sm font-normal">Have a nice day!</span>
          </h2>
        </div>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={16}>
        {/* Notification */}
        <Link href={"/notifications"}>
          <div className="flex justify-center items-center size-12 bg-[#E6F0FF] rounded-full cursor-pointer relative">
            <IoNotificationsOutline size={24} color="#8D2E7D" />

            <Badge
              count={1}
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "#FFF",
                color: "#8D2E7D",
                position: "absolute",
                top: "-16px",
                right: "-8px",
              }}
            >
              {" "}
            </Badge>
          </div>
        </Link>

        <Link href={"/personalInformation"} className="flex items-center">
          <Button
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Avatar src={avatarImg.src} size={48}></Avatar>
            <div className="text-white">
              <p className="text-lg font-semibold">James</p>
              <p>Admin</p>
            </div>
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
