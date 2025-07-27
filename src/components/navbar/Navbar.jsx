import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('users'));

    // Logout Function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("users"); // Remove user data from localStorage
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    // Navigation List
    const navList = (
        <ul className="flex space-x-6 text-white font-medium text-md px-5">
            <li className="hover:text-[#FFD700] transition-all duration-300">
                <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FFD700] transition-all duration-300">
                <Link to="/allproduct">All Products</Link>
            </li>

            {/* Signup & Login */}
            {!user && (
                <>
                    <li className="hover:text-[#FFD700] transition-all duration-300">
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className="hover:text-[#FFD700] transition-all duration-300">
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}

            {/* User Dashboard */}
            {user?.role === "user" && (
                <li className="hover:text-[#FFD700] transition-all duration-300">
                    <Link to="/user-dashboard">{user.name}</Link>
                </li>
            )}

            {/* Admin Dashboard */}
            {user?.role === "admin" && (
                <li className="hover:text-[#FFD700] transition-all duration-300">
                    <Link to="/admin-dashboard">Admin</Link>
                </li>
            )}

            {/* Logout */}
            {user && (
                <li
                    className="hover:text-red-400 transition-all duration-300 cursor-pointer"
                    onClick={handleLogout}
                >
                    Logout
                </li>
            )}

            <li className="hover:text-[#FFD700] transition-all duration-300">
                <Link to="/cart">Cart (0)</Link>
            </li>
        </ul>
    );

    return (
        <nav className="font-poppins bg-gradient-to-r from-[#9A52FF] to-[#8447FF] border-b border-white sticky top-0 shadow-md z-50">
            <div className="lg:flex lg:justify-between items-center py-4 lg:px-6">
                {/* Left - Logo */}
                <div className="left">
                    <Link to="/">
                        <h2 className="font-semibold font-serif text-white flex gap-2 items-center">
                            <img src="/images/SwiftBuy_Logo.jpg" alt="Logo" className="w-10 rounded-xl" />
                            SwiftBuy
                        </h2>
                    </Link>
                </div>

                {/* Right - Navigation */}
                <div className="right flex justify-center">{navList}</div>

                {/* Search Bar */}
                <div className="hidden lg:block">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
