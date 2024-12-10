import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-white.png";
import { navLinks } from "@/utils/navLinks";

const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Sider
      width={330}
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        paddingInline: `${collapsed ? "5px" : "10px"}`,
        backgroundColor: "#8D2E7D",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <div className="demo-logo-vertical" />
      {/* logo  */}
      <div className="mt-10 flex flex-col justify-center items-center gap-y-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo_Image" />
        </Link>
        <h1
          className={`${
            collapsed ? "text-sm" : "text-xl"
          }   font-extrabold text-white`}
        ></h1>
      </div>
      <Menu
        defaultSelectedKeys={["dashboard"]}
        mode="inline"
        className="sidebar-menu text-lg bg-main-color"
        items={navLinks}
      />
    </Sider>
  );
};

export default SidebarContainer;
