import React, { createContext, useState } from "react"
import zakaria from "../assets/images/Picsart_22-12-18_00-49-44-927.png";
import image from "../assets/images/profil.jpg"
import image1 from "../assets/images/homme1.avif"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    // ^ Database of users :

    const [dbUser, setDbUser] = useState([
        // {
        //     userId: 0, // premier key
        //     username: "Achraf GASBI",
        //     password: "password1",
        //     email: "user1@gmail.com",
        //     full_name: " zakaria",
        //     birthdate: "15/01/2000",
        //     registrationDate: "02/02/2024", 
        //     location : "casablanca",
        //     location : " casablanca" ,
        //     picture :image1
        // },
        // {
        //     userId: 0,
        //     username: "user 2",
        //     password: "password2",
        //     email: "user2@gmail.com",
        //     full_name: " achraf",
        //     birthdate: "17/01/2000",
        //     registrationDate: "15/09/2029", 
        //     location : " casablanca",
        //     location : " casablanca" ,
        //     picture :image
        // },
        // {
        //     userId: 0,
        //     username: "user 3",
        //     password: "password3",
        //     email: "user3@gmail.com",
        //     full_name: " youssef",
        //     birthdate: "20/01/2000",
        //     registrationDate: "19/12/2021", 
        //     location : " casablanca",
        //     picture :image
        // },
        // {
        //     userId: 0,
        //     username: "user 4",
        //     password: "password4",
        //     email: "user4@gmail.com",
        //     full_name: " saad",
        //     birthdate: "20/01/2000",
        //     registrationDate: "19/12/2021", 
        //     location : " casablanca",      
        //     picture :image
        // },
        // {
        //     userId: 0,
        //     username: "user 5",
        //     password: "password5",
        //     email: "user5@gmail.com",
        //     full_name: " amine",
        //     birthdate: "20/01/2000",
        //     registrationDate: "19/12/2021", 
        //     location : " casablanca",
        //     picture : image
        // },

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
        // {
        //     postId: 0,
        //     userId: 0,
        //     content: "descreption du post 1",
        //     postDate: "01/01/2024",
        //     privacySetting: "( public, friends only, private)",
        //     image: image
        // },
        // {
        //     postId: 1,
        //     userId: 0,
        //     content: "descreption du post 2",
        //     postDate: "02/02/2024",
        //     privacySetting: "( public, friends only, private)",
        //     image: image
        // },
        // {
        //     postId: 1,
        //     userId: 0,
        //     content: "descreption du post 3",
        //     postDate: "03/03/2024",
        //     privacySetting: "( public, friends only, private)",
        //     image: image1
        // }
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
            image: "productTest",
            title: 'Jean ZARA',
            price: 100500 
        },
        {
            image: "productTest",
            title: 'JEan kora',
            price: 100500
        },
        {
            image: "productTest",
            title: 'Jean morocco',
            price: 100500
        },
        {
            image: "productTest",
            title: 'Jean youssef',
            price: 100500
        },
        {
            image: "productTest",
            title: 'EEEEE',
            price: 100500
        },
        {
            image: "productTest",
            title: 'FFFFF',
            price: 100500
        },
        {
            image: "productTest",
            title: 'JJJJJ',
            price: 100500
        },
        {
            image: "productTest",
            title: 'HHHHH',
            price: 100500
        },
        {
            image: "productTest",
            title: 'IIIII',
            price: 100500
        }
    ])


    return (
        <>

            <MyContext.Provider value={[dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes , products ,setProducts]} >
                {children}
            </MyContext.Provider>

        </>
    )

}