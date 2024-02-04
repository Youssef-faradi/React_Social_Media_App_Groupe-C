import React from "react";
import { FaApple , FaGoogle, FaFacebook} from "react-icons/fa";


function SignUpForm() {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();

        const { name, email, password } = state;
        alert(
            `You are sign up with name: ${name} email: ${email} and password: ${password}`
        );

        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit}>
                <div className="social-container">
                    <a href="." className="social">
                        <FaApple  className="text-[#08D9D6]"/>
                    </a>
                    <a href="." className="social">
                        <FaGoogle className="text-[#08D9D6]"/>
                    </a>
                    <a href="." className="social">
                        <FaFacebook className="text-[#08D9D6]"/>
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="rounded-lg focus:outline-none"

                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="rounded-lg focus:outline-none"

                />
            <button className="log mt-2 hover:bg-black">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
