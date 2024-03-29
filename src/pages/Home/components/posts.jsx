import React, { useContext, useEffect, useState } from "react";
import './home.scss';

import { MyContext } from "../../../utils/contextProvider"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from 'react-icons/fa';
import { FaRetweet } from "react-icons/fa6";
import { StoriesSectionHome } from './stories';
import { element } from "prop-types";



export const PostsSectionHome = () => {
    const items = [
        {
            key: "new",
            label: `Save `,
        },
        {
            key: "copy",
            label: "Not interested",
        },
        {
            key: "edit",
            label: "Report",
        },
    ];
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)

    const [randomNumber, setRandomNumber] = React.useState("");

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 59) + 1;
        setRandomNumber(randomNum);
    }, []);

    
    const handleLikeClick = (index) => {

        let newtab = [...dbPost]

        newtab[index].likecheck = !newtab[index].likecheck
        newtab[index].likes += newtab[index].likecheck ? 1 : -1;
        setDbPost(newtab)
    }
    return (
        <>
            <div className='bg-[--lighter]  max-[430px]:w-[100vw] max-[430px]:ms-0 ms-[22.5vw]  min-h-[100vh]  w-[53vw] flex flex-wrap justify-center gap-3'>
                {/* <StoriesSectionHome /> */}
                {dbPost.map((element, index) =>
                    <div key={index} className='  text-[--dark] max-[430px]:w-[90%] w-[80%] h-[110vh] rounded-md shadow-xl bg-[--white] px-[4%] pt-[4%] flex flex-col gap-4'>
                        <div className='flex w-[100%] h-[9%] '>
                            <div className='flex gap-2  w-[80%] max-h-[10vh]'>
                                <img className='post-profile rounded-2xl h-[80%] w-[15%]' src="https://i.pinimg.com/564x/0e/a3/cb/0ea3cbab484e3f4bfcd1faf2b3532039.jpg" alt="." />
                                <div>
                                    <h5 className=''>{element.username}</h5>
                                    <p><span className='ps-2'>{randomNumber}</span>min</p>
                                </div>
                            </div>
                            <div className='z-0 '>
                                <Dropdown>
                                    <DropdownTrigger className="drop">
                                        <Button >
                                            <BsThreeDotsVertical />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Dynamic Actions" items={items}>
                                        {(item) => (
                                            <DropdownItem
                                                key={item.key}
                                                color={item.key === "delete" ? "danger" : "default"}
                                                className={item.key === "delete" ? "text-danger " : ""}
                                            >
                                                {item.label}
                                            </DropdownItem>
                                        )}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='h-[75%]  '>
                            <p className='text-gray-400 min-h-[10%] font-medium ps-2'>{element.content}</p>
                            <img className='rounded-xl h-[90%] w-[100%] ' src={element.image} alt="img" />
                        </div>
                        <div className='flex ps-4 pt-2'>
                            <div className='flex gap-3 '>
                                <div onClick={() => handleLikeClick(index)} title="Like" className="heart-container ">
                                    <input id="Give-It-An-Id" className="z-1 checkbox" type="checkbox" checked={element.likecheck} />
                                    <div className="svg-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-outline" viewBox="0 0 24 24">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-filled" viewBox="0 0 24 24">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="svg-celebrate">
                                            <polygon points="10,10 20,20"></polygon>
                                            <polygon points="10,50 20,50"></polygon>
                                            <polygon points="20,80 30,70"></polygon>
                                            <polygon points="90,10 80,20"></polygon>
                                            <polygon points="90,50 80,50"></polygon>
                                            <polygon points="80,80 70,70"></polygon>
                                        </svg>
                                    </div>
                                    <p className="">{element.likes}</p>
                                </div>
                                <div className='comment'>
                                    <FaRegComment className='com text-3xl mt-[2px] text-[--tealo]' />
                                </div>
                                <div className='spin'>
                                    <FaRetweet className='retweet text-3xl mt-1 text-[--tealo]' />
                                </div>
                                <button className='send'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};




