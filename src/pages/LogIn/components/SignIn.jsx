import React, { useContext, useState } from "react";
import { FaApple , FaGoogle, FaFacebook} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../utils/ContextProvider";

function SignInForm() {
    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)

    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState("")

    

    const login = (e) => {
        e.preventDefault()
        let newTab = [...dbUser]
        if (userName && password) {
            let connectedUser = newTab.findIndex((element => element.username == userName && element.password == password))
            console.log(dbUser)
            if (connectedUser != -1 ) {
                
                navigate(`/home/${newTab[connectedUser].userName}`)
                console.log(newTab[connectedUser]);
                setUserName("")
                setPassword("")

                let usr = newTab.splice(connectedUser,1)
                newTab.unshift(usr[0])
                // setDbUser(newTab)
                console.log(newTab)
                
            } else {
                alert("User does not exist in database")
            }
        }
    }



    return (
        <div className="form-container sign-in-container">
            <form>
                <div className="social-container">
                    <a href="." className="social">
                        <FaApple className="text-[#08D9D6]"/>
                    </a>
                    <a href="." className="social">
                        <FaGoogle className="text-[#08D9D6]"/>
                    </a>
                    <a href="." className="social">
                        <FaFacebook className="text-[#08D9D6]"/>
                    </a>
                </div>
                <span>or use your account</span>
                <input
                    type="text"
                    placeholder="UserName"
                    name="username"
                    onChange={(e) => { setUserName(e.target.value) }} 
                    value={userName} required 
                    className="rounded-lg focus:outline-none"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }} 
                    value={password} required 
                    className="rounded-lg focus:outline-none"

                />
                <a href=".">Forgot your password?</a>
                <button onClick={(e) => { login(e) }} className="log">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;


