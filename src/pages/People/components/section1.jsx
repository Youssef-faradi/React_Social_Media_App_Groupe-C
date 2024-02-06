import React from "react";
import { useContext, useState } from "react";
import zakaria from "../../../assets/images/Picsart_22-12-18_00-49-44-927.png";
import { MyContext } from "../../../utils/ContextProvider";
import { element } from "prop-types";

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
      <div className="flex items-center justify-center p-2">
        <div className="rounded-lg bg-gray-200 p-2">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-1">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
              </svg>
            </div>
            <input
              onChange={(e) => filterElement(e)}
              type="text"
              className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
              placeholder=""
              id=""
            />
            <input
              type="button"
              defaultValue="Search"
              className="bg-[#08D9D6] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-y-5 p-3  bg-gray-200 pt-12">
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
                <div className="flex gap-2 px-2">
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
                  <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
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
