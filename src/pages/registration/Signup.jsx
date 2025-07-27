/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })
            };

            await addDoc(collection(fireDB, "user"), user);

            setUserSignup({ name: "", email: "", password: "" });

            toast.success("Signup Successfully");
            setLoading(false);
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Signup Failed");
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {loading && <Loader />}

            <div className="bg-white px-10 py-8 border border-gray-200 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-2xl font-bold text-[#8447ff] mb-5">Create an Account</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={userSignup.name}
                        onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                        className="bg-gray-100 border border-gray-300 px-3 py-2 w-full rounded-md focus:ring-2 focus:ring-[#9a52ff] outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={userSignup.email}
                        onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                        className="bg-gray-100 border border-gray-300 px-3 py-2 w-full rounded-md focus:ring-2 focus:ring-[#9a52ff] outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={userSignup.password}
                        onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                        className="bg-gray-100 border border-gray-300 px-3 py-2 w-full rounded-md focus:ring-2 focus:ring-[#9a52ff] outline-none"
                    />
                </div>

                <button
                    type="button"
                    onClick={userSignupFunction}
                    className="mt-5 bg-[#8447ff] hover:bg-[#9a52ff] w-full text-white py-2 font-bold rounded-md transition-all"
                >
                    Signup
                </button>

                <h2 className="text-center text-gray-600 mt-3">
                    Already have an account?
                    <Link to="/login" className="text-[#9a52ff] font-bold ml-1">Login</Link>
                </h2>
            </div>
        </div>
    );
};

export default Signup;
