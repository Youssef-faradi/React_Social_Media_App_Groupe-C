import React, { useContext, useState } from "react";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../utils/ContextProvider";


function SignUpForm() {

    const [dbUser, setDbUser, dbFriendship, setDbFriendship, dbPost, setDbPost, dbComments, setDbComments, dbLikes, setDbLikes] = useContext(MyContext)

    const [username, setUserName] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();


    const register = (e) => {
        //* to prevent refresh  
        e.preventDefault()
        //* temp array
        let newTab = [...dbUser]

        //* check if ther is a  user  with the same userName

        let userExist = dbUser.findIndex(element => element.username == username)  // if the user already exist  method return the  index of the user / ila l9a lia l user  kayn  kayrje3 l index dyalo  else si non ila la  kayraje3 - 1

        if (username && useremail && password && confirmPassword && confirmPassword == password) {
            if (userExist == -1) {
                const today = new Date();
                let user = {
                    userId: 0,
                    username: username,
                    password: password,
                    email:  useremail,
                    full_name: username,
                    birthdate: "**/**/****",
                    registrationDate: today.toLocaleDateString(),
                    location: "city"
                }
                
                newTab.push(user)
                console.log(newTab);
                setDbUser(newTab)


                setUserName("")
                setUserEmail("")
                setPassword("")
                setConfirmPassword("")
                console.log(newTab);
                // navigate("/")

            } else {
                alert("User already exist ")
            }
        } else {
            alert("All Inputs should be filed")
        }

    }

    const checkConfirm = (e) => {
        setConfirmPassword(e.target.value);
        console.log(confirmed);
        if (e.target.value == password) {
            setConfirmed(!confirmed)
        } else {
            setConfirmed(!confirmed)
        }
    }

    

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        // Validate if the selected file is an image (you can add more validation as needed)
        if (selectedImage && selectedImage.type.startsWith('image/')) {
            setImage(selectedImage);
        } else {
            alert("Please select a valid image file.");
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form >
                <div className="social-container max-[430px]:pt-5">
                    <a href="." className="social">
                        <FaApple className="text-[#08D9D6]" />
                    </a>
                    <a href="." className="social">
                        <FaGoogle className="text-[#08D9D6]" />
                    </a>
                    <a href="." className="social">
                        <FaFacebook className="text-[#08D9D6]" />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={(e) => { setUserName(e.target.value) }} required
                    placeholder="Name"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="email"
                    name="email"
                    value={useremail}
                    onChange={(e) => { setUserEmail(e.target.value) }} required
                    placeholder="Email"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} required
                    placeholder="Password"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => { checkConfirm(e) }} required
                    placeholder="Confirm Password"
                    className="rounded-lg focus:outline-none"

                />
                <button onClick={(e) => { register(e) }} className="log mt-2 hover:bg-[--dark]">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
