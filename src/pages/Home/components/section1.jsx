import { useContext } from "react"
import { MyContext } from "../../../utils/ContextProvider"


export const FirstSectionHome = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship ,dbPost, setDbPost ,dbComments, setDbComments ,dbLikes, setDbLikes] = useContext(MyContext)
    return (
        <>
     

        </>
    )
}