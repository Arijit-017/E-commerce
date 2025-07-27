import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
  { name: "fashion" },
  { name: "shirt" },
  { name: "jacket" },
  { name: "mobile" },
  { name: "laptop" },
  { name: "shoes" },
  { name: "home" },
  { name: "books" },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "" ||
      product.description === ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        {loading && <Loader />}
      {/* Add Product Card */}
      <div className="bg-white px-8 py-6 border border-gray-200 rounded-2xl shadow-lg w-[400px]">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-[#8447ff] mb-5">
          Add Product
        </h2>

        {/* Input - Product Title */}
        <div className="mb-3">
          <input
            type="text"
            value={product.title}
            onChange={(e) => {
              setProduct({
                ...product,
                title: e.target.value,
              });
            }}
            placeholder="Product Title"
            className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#9a52ff]"
          />
        </div>

        {/* Input - Product Price */}
        <div className="mb-3">
          <input
            type="number"
            value={product.price}
            onChange={(e) => {
              setProduct({
                ...product,
                price: e.target.value,
              });
            }}
            placeholder="Product Price"
            className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#9a52ff]"
          />
        </div>

        {/* Input - Product Image URL */}
        <div className="mb-3">
          <input
            type="text"
            value={product.productImageUrl}
            onChange={(e) => {
              setProduct({
                ...product,
                productImageUrl: e.target.value,
              });
            }}
            placeholder="Product Image URL"
            className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#9a52ff]"
          />
        </div>

        {/* Select - Product Category */}
        <div className="mb-3">
          <select
            value={product.category}
            onChange={(e) => {
              setProduct({
                ...product,
                category: e.target.value,
              });
            }}
            className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-[#9a52ff]"
          >
            <option disabled>Select Product Category</option>
            {categoryList.map((value, index) => (
              <option
                className="first-letter:uppercase"
                key={index}
                value={value.name}
              >
                {value.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input - Product Description */}
        <div className="mb-3">
          <textarea
            value={product.description}
            onChange={(e) => {
              setProduct({
                ...product,
                description: e.target.value,
              });
            }}
            placeholder="Product Description"
            rows="4"
            className="w-full bg-gray-100 text-gray-800 border border-gray-300 px-3 py-2 rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#9a52ff]"
          />
        </div>

        {/* Add Product Button */}
        <div className="mb-3">
          <button
            onClick={addProductFunction}
            type="button"
            className="w-full bg-[#9a52ff] hover:bg-[#8447ff] text-white py-2 font-bold rounded-md transition-all duration-300 shadow-md"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
