import './section1.sass';

import React, { useContext, useState } from 'react';
import { TbAlertTriangleFilled } from "react-icons/tb";

import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { element } from 'prop-types';
import { IconButton } from '@material-tailwind/react';
import { MdAddShoppingCart } from "react-icons/md";
import { Checkbox, Rating } from 'flowbite-react';

export const FirstSectionMarket = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [filteredFilms, setFilteredFilms] = useState(products);
    const [openModal, setOpenModal] = useState(false);

    // const filterByName = (ev) => {
    //     let newProducts = products.filter(element => element.title.toLowerCase().includes(ev.target.value.toLowerCase()));
    //     setFilteredFilms(newProducts);
    // };

    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);

    const [image, setImage] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('')




    const addProduct = (ev) => {
        if (image && name && price && description && categories) {
            const newProduct = {
                image: image,
                title: name,
                price: price,
                categorie: categories,
                description: description,
            }
            products.unshift(newProduct);
            handleClose();

            setName('');
            setPrice('');
            setCategories('');
            setDescription('');
            setCategories('');
        } else {

        }

    }



    const handlImgChange = (e) => {
        const selectImage = URL.createObjectURL(e.target.files[0])
        setImage(selectImage)
        console.log(selectImage);
    }

    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes, products, setProducts] = useContext(MyContext);

    const [filteredProduct, setFiteredProduct] = useState(products)




    let filterBySelect = (e) => {
        if (e.target.value != "ALL") {

            let filteredProductNew = products.filter(element => element.categorie == (e.target.value));
            setFiteredProduct(filteredProductNew)

        } else {
            setFiteredProduct(products)

        }
    }





    console.log(products);
    return (
        <>

            <body className='h-fit max-[430px]:h-fit bg-white'>
                <div className='bg-white h-14 flex justify-center items-center border-bottom'>
                    <h4>Product List</h4>
                </div>
                <div className=' h-16 flex items-center justify-between px-5  '>

                    <button className='rounded-xl bg-[--green] w-28 py-1 shadow' onClick={() => {
                        handleShow();
                    }}>Add An Item</button>
                    <Modal show={openModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD AN ITEM</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className=' flex justify-center'>

                            <form className="form1 ">
                                <p className="title1 text-center text-lg"> Add Your New Item</p>

                                <div className="flex1 flex flex-col gap-3">

                                    <div className='flex justify-between'>
                                        <div className='flex flex-col  max-[430px]: w-44 '>
                                            <label>
                                                Product Name :
                                            </label>
                                            <input value={name} onChange={((ev) => setName(ev.target.value))} placeholder="Product Name" type="text" className="ps-3 input1 border rounded-lg h-10" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label>
                                                Product Price :
                                            </label>
                                            <input value={price} onChange={((ev) => setPrice(ev.target.value))} placeholder=" Product price" type="number" className="ps-3 input1 border rounded-lg h-10 " />
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label>
                                            Product Categorie :
                                        </label>
                                        <input placeholder=' Vehicules / Cloths / Electronic Devices ' value={categories} onChange={((ev) => setCategories(ev.target.value))} type="text" className="ps-3 input1 border rounded-lg h-10 " />
                                    </div>

                                    <label>More About :</label>
                                    <textarea placeholder='Description / categorie / condition ...'
                                        value={description} onChange={((ev) => setDescription(ev.target.value))} name="" id="" cols="30" rows="10" className="ps-3 sm:w-560 rounded-lg border-gray-300 txt border "></textarea>

                                    <input id="picture" type="file" onChange={handlImgChange} class="flex h-10 items-center justify-center  w-full rounded-md border border-input bg-white px-3  text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />

                                </div>

                                <p className="message1 text-center text-sm text-red-400 flex items-center justify-evenly pt-3"> <TbAlertTriangleFilled /> Before creating your new product make sure to fill all the inputs </p>

                            </form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => {

                                addProduct();
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className='flex '>
                        <p className='m-0 '>Sort by :</p>

                        <select name="" id="" className='border-none bg-transparent ps-2 ' onChange={(e) => filterBySelect(e)}>

                            <option value="ALL">ALL</option>
                            <option value="Cloths">Cloths</option>
                            <option value="Vehicules">Vehicules</option>
                            <option value="Electronic Devices">Electronic Devices</option>
                        </select>
                    </div>
                </div>

                <div className='flex max-[430px]:flex-col  flex-wrap gap-5 justify-center items-center py-4'>

                    {
                        filteredProduct.map((element, index) =>
                            <div onClick={() => navigate(`/product/${element.title}`)} key={index} className=' h-80 w-[60%] lg:w-[15%] p-1 text-white  shadow rounded-xl text-center'>

                                <div className=' h-[70%] rounded-2xl flex justify-center items-center '>
                                    <img className=' h-[90%] w-[90%] ' src={element.image} alt="" />
                                </div>

                                <h3 className='bg-[--green] rounded-full'>{element.title}</h3>
                                <h5 className=' bg-[--green] rounded-full opacity-70 text-black flex justify-evenly ps-2 pe-2'>{element.price} <span>DH</span> </h5>
                            </div>
                        )
                    }
                </div>

            </body>















        </>
    );
};
