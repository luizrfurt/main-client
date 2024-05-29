import React from "react";
import router from "next/router";
import { logout } from "@/services/AuthServices";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

export default function Home() {
  const handleLogout = async () => {
    const result = await logout();
    alert(result.message);
    if (result.status === "success") {
      router.push("/");
    }
  };

  return (
    <div>
      <Navbar fluid className={styles.navbar}>
        <NavbarBrand href="/home">
          <img
            src="/favicon.ico"
            className={styles.logo}
            alt="Solverapps logo"
          />
          <span className={styles.title}>Main</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://prime-repo.s3.sa-east-1.amazonaws.com/main/users/default-user-photo.png"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className={styles.text}>Bonnie Green</span>
              <span className={styles.text}>name@flowbite.com</span>
            </DropdownHeader>
            <DropdownItem href="/home">Home</DropdownItem>
            <DropdownItem>Configurações</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
      </Navbar>
    </div>
  );
}

const styles = {
  navbar: "bg-blue-900",
  logo: "mr-3 h-6 sm:h-9",
  title: "self-center whitespace-nowrap text-xl font-semibold text-white",
  text: "block truncate text-sm font-medium",
};
