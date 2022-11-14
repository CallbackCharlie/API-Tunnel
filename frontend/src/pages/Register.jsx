import { useEffect, useState } from "react";
import { Button } from "../components";

const Register = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState({});

    useEffect(() => {
        console.log(username);
        console.log(error.error);

        if (username ? username.length < 5 : 0) {
            setError({
                name: "username",
                error: "Your username must be at least 5 characters long."
            });
        } else {
            setError({});
            if (!(/^[a-z0-9]+$/i.test(username)) && !(username.length < 1)) {
                setError({
                    name: "username",
                    error: "Your username must only contain alphanumeric characters."
                });
            } else setError({});
        }
    }, [username]);

    return (
        <div className="container mx-auto p-8 flex">
            <div className="max-w-md w-full mx-auto">
                <h1 className="text-4xl text-center mb-12
                font-poppins">
                    API Tunnel
                </h1>
                <div className="bg-black-gradient rounded-lg
                overflow-hidden shadow-2x1">
                    <div className="p-8">
                        <form method="POST" action="#">
                            <div className="mb-5">
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                                    Username
                                </label>
                                <div>{[error.name === "username" ? error.error : ""]}</div>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" className="rounded-2xl block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    E-Mail
                                </label>
                                <input type="email" name="email" className="rounded-2xl block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input type="text" name="password" className="rounded-2xl block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"></input>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">
                                    Confirm Password
                                </label>
                                <input type="text" name="confirm_username" className="rounded-2xl block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"></input>
                            </div>
                            <Button value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;