import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: "fashion" },
    { name: "shirt" },
    { name: "jacket" },
    { name: "mobile" },
    { name: "laptop" },
    { name: "shoes" },
    { name: "home" },
    { name: "books" }
];

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    });

    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantity: product?.quantity,
                time: product?.time,
                date: product?.date
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, "products", id), product);
            toast.success("Product Updated successfully");
            getAllProductFunction();
            setLoading(false);
            navigate("/admin-dashboard");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getSingleProductFunction();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-[#f5f3ff]">
            {loading && <Loader />}
            <div className="bg-white px-8 py-6 border border-[#b388eb] rounded-xl shadow-md w-[400px]">
                <h2 className="text-center text-2xl font-bold text-[#9a52ff] mb-5">
                    Update Product
                </h2>

                {/* Input: Title */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Product Title"
                        className="bg-[#f5f3ff] border text-[#9a52ff] border-[#b388eb] px-2 py-2 w-full rounded-md outline-none placeholder-[#b388eb]"
                    />
                </div>

                {/* Input: Price */}
                <div className="mb-3">
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product Price"
                        className="bg-[#f5f3ff] border text-[#9a52ff] border-[#b388eb] px-2 py-2 w-full rounded-md outline-none placeholder-[#b388eb]"
                    />
                </div>

                {/* Input: Image URL */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="productImageUrl"
                        value={product.productImageUrl}
                        onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                        placeholder="Product Image URL"
                        className="bg-[#f5f3ff] border text-[#9a52ff] border-[#b388eb] px-2 py-2 w-full rounded-md outline-none placeholder-[#b388eb]"
                    />
                </div>

                {/* Input: Category */}
                <div className="mb-3">
                    <select
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        className="w-full px-2 py-2 text-[#9a52ff] bg-[#f5f3ff] border border-[#b388eb] rounded-md outline-none"
                    >
                        <option disabled>Select Product Category</option>
                        {categoryList.map((value, index) => (
                            <option key={index} value={value.name} className="first-letter:uppercase">
                                {value.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Input: Description */}
                <div className="mb-3">
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Product Description"
                        rows="5"
                        className="w-full px-2 py-1 text-[#9a52ff] bg-[#f5f3ff] border border-[#b388eb] rounded-md outline-none placeholder-[#b388eb]"
                    ></textarea>
                </div>

                {/* Update Product Button */}
                <div className="mb-3">
                    <button
                        onClick={updateProduct}
                        type="button"
                        className="bg-[#9a52ff] hover:bg-[#8447ff] w-full text-white text-center py-2 font-bold rounded-md transition-all"
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
