import React from "react";
import { FaApple , FaGoogle, FaFacebook} from "react-icons/fa";

function SignInForm() {
    const [state, setState] = React.useState({
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

        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);

        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
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
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    className="rounded-lg focus:outline-none"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                    className="rounded-lg focus:outline-none"

                />
                <a href=".">Forgot your password?</a>
                <button className="log">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;


