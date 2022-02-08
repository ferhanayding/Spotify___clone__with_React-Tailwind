import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";
const Auth = () => {
  const user = {
    name: "Asil__Kurt42",
    img: "data:image/jpeg;base64,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",
  };
  return (
    <Menu as={"nav"} className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center justify-center gap-x-2 pr-2 h-8 ${
              open ? "bg-active" : "bg-black"
            }  hover:bg-active bg-black rounded-3xl`}
          >
            <img className="w-6 h-6 rounded-full" src={user.img} alt="" />
            <span className="text-sm font-semibold ">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon size={16} name={"downDir"} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full p-1 right-0 w-48 bg-active rounded-md translate-y-2 "
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Account
                  <Icon size={16} name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
