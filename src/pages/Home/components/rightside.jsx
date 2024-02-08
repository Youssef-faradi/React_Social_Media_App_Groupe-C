import React from 'react';
import { MyContext } from "../../../utils/ContextProvider"
import { IoMdAdd } from "react-icons/io";


export const RightSide = () => {
    return (
        <>
            <div className='dark text-[--dark] bg-[--gray] friendsRequest max-[430px]:hidden z-3 fixed px-3 right-0 pt-[2%] top-[10vh] flex flex-wrap gap-3  w-[23.5vw] h-[90vh] overflow-y-scroll   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className=' bg-[--white] shadow w-[85%] h-[75%] rounded-xl pt-[5%] px-[5%]'>
                    <h4>Friends Requeste</h4>
                    <div className='w-[100%] h-[80%] overflow-hidden'>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h5 className='p-0 m-0'>Username</h5>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h6 className='p-0 m-0'>Username</h6>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h5 className='p-0 m-0'>Username</h5>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h5 className='p-0 m-0'>Username</h5>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h5 className='p-0 m-0'>Username</h5>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <button className='w-[50%] border-1 border-[--teal] font-medium rounded text-[--teal] py-1 bg-[--light]  hover:scale-105 hover:translate-y-[-3px]'>View More</button>
                    </div>
                </div>

                <div className='bg-[--white] rounded-xl shadow w-[85%] h-[54%] pt-[5%] px-[5%]'>
                    <h4>Friends Requeste</h4>
                    <div className='w-[100%] h-[80%] overflow-hidden'>
                        <div className='flex w-[100%] h-[10vh] items-center'>
                            <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                                <img className='post-profile rounded h-[70%] w-[20%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div className='flex h-[100%] flex-col justify-center'>
                                    <h5 className='p-0 m-0'>Username</h5>
                                    <p className='p-0 text-xs text-gray-500 ps-1 m-0'>Localisation</p>
                                </div>
                            </div>
                            <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

