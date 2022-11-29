import { useEffect, useState } from "react";

import styles from "../style";
import { Button, Navbar, Hero } from "../components";
import { register } from "../assets"; 

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [error, setError] = useState({});

    useEffect(() => {
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

    useEffect(() => {
        if (password ? password.length < 6 : 0) {
            setError({
                name: "password",
                error: "Your password must be at least 6 characters long."
            });
        } else setError({});
    }, [password]);

    useEffect(() => {
        console.log(email, email.length);
        if (email.length === 0) {
            setError({});
        } else {
            if (/^[^@]+@[^@]+\.[^@\.]{2,}$/.test(email)) {
                setError({
                    name: "email",
                    error: "The email you provided is not valid."
                });
            } else setError({});
        };
    }, [email]);

    return (
        <>
        <div className="bg-primary w-full overflow-hidden
        font-poppins">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div clasName="relative h-[200px]">
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section id="register" className={`flex md:flex-row flex-col
                            sm:py-18 py-6`}>
                            <div className={`flex-1 flex ${styles.flexCenter} hidden lg:block mr-24`}>
                                <img
                                    src={register}
                                    alt="register"
                                    className="w-[100%] h-[100%] pl-12 
                                    relative pt-[42px] lg:pt-0 "
                                    data-aos="fade-right"
                                />
                            </div>
                            
                            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6
                                object-fill content-center w-full py-6
                                justify-between items-center navbar`}>
                                <form method="POST" action="#">
                                    <div className="w-full" data-aos="fade-left">
                                        <div className="mb-5 sm:w-[60%]">
                                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                                                Username
                                            </label>
                                            <div className="w-[500px]">
                                                <span className="text-white">{[error.name === "username" ? error.error : ""]}</span>
                                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" className="form-control rounded-2xl block w-[550px] p-3 bg-transparent border text-white focus:outline-none"></input>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                                E-Mail
                                            </label>
                                            <div className="w-[500px]">
                                            <span className="text-white">{[error.name === "email" ? error.error : ""]}</span>
                                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control rounded-2xl block w-[550px] p-3 bg-transparent border text-white focus:outline-none"></input>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                                Password
                                            </label>
                                            <div className="w-[500px]">
                                                <span className="text-white">{[error.name === "password" ? error.error : ""]}</span>
                                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" className="form-control rounded-2xl block w-[550px] p-3 bg-transparent border text-white focus:outline-none"></input>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">
                                                Confirm Password
                                            </label>
                                            <div className="w-[500px]">
                                                <input type="password" name="confirm_password" className="form-control rounded-2xl block w-[550px] p-3 bg-transparent border text-white focus:outline-none"></input>
                                            </div>
                                        </div>
                                        <Button value="Register" styles="w-full" />
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;