import { useContext, useState } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import Card from 'react-bootstrap/Card';
import "./section1.sass"
import image from '../../../assets/images/homme1.avif'
import image1 from '../../../assets/images/mosquéeHassan2.webp'
import friend from '../../../assets/images/profil.jpg'


import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { PiVideoDuotone } from "react-icons/pi";
import { GiPositionMarker } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from 'react-icons/fa';
import { FaRetweet } from "react-icons/fa6";


import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";




export const Section1Profile = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes, products, setProducts] = useContext(MyContext)
    const modal1 = useDisclosure();
    const modal2 = useDisclosure();
    const modal3 = useDisclosure();
    const [inputImg, setInputImg] = useState()
    const [descriptionImg, setDescriptionImg] = useState()
    const [inputVd, setInputVd] = useState()
    const [descriptionVd, setDescriptionVd] = useState()
    const [inputStatus, setInputStatus] = useState()
    const [chihaja, setChihaja] = useState()
    // ^^ ********post  Image ******************
    //  ******** input Image ******************
    const getFileImg = (event) => {
        setInputImg(URL.createObjectURL(event.target.files[0]))
    }
    //  ******** post Image done ******************
    const DoneImg = () => {
        if (inputImg) {
            const today = new Date();
            let element = {
                type: "image",
                postId: dbPost.length,
                userId: 0,
                content: descriptionImg,
                postDate: today.toLocaleDateString(),
                privacySetting: "( public, friends only, private)",
                image: inputImg
            }
            const table = [...dbPost];
            table.unshift(element)
            setDbPost(table)
            setInputImg()
            setDescriptionImg()

        } else {
            alert('upload a picture')
        }
    }
    // const DescriptionImg=()=>{

    // }
    //  ******** post Image close X ******************
    const CloseImg = () => {
        setInputImg()
        setDescriptionImg()
        
    }




    // ^^ ********post video ******************
    //  ******** input vidoe ******************
    const getFileVd = (event) => {
        setInputVd(URL.createObjectURL(event.target.files[0]))
    }
    //  ******** post video done ******************
    const DoneVd = () => {
        if (inputVd) {
            const today = new Date();
            let element = {
                type: "video",
                postId: dbPost.length,
                userId: 0,
                content: descriptionVd,
                postDate: today.toLocaleDateString(),
                privacySetting: "( public, friends only, private)",
                video: inputVd
            }
            const table = [...dbPost];
            table.unshift(element)
            setDbPost(table)
            setInputVd()
            setDescriptionVd()
        } else {
            alert("upload a video")
        }
    }

    //  ******** post video close X ******************
    const CloseVd = () => {
        setInputVd()
        setDescriptionVd()
    }
    // ^^ ********post Status ******************
    //  ******** post Status done ******************
    const DoneStatus = () => {
        if (inputStatus) {
            const today = new Date();
            let element = {
                type: "status",
                postId: dbPost.length,
                userId: 0,
                content: inputStatus,
                postDate: today.toLocaleDateString(),
                privacySetting: "( public, friends only, private)",
                image: "post status "
            }
            const table = [...dbPost];
            table.unshift(element)
            setDbPost(table)
            setInputStatus()
        } else {
            alert("upload a status")
        }
    }

    //  ******** post Status close X ******************
    const CloseStatus = () => {
        setInputStatus()
    
    }

    // ^^ fontion achraf :

    function Posts(params) {
        if (params.type == "image") {
            return (<img className='rounded-xl  h-[45vh] w-[100%] ' src={params.image} alt="img" />)
        } else if (params.type == "video") {
            return (<video className='rounded-xl  border-2 h-[45vh] w-[100%] ' controls muted src={params.video} />)
        } else if (params.type == "status") {
        }
    }
    function Pictures(params) {
        if (params.type == "image") {
            return (<div className="w-[32%] h-[110px] "><img className='rounded-xl  shadow-xl w-100 h-100 ' src={params.image} alt="img" /> </div>)
        } 
    }
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

    return (
        <>
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                `url(${image1})`
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        />
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0px)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x={0}
                            y={0}
                        >
                            <polygon
                                className="text-[--light] fill-current"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                <section className="relative pt-16  bg-[--light]">
                    <div className="container mx-auto px-4 ">
                        {/* profil */}
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-xl rounded-lg -mt-64 ">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center mr-8">
                                        <div className="relative ">
                                            <img
                                                alt="..."
                                                src={image}
                                                className="shadow-xl rounded-full h-[200px] align-middle border-none absolute -m-16  -ml-20  max-w-200-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4  mt-32 md:mt-0 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8 ">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    22
                                                </span>
                                                <span className="text-sm text-blueGray-400">Friends</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    10
                                                </span>
                                                <span className="text-sm text-blueGray-400">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="flex justify-center">
                                            <div className="py-6 px-3  sm:mt-0 flex gap-3">
                                                <button
                                                    className="bg-pink-500 active:bg-pink-600 uppercase text-gray-600 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    Connect
                                                </button>
                                                <button
                                                    className="bg-pink-500 active:bg-pink-600 uppercase text-gray-600 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    setting
                                                </button>
                                                <button
                                                    className="bg-pink-500 active:bg-pink-600 uppercase text-gray-600 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    add story
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center ">
                                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 my-4">
                                        {dbUser[0].username}
                                    </h3>
                                </div>
                                <div className=" py-4 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className=" text-lg leading-relaxed text-blueGray-700">
                                                Responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sous profil  */}
                        <div className=" w-100 rounded-lg mt-2 flex gap-3 ">
                            {/* divs gauche */}
                            <div className="w-50 rounded-xl  h-screen mb-2 pb-4">
                                <div className="w-100 rounded-xl bg-white text-gray-600 pl-3 py-1 mb-2 shadow-xl">
                                    <p className="text-gray-600 text-3xl pb-2">Intro</p>
                                    <div className="text-sm leading-normal mt-0  flex items-center text-gray-600  mb-2 text-blueGray-400 font-bold uppercase">
                                        <GiPositionMarker className="mr-2" />
                                        Casablanca, Maroc
                                    </div>
                                    <div className="mb-2 flex items-center  text-blueGray-600  text-gray-600">
                                        <FaUniversity className="mr-2" />
                                        Web developer - LionsGeek
                                    </div>
                                    <div className="mb-2  flex items-center    text-blueGray-600 text-gray-600">
                                        <RiLuggageDepositFill className="mr-2" />
                                        University of LionsGeek
                                    </div>
                                </div>
                                {/* picture div */}
                                <div className="w-100 rounded-xl bg-white text-gray-600 py-2 pl-3 pr-2 mb-2 flex flex-col h-[45%] shadow-xl">
                                    <p className="text-gray-600 text-3xl pb-2">Pictures</p>
                                    <div className="flex flex-wrap gap-1 overflow-y-scroll  profilScroll h-[100%]">
                                        {
                                            dbPost.map((element, index) =>
                                                <>
                                                    
                                                        {
                                                            Pictures(element)
                                                        }
                                                    
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="flex justify-content-center" >
                                        <button>view all pictures</button>
                                    </div>
                                </div>
                                {/* friends div */}
                                <div className="w-100 rounded-xl bg-white text-gray-600 py-2 pl-3 pr-2  mb-2 flex flex-col h-[32%] shadow-xl">
                                    <p className="text-gray-600 text-3xl pb-2">Friends</p>
                                    <div className="w-[100%] flex flex-wrap overflow-y-scroll  profilScroll gap-3">
                                        <div className="flex flex-col bg-white shadow-xl rounded-xl  w-[30%]">
                                            <img className="rounded-t-xl w-100 h-[110px]" src={image} alt="" />
                                            <p className="m-0 pl-1 text-center text-black">userName</p>
                                        </div>
                                        <div className="flex flex-col bg-white shadow-xl rounded-xl  w-[30%]">
                                            <img className="rounded-t-xl w-100 h-[110px]" src={image} alt="" />
                                            <p className="m-0 pl-1 text-center text-black">userName</p>
                                        </div>
                                        <div className="flex flex-col bg-white shadow-xl rounded-xl  w-[30%]">
                                            <img className="rounded-t-xl w-100 h-[110px]" src={image} alt="" />
                                            <p className="m-0 pl-1 text-center text-black">userName</p>
                                        </div>
                                        <div className="flex flex-col bg-white shadow-xl rounded-xl  w-[30%]">
                                            <img className="rounded-t-xl w-100 h-[110px]" src={image} alt="" />
                                            <p className="m-0 pl-1 text-center text-black">userName</p>
                                        </div>
                                        <div className="flex flex-col bg-white shadow-xl rounded-xl  w-[30%]">
                                            <img className="rounded-t-xl w-100 h-[110px]" src={image} alt="" />
                                            <p className="m-0 pl-1 text-center text-black">userName</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-content-center" >
                                        <button>view all friends</button>
                                    </div>
                                </div>
                            </div>
                            {/* divs droite */}
                            <div className="w-100 rounded-xl  h-screen overflow-y-scroll  profilScroll ">
                                {/* ****************add Posts************ */}
                                <div className="w-100 rounded-xl bg-white mb-3 shadow-xl">
                                    <div className=" flex pt-4 px-5 w-100   items-center ">
                                        {/* <img src="" alt="" /> */}
                                        <div className="flex items-center pb-2 pl-2">
                                            <img className="rounded-full mt h-[50px] w-[50px]" src={image} alt="" />
                                        </div >
                                        <div className="w-[100%]">
                                            <form className="w-[100%]" action="">
                                                <Button onPress={modal3.onOpen} className="ml-5 p-2 bg-white-100 rounded-xl text-xl w-[100%]  outline-none  "><input onChange={modal3.onOpen} className="w-100 bg-transparent placeholder-neutral-300 text-red-400 border-0  focus:outline-none" type="text" placeholder="Write somthing ..." /></Button>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="text-gray-600" />
                                    <div className="flex pl-8 pt-1  text-gray-600 py-3">
                                        <Button onPress={modal3.onOpen} className="ml-5 p-2 bg-white-100 rounded-xl text-xl hover:bg-[--light] mt-3">Status</Button>
                                        <Button onPress={modal2.onOpen} className="ml-5 p-2 bg-white-100 rounded-xl text-xl hover:bg-[--light] mt-3">Video</Button>
                                        <Button onPress={modal1.onOpen} className="ml-5 p-2 rounded-xl bg-white-100  text-xl hover:bg-[--light] mt-3" >Photo</Button>
                                        {/* photo */}
                                        <Modal isOpen={modal1.isOpen} onOpenChange={modal1.onOpenChange} >
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1 pb-0">Add Post : Photo</ModalHeader>
                                                        <hr className="my-2" />
                                                        <ModalBody >
                                                            <div className="0 flex justify-center">
                                                                <form className="flex flex-col" action="">
                                                                    <textarea onChange={(e) => { setDescriptionImg(e.target.value) }} value={descriptionImg} className="mb-4  h-15 rounded-lg" placeholder="Description ..." type="text" />
                                                                    <label htmlFor="dropzone-fileImg">
                                                                        <div className="w-[100%] flex flex-col items-center  border-2 ">
                                                                            <p>Picture</p>
                                                                            <AiOutlinePicture className="text-9xl mx-16 opacity-10" />
                                                                            <img className='h-[100%] w-[100%]' src={inputImg} alt="" />
                                                                        </div>
                                                                    </label>
                                                                    <input type="file" id="dropzone-fileImg" className="hidden" onChange={getFileImg} accept="image/*" />
                                                                </form>
                                                            </div>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button onClick={CloseImg} color="danger" variant="light" onPress={modal1.onClose}>
                                                                Close
                                                            </Button>
                                                            <Button onClick={DoneImg} color="primary" onPress={modal1.onClose}>
                                                                Done
                                                            </Button>
                                                        </ModalFooter>
                                                    </>
                                                )}
                                            </ModalContent>
                                        </Modal>
                                        {/* finphoto */}
                                        {/* video */}
                                        <Modal isOpen={modal2.isOpen} onOpenChange={modal2.onOpenChange}>
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1 pb-0">Add Post : Video</ModalHeader>
                                                        <hr className="my-2" />
                                                        <ModalBody>
                                                            <div className=" flex  justify-center ">
                                                                <form action="">
                                                                    <div className=" flex flex-col items-center justify-center ">
                                                                        <textarea onChange={(e) => { setDescriptionVd(e.target.value) }} value={descriptionVd} className="mb-4 h-15 w-[100%] rounded-lg  rounded-xl" placeholder="Description ..." type="text" />
                                                                        <label htmlFor="dropzone-fileVd">
                                                                            <div className="w-[100%] flex flex-col items-center  border-2 ">
                                                                                <p>Video</p>
                                                                                <PiVideoDuotone className="text-9xl mx-16 opacity-10" />
                                                                                <video  controls muted src={inputVd}  ></video>
                                                                            </div>
                                                                        </label>
                                                                        <input type="file" id="dropzone-fileVd" className="hidden" onChange={getFileVd} accept="video/*" />
                                                                    </div>

                                                                </form>
                                                            </div>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button onClick={CloseVd} color="danger" variant="light" onPress={modal2.onClose}>
                                                                Close
                                                            </Button>
                                                            <Button onClick={DoneVd} color="primary" onPress={modal2.onClose}>
                                                                Done
                                                            </Button>
                                                        </ModalFooter>
                                                    </>
                                                )}
                                            </ModalContent>
                                        </Modal>
                                        {/* finvideo */}
                                        {/* Status */}
                                        <Modal isOpen={modal3.isOpen} onOpenChange={modal3.onOpenChange}>
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1 pb-0">Add Post : status</ModalHeader>
                                                        <hr className="my-2" />
                                                        <ModalBody>
                                                            <div className=" ">
                                                                <form className="flex flex-col" action="">
                                                                    <textarea onChange={(e) => { setInputStatus(e.target.value) }} value={inputStatus} className=" h-40 rounded-lg w-100" placeholder="Description ..." type="text" />

                                                                    

                                                                </form>
                                                            </div>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button onClick={CloseStatus} color="danger" variant="light" onPress={modal3.onClose}>
                                                                Close
                                                            </Button>
                                                            <Button onClick={DoneStatus} color="primary" onPress={modal3.onClose}>
                                                                Done
                                                            </Button>
                                                        </ModalFooter>
                                                    </>
                                                )}
                                            </ModalContent>
                                        </Modal>
                                        {/* finStatus */}
                                    </div>

                                    {/* <div className="flex justify-between py-3 pl-4">
                                        <div className=" flex justify-between pl-2 text-gray-600 items-center">
                                            <div className="flex items-center p-2 ml-6 rounded-xl text-xl hover:bg-[--light]">
                                                <FaUser className=" text-gray-600 " />
                                                <p className="m-0     pl-2"> People</p>
                                            </div>
                                            <div className="flex items-center p-2 rounded-xl text-xl hover:bg-[--light]">
                                                <FaLocationDot className=" text-gray-600" />
                                                <p className="m-0  ml-2 pl-2">Check in</p>
                                            </div>
                                            <div className="flex items-center p-2 rounded-xl text-xl hover:bg-[--light]">
                                                <MdEmojiEmotions className="text-xl text-yellow-500 " />
                                                <p className="m-0 ml-2 pl-2">Mood</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* ****************Posts************ */}
                                {
                                    dbPost.map((element, index) =>
                                        <>
                                            <div key={index} className='bg-[--light]  max-[430px]:w-[100vw]    w-[100%] flex flex-wrap justify-center gap-5  rounded-xl shadow-xl mb-3'>
                                                {/* max-[430px]:ms-0 ms-[20vw] */}
                                                <div className='max-[430px]:w-[90%] w-[100%] h-[100%] rounded-md  bg-white px-[6%] py-3 flex flex-col shadow-xl'>
                                                    <div className='flex align-items-center  gap-2  w-[100%] h-[10] '>
                                                        <div className='flex align-items-center gap-2 w-[80%] max-h-[10vh]'>
                                                            <img className='post-profile rounded-full  h-[55px] w-[55px]' src={dbUser[element.userId].picture} alt="." />
                                                            <div>
                                                                <h5 className='text-3xl'>{dbUser[element.userId].username}</h5>
                                                                <p ><span className='ps-2 text-sm m-0'>{element.postDate}</span></p>
                                                            </div>
                                                        </div>
                                                        <div className='z-0'>
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
                                                    <div className='min-h-[70%] w-100 '>
                                                        <p className=' font-medium ps-2 pt-3 pb-2'>{element.content}</p>

                                                        {
                                                            Posts(element)
                                                        }

                                                    </div>
                                                    <div className='flex px-4 pt-3'>
                                                        <div className='flex gap-4 '>
                                                            <div title="Like" className="heart-container ">
                                                                <input id="Give-It-An-Id" className="z-1 checkbox" type="checkbox" />
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
                                                            </div>
                                                            <div className='comment'>
                                                                <FaRegComment className='com text-3xl mt-[2px] text-[--teal]' />
                                                            </div>
                                                            <div className='spin'>
                                                                <FaRetweet className='retweet text-3xl text-[--teal]' />
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
                                            </div>
                                        </>
                                    )
                                }
                                {/* *************fin posts************** */}

                            </div>
                        </div>
                    </div>
                </section>
            </main>










        </>
    );
};

