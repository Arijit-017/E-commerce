import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user) )
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/user-dashboard');
                    }else{
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {loading && <Loader />}
            {/* Login Form */}
            <div className="bg-white px-6 lg:px-10 py-8 border border-gray-300 rounded-xl shadow-lg w-[400px]">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-center text-3xl font-bold text-[#8447ff]">
                        Login
                    </h2>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className="w-full bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-[#9a52ff] placeholder-gray-400"
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className="w-full bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-[#9a52ff] placeholder-gray-400"
                    />
                </div>

                {/* Login Button */}
                <div className="mt-6">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className="bg-[#9a52ff] hover:bg-[#8447ff] w-full text-white py-2 font-bold rounded-lg shadow-md transition-all"
                    >
                        Login
                    </button>
                </div>

                {/* Redirect to Signup */}
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link className="text-[#9a52ff] font-bold hover:underline" to={'/signup'}>
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
