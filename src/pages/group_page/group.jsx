import React, { useContext, useState } from 'react';
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
import { MyContext } from '../../utils/contextProvider';
import { useNavigate } from 'react-router';
import { NavbarSectionHome } from '../Home/components/navbar';


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
            userId : dbUser[0]
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
        if (dbUser[0] == group.length[0]) {
            return(<div className="buttons h-[20%] flex justify-center items-center mb-2">
            <button onClick={() => navigate("/details")}
                class="flex justify-center items-center gap-2 w-40 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[--teal] hover:shadow-xl hover:shadow-[--teal] hover:scale-105 duration-300 hover:from-[#FF9843] hover:to-[#FF9843]"
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
        <div className='w-full flex flex-col  items-center'>

           <NavbarSectionHome/>



            <div className="container bg-white shadow-xl h-[20vh]  justify-between flex items-end mb-5 pb-2">

                <div class="flex items-center justify-center">
                    <div class="rounded-lg">
                        <div class="flex">
                            <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-dark">
                                <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0 outline-[--steal] border-[--steal]" placeholder="" id="" />
                            <input type="button" value="Search" class="bg-[--steal] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[--steal] transition-colors" />
                        </div>
                    </div>


                </div>


                {/* Button Add items */}

                <Button className='bg-[--teal]' onClick={handleShow} >
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

            <div className=" h-fit w-[90%]  flex flex-wrap gap-5 px-[10%]">
                {
                    screenArray.map((element, index) =>

                        <>
                            <div className=" flex w-[20%] flex-wrap justify-between">
                                <div className=" h-30vh] w-[100%] p-3 rounded-lg shadow-lg hover:scale-105 transition">

                                    <div className="pt-3 image w-[100%] h-[15vh]  flex flex-col items-center">
                                        <img src={element.image} alt="" className='w-[40%] rounded-circle h-[80%] ' />
                                    </div>

                                    <div className="textandbutt flex flex-col justify-around h-[50%]">
                                        <div className="text-center">
                                            <h2 className='font-semibold  text-dark'>{element.title}</h2>
                                        </div>

                                        <div className="members flex flex-row text-md justify-center mb-1">
                                            <span className='p-1 text-[--dark]'> <IoPerson /> </span>
                                            <span className='text-[--dark]'>{element.members} Members</span>

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
