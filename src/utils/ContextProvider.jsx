import React, { createContext, useState } from "react"
import productTest from '../assets/images/1.1_1_.jpg';
import zakaria from "../assets/images/Picsart_22-12-18_00-49-44-927.png";
import image from "../assets/images/profil.jpg"
import image1 from "../assets/images/homme1.avif"


export const MyContext = createContext()


export const MyProvider = ({ children }) => {


    // ^ Database of users :

    const [dbUser, setDbUser] = useState([
        
    ])

    // ^ Database of friendShip :

    const [dbFriendship, setDbFriendship] = useState([
        {
            friendshipId: 0,
            userId1: "user N-userId n (number)",
            userId2: "user N-userId n* (number)",
            friendshipStatus: " pending, accepted, declined" // pour le moment aucune signification pour cette option 'friendshipStatus'(voir monsieur zakaria) 
        }
    ])

    // ^ Database of Post :

    const [dbPost, setDbPost] = useState([
        
    ])

    // ^ Database of Coments :

    const [dbComments, setDbComments] = useState([
        {
            commentId: 0,
            userId: "=dbUserId 1 = dbPostId 1 (number)",
            postId: "(number)",
            commentContent: "descreption comment 1",
            commentDate: "16/06/2024"
        }
    ])

    // ^ Database of Likes :

    const [dbLikes, setDbLikes] = useState([
        {
            likeId: 0,
            userId: "=dbUserId 1 = dbPostId 1 = dbCommentId 1 (number)",
            postId: "= dbPostId 1 (Foreign Key referencing Post table)",
            likeDate: "kanfakar ach ghatkkon" // (pas signification pour le moment)
        }
    ])

    // ^^ Database of Market :

    const [products, setProducts] = useState([

        {
            image: productTest,
            title: 'Jean ZARA',
            price: 100500 ,
            description : 'good very cheap ggjhev lqsur nhdjdb' 
        },

    ])


    return (
        <>

            <MyContext.Provider value={[dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes , products ,setProducts]} >
                {children}
            </MyContext.Provider>

        </>
    )

}