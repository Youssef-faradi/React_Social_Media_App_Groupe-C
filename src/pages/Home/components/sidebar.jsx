import React from 'react';
import { MyContext } from "../../../utils/contextProvider"

import { IoIosArrowDropdown, IoMdAdd } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";





export const SidebarSectionHome = () => {
    return (
        <>
                <div className='z-2 max-[430px]:justify-center max-[430px]:rounded-t-xl max-[430px]:h-[10vh] max-[430px]:absolute  max-[430px]:bottom-0 max-[430px]:w-[100vw] min-[430px]:p-12 bg-white position-fixed h-[90vh] w-[20vw] flex flex-col gap-4'>
                    <div className="max-[430px]:hidden  h-[10%] w-[100%]   flex items-center gap-2  hover:translate-y-[-4px] hover:transition-all">
                        <img className=' w-[4vw] h-[100%] bg-[--green] border-2 border-[--teal] rounded-full' src="." alt="." />
                        <h5 className=''>Username</h5>
                    </div>
                    <ul className=' max-[430px]:mb-0 max-[430px]:justify-evenly  max-[430px]:flex-row max-[430px]:gap-2  flex flex-col  h-[60%] w-[100%] ps-3'>
                        <li className='h-[100%] '>
                            <div className='flex h-[100%] gap-3 items-center'>
                                <RiHome6Line className="max-[430px]:text-4xl text-5xl p-2  bg-[--green] rounded-xl hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                                <p className='max-[430px]:hidden font-medium text-[--dark] pt-2'>Home</p>
                            </div>
                        </li>
                        <li className='h-[100%] '>
                            <div className='flex h-[100%] gap-3 items-center'>
                                <LuMessagesSquare className="max-[430px]:text-4xl text-5xl p-2  bg-[--green] rounded-xl hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                                <p className='max-[430px]:hidden font-medium text-[--dark] pt-2'>Messages</p>
                            </div>
                        </li>
                        <li className='h-[100%] '>
                            <div className='flex h-[100%] gap-3 items-center'>
                                <IoMdAdd className="max-[430px]:text-4xl text-5xl p-2  bg-[--green] rounded-xl hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                                <p className='max-[430px]:hidden font-medium text-[--dark] pt-2'>Add Post</p>
                            </div>
                        </li>
                        <li className='h-[100%] '>
                            <div className='flex h-[100%] gap-3 items-center'>
                                <HiOutlineShoppingCart className="max-[430px]:text-4xl text-5xl p-2  bg-[--green] rounded-xl hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                                <p className='max-[430px]:hidden font-medium text-[--dark] pt-2'>Market</p>
                            </div>
                        </li>
                        <li className='h-[100%] max-[430px]:hidden'>
                            <div className='flex h-[100%] gap-3 items-center'>
                                <IoIosArrowDropdown className="text-4xl p-2  bg-[--green] rounded-xl hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                                <p className='max-[430px]:hidden font-medium text-[--dark] pt-2 '>See More</p>
                            </div>
                        </li>
                        <li className='min-[430px]:hidden  h-[100%] '>
                            <div className="flex h-[100%] gap-3 items-center">
                                <img className=' max-[430px]:h-[5vh]  max-[430px]:w-[7.5vw] max-[430px]:rounded-lg w-[4vw] h-[100%] bg-[--green] rounded-full' src="." alt="." />
                            </div>
                        </li>
                    </ul>
                    <button className='max-[430px]:hidden absolute left-[5vw] bottom-10 font-bold flex items-center gap-3 bg-[--green] hover:text-[--teal] hover:bg-[--lightGreen] transition-all rounded-full w-fit py-2 px-4'>Log Out <FaSignOutAlt /></button>
                </div>
        </>
    );
};

