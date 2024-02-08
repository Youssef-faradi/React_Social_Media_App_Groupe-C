import React, { useContext, useState } from 'react';
import productTest from '../../../assets/images/S0-modele--peugeot-205 (1).jpg';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";



export const FirstSectionProduct = () => {


    const { id } = useParams();

    const navigate = useNavigate();


    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes, products, setProducts] = useContext(MyContext);

    const selectedItem = products.find(element => element.title == id);

    console.log(id);
    console.log(selectedItem);

    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing((prevState) => !prevState);
    };

    return (
        <>

            <section class="text-gray-600 body-font p-5 ">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center shadow rounded-lg ">


                    <div
                        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <div className='h-[8vh] w-52 bg-black mb-5'>
                            <h1>@ : {dbUser[0].username} </h1>
                        </div>

                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out :
                            <br class="hidden lg:inline-block" />{selectedItem.title}
                        </h1>

                        <p class="mb-8 leading-relaxed"> description : {selectedItem.description}</p>

                        <h1>Price : {selectedItem.price}</h1>
                        <div class="flex justify-center">

                            <button className='rounded-full text-6xl' onClick={handleClick} style={{  height: isFollowing ? '10vh ' : '10vh', width: isFollowing ? 'fit-content' : 'fit-content', backgroundColor: isFollowing ? '#2EB82E' : '#ffffff', color: isFollowing ? '#fff' : '#3399FF', borderColor: isFollowing ? '#2EB82E' : '#3399FF', transition: 'width 0.6s ease-in-out, background-color 1s ease-in-out', }}     >       {isFollowing ? <MdBookmarkAdded /> : <MdBookmarkAdd /> }     </button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={selectedItem.image} />
                    </div>
                </div>
            </section>

        </>
    );
};



