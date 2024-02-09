import React from "react";
import { useContext, useState } from "react";
import zakaria from "../../../assets/images/Picsart_22-12-18_00-49-44-927.png";
import { MyContext } from "../../../utils/contextProvider";
import { element } from "prop-types";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} 
from "@nextui-org/react";
import { IoStorefrontSharp, IoNotifications } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { NavbarSectionHome } from "../../Home/components/navbar";

export const Sectionpeople = () => {
  const [
    dbUser,
    setDbUser,
    dbFriendship,
    setDbFriendship,
    dbPost,
    setDbPost,
    dbComments,
    setDbComments,
    dbLikes,
    setDbLikes,
  ] = useContext(MyContext);

  const [isFollowing, setIsFollowing] = useState(false);

  const [myInput, setMyInput] = useState(dbUser);

  const handleClick = () => {
    setIsFollowing((prevState) => !prevState);
  };

  const filterElement = (event) => {
    let newTab = myInput.filter((element) =>
      element.full_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setDbUser(newTab);
  };

  return (
    <>
    

    <NavbarSectionHome/>


      

      <div className="flex flex-wrap gap-y-5 pt-[15vh] px-[10px] py-[10px]  bg-gray-200">
        
        {/* Card start */}

        {dbUser.map((element, index) => (
          <>
            <div
              className="max-w-sm mx-auto bg-white  dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg  transition-all duration-700 hover:scale-110"
              key={index}
            >
              <div className="border-b px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-25git w-25 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src={element.picture}
                    alt=""
                  />
                  <div className="py-2">
                    <h3 className="font-bold text-2xl text-gray-800 dark:text-black mb-1">
                      {element.full_name}
                    </h3>
                    <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path
                          className=""
                          d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                        />
                      </svg>
                      {element.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 px-2 justify-center">
                  <button
                    className="rounded-full border-2"
                    onClick={handleClick}
                    style={{
                      width: isFollowing ? "80px" : "100px",
                      backgroundColor: isFollowing ? "#2EB82E" : "#ffffff",
                      color: isFollowing ? "#fff" : "#3399FF",
                      borderColor: isFollowing ? "#2EB82E" : "#3399FF",
                      transition:
                        "width 0.6s ease-in-out, background-color 1s ease-in-out",
                    }}
                  >
                    {isFollowing ? "Following" : "+ Follow"}
                  </button>
                  <button className=" w-32  rounded-full border-2  border-gray-400 dark:border-gray-700  font-semibold text-black dark:text-white py-2">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}

        {/* Card end */}
      </div>
    </>
  );
};
