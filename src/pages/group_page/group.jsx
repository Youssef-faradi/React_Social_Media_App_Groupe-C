import React, { useContext, useState } from 'react';
import zaymas from '../../img/ZAYMAS.png'
import { IoPerson } from "react-icons/io5";
import { BsAt } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, button } from "@nextui-org/react";
import { IoStorefrontSharp, IoNotifications } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { newExpression } from '@babel/types';
import { MyContext } from '../../utils/ContextProvider';
import { useNavigate } from 'react-router';


// class Groupes {
//     constructor(title, desc, img, number, connection, members, userid) {
//         this.title = title
//         this.desc = desc
//         this.img = img
//         this.number = number
//         this.connection = connection
//         this.members = members
//         this.userid = userid
//     }
// }

// let group1 = new Groupes("Amine Group", "This is a market group", zaymas, "552", '+500', 1);
// let group2 = new Groupes("Achraf Group", "Perfume Lovers", zaymas, "120", '+154', '+50', 2);


const group = []





export const Group = () => {
    const [screenArray, setScreenArray] = useState(group)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes , products ,setProducts] = useContext(MyContext)

    const [image, setImage] = useState();
    const [name, setName] = useState('');

    const addProduct = (ev) => {
        const newGroup = {
            image: image,
            title: name,
            groupeId: group.length ,
            userId : dbUser[0].userId
        }
        screenArray.push(newGroup);
        handleClose();
    }
    console.log(group)


    const handlImgChange = (e) => {
        const selectImage = URL.createObjectURL(e.target.files[0])
        setImage(selectImage)
        console.log(selectImage);
    }

    const navigate = useNavigate()

    function GroupeButton (){
        if (dbUser[0].userId == group[0].userId) {
            return(<div className="buttons h-[20%] flex justify-center items-center mb-2">
            <button onClick={() => navigate("/details")}
                class="flex justify-center items-center gap-2 w-40 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[#FF9843] hover:shadow-xl hover:shadow-[#FF9843] hover:scale-105 duration-300 hover:from-[#FF9843] hover:to-[#FF9843]"
            >
                Edit Group
            </button>
            </div>)
        }else{
            return( <div className="buttons h-[20%] flex justify-center items-center mb-2">
            <button
                class="flex justify-center items-center gap-2 w-40 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[#FF9843] hover:shadow-xl hover:shadow-[#FF9843] hover:scale-105 duration-300 hover:from-[#FF9843] hover:to-[#FF9843]"
            >
                Join
            </button>

        </div>)
        }
    }


    return (
        <div className=''>

            <div className="fixed h-[10vh] w-[100vw] z-1 flex px-[5%] border-b-1 bg-light">
                <div className="max-[430px]:w-[40%] w-[25%] h-[100%] flex items-center justify-center">
                    <h3 className="text-[#FF9843]  font-bold font-serif ">Zay<span className="text-[--dark]">Mas</span>.</h3>
                </div>
                <div className=" flex w-[70%] h-[100%] gap-5 items-center " >
                    <div className="max-[430px]:w-[100%] h-[100%] relative flex items-center gap-3  w-[40%]">
                        <input type="search" className="max-[430px]:hidden  rounded-md pe-3 ps-5 h-[50%] w-[80%] bg-gray-200 focus:outline-none" placeholder="Type To Search" />
                        <FaSearch className="max-[430px]:left-[50%]  absolute top-[50%] translate-y-[-50%] text-gray-400 left-3" />
                        <div className=" max-[430px]:w-[90%] DarkMode w-[20%]  flex justify-end ">
                            <label className="theme-switch">
                                <input type="checkbox" className="theme-switch__checkbox" />
                                <div className="theme-switch__container">
                                    <div className="theme-switch__clouds"></div>
                                    <div className="theme-switch__stars-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
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
                        <div className="p-2 bg-[#ff9843a9] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all ">
                            <HiHome className="text-2xl" />
                        </div>
                        <div className="p-2 bg-[#ff9843a9] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all ">
                            <IoIosPeople className="text-2xl" />
                        </div>
                        <div className="p-2 bg-[#ff9843a9] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
                            <IoStorefrontSharp className="text-2xl" />
                        </div>
                        <div className="p-2 bg-[#ff9843a9] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
                            <IoNotifications className="text-2xl" />
                        </div>
                        <div className="p-2 bg-[#ff9843a9] rounded-full hover:text-[--teal] hover:bg-[--lightGreen]  hover:translate-y-[-4px] hover:transition-all">
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
                            <DropdownMenu aria-label="Profile Actions" variant="flat" >
                                <DropdownItem key="profile" >My Profile</DropdownItem>
                                <DropdownItem key="settings">My Settings</DropdownItem>
                                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                <DropdownItem key="logout" color="danger"><div className="flex items-center gap-2">
                                    Log Out <FaSignOutAlt className="text-md" />
                                </div></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>



            <div className="container bg-white shadow-xl h-[20vh] justify-center justify-between flex items-end mb-5 pb-2">

                <div class="flex items-center justify-center">
                    <div class="rounded-lg">
                        <div class="flex">
                            <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-dark">
                                <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0 outline-[#FF9843] border-[#FF9843]" placeholder="" id="" />
                            <input type="button" value="Search" class="bg-[#FF9843] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#FF9843] transition-colors" />
                        </div>
                    </div>


                </div>


                {/* Button Add items */}

                <Button onClick={handleShow} variant='warning'>
                    Create A Group
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Group Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Type your Group Name"
                                    autoFocus
                                    onChange={((ev) => setName(ev.target.value))}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div class="grid w-full max-w-xs items-center gap-1.5">
                                    <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Group Picture</label>
                                    <input id="picture" type="file" onChange={handlImgChange} class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addProduct}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


                {/* Add Items */}

            </div>

            <div className=" h-fit w-[90%] flex flex-wrap gap-5 justify-end">
                {
                    screenArray.map((element, index) =>

                        <>
                            <div className="allcard flex flex-wrap justify-between">
                                <div className="cards h-[40vh] rounded-lg shadow-lg hover:scale-105 transition">

                                    <div className="image">
                                        <img src={zaymas} alt="" className='w-[100%] rounded-md' />
                                    </div>

                                    <div className="textandbutt flex flex-col justify-around h-[50%]">
                                        <div className="text">
                                            <h2 className='font-semibold text-center text-dark text-dark'>{element.title}</h2>
                                        </div>

                                        <div className="members flex flex-row text-md justify-center mb-1">
                                            <span className='p-1 text-white'> <IoPerson /> </span>
                                            <span className='text-white'>{element.members} Members</span>

                                        </div>

                                       {
                                        GroupeButton() 
                                       }
                                    </div>
                                </div>
                            </div>
                        </>


                    )
                }
            </div>









        </div>
    );
};
