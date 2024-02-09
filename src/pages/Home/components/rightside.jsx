import React, { useContext } from 'react';
import { MyContext } from "../../../utils/ContextProvider"
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router';


export const RightSide = () => {

    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)
    const navigate = useNavigate()

    return (
        <>
            <div className='dark text-[--dark] bg-[--gray] friendsRequest max-[430px]:hidden z-3 fixed px-3 right-0 pt-[2%] top-[10vh] flex flex-wrap gap-3  w-[23.5vw] h-[90vh] overflow-y-scroll   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className=' bg-[--white] shadow w-[85%] h-fit rounded-xl py-[5%] px-[5%]'>
                    <h4>Friends Requeste</h4>
                    <div className='w-[100%] h-[80%] overflow-hidden'>
                    {dbPost.map((element, index) =>
                        <div className='flex w-[100%] h-fit items-center'>
                        <div className='flex  w-[100%] h-[10vh] gap-3 items-center px-2'>
                            <img className='post-profile rounded h-[50px] w-[50px]' src={element.picture} alt="." />
                            <div className='flex h-[100%] flex-col justify-center'>
                                <h5 className='p-0 m-0'>{element.username}</h5>
                                <p className='p-0 text-xs text-gray-500 ps-1 m-0'>{element.location}</p>
                            </div>
                        </div>
                        <IoMdAdd className="max-[430px]:text-4xl text-3xl p-2  bg-[--green] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all" />
                    </div>
                    )
                
                }
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={() => navigate(`/people}`)} className='w-[50%] border-1 border-[--teal] font-medium rounded text-[--teal] py-1 bg-[--light]  hover:scale-105 hover:translate-y-[-3px]'>View More</button>
                    </div>
                </div>

                
            </div>
        </>
    );
};

