import React from "react";
import "./setting.css";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { IoStorefrontSharp, IoNotifications } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";

export const SectionSetting = () => {
  return (
    <>
      <nav>
        <div>
          <div className="fixed h-[10vh] w-[100vw] z-1 flex px-[5%] border-b-1 bg-white">
            <div className="max-[430px]:w-[40%] w-[25%] h-[100%] flex items-center justify-center">
              <h3 className="text-[--teal]  font-bold font-serif ">
                Zay<span className="text-[--dark]">Mas</span>.
              </h3>
            </div>
            <div className=" flex w-[70%] h-[100%] gap-5 items-center ">
              <div className="max-[430px]:w-[100%] h-[100%] relative flex items-center gap-3  w-[40%]">
                <input
                  type="search"
                  className="max-[430px]:hidden  rounded-md pe-3 ps-5 h-[50%] w-[80%] bg-gray-200 focus:outline-none"
                  placeholder="Type To Search"
                />
                <FaSearch className="max-[430px]:left-[50%]  absolute top-[50%] translate-y-[-50%] text-gray-400 left-3" />
                <div className=" max-[430px]:w-[90%] DarkMode w-[20%]  flex justify-end ">
                  <label className="theme-switch">
                    <input type="checkbox" className="theme-switch__checkbox" />
                    <div className="theme-switch__container">
                      <div className="theme-switch__clouds"></div>
                      <div className="theme-switch__stars-container">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 144 55"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="theme-switch__circle-container">
                        <div className="theme-switch__sun-moon-container">
                          <div className="theme-switch__moon">
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="max-[430px]:hidden   h-[80%] flex items-center  w-[55%] gap-5">
                <div className="p-2 bg-[--light] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all ">
                  <HiHome className="text-2xl" />
                </div>
                <div className="p-2 bg-[--light] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all ">
                  <IoIosPeople className="text-2xl" />
                </div>
                <div className="p-2 bg-[--light] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
                  <IoStorefrontSharp className="text-2xl" />
                </div>
                <div className="p-2 bg-[--light] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
                  <IoNotifications className="text-2xl" />
                </div>
                <div className="p-2 bg-[--light] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
                  <LuMessagesSquare className="text-2xl" />
                </div>

                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile">My Profile</DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      <div className="flex items-center gap-2">
                        Log Out <FaSignOutAlt className="text-md" />
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* fin nav */}

      <div className="section-body">
        <div className="container pt-[15vh]">
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width={110}
                      />
                      <div className="mt-3">
                        <h4>John Doe</h4>
                        <p className="text-secondary mb-1">
                          Full Stack Developer
                        </p>
                        <p className="text-muted font-size-sm">
                          Bay Area, San Francisco, CA
                        </p>
                        <button className="btnmessage">
                          <span>Message</span>
                        </button>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-globe me-2 icon-inline"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <line x1={2} y1={12} x2={22} y2={12} />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Website
                        </h6>
                        <span className="text-secondary">
                          https://
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github me-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          Github
                        </h6>
                        <span className="text-secondary">@github</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter me-2 icon-inline text-info"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                          Twitter
                        </h6>
                        <span className="text-secondary">@twitter</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram me-2 icon-inline text-danger"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                              ry={5}
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                          Instagram
                        </h6>
                        <span className="text-secondary">@instagram</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-facebook me-2 icon-inline text-primary"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                          Facebook
                        </h6>
                        <span className="text-secondary">@facebook</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="John Doe"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="(239) 816-9029"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Job</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Tap Your Job"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Bay Area, San Francisco, CA"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3" />
                      <div className="col-sm-9 text-secondary">
                      <button className="button font-bold savebtn">Save Changes</button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="d-flex align-items-center mb-3">
                          Project Status
                        </h5>
                        <p>Web Design</p>
                        <div className="progress mb-3" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>Website Markup</p>
                        <div className="progress mb-3" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow={72}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>One Page</p>
                        <div className="progress mb-3" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow={89}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>Mobile Template</p>
                        <div className="progress mb-3" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow={55}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>Backend API</p>
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow={66}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
