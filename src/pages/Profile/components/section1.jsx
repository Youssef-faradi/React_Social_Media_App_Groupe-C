import { useContext } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import "./section1.sass"
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import image from '.'

export const Section1Profile = () => {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)

    return (
        <>
        <div className=" h-[fit-content] w-100 flex justify-center pt-5">
            <div className="w-[90%] h-screen bg-gradient-to-r from-purple-500 to-yellow-100 rounded-xl">
                <div>

                </div>

            </div>
            

        </div>

        
        </>
    );
};

