import { useContext } from "react"
import { MyContext } from "../../../utils/ContextProvider"


export const FirstSectionHome = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship ,dbPost, setDbPost ,dbComments, setDbComments ,dbLikes, setDbLikes] = useContext(MyContext)
    return (
        <>
<<<<<<< HEAD
<<<<<<< HEAD
            <h1>Hello World ;{}</h1>
=======
            
>>>>>>> ziko
=======
            <h1>hello world </h1>
>>>>>>> 8acd7ff974fe27d2b2755a435c2a953801a97f35
        </>
    )
}
