import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { FaRegStar } from "react-icons/fa";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");

  const { id } = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <section className="mt-10">
        {loading ? (
          <>
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          </>
        ) : (
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="w-full">
                <img
                  className="w-3/4 rounded-xl shadow-lg"
                  src={product?.productImageUrl}
                  alt="Product"
                />
              </div>

              {/* Product Details */}
              <div className="text-gray-800 dark:text-gray-300">
                <h2 className="text-3xl font-bold mb-4">{product?.title}</h2>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-4">
                  ₹
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                  }).format(product?.price)}
                </p>

                {/* Star Rating */}
                <div className="flex space-x-1 text-[#9a52ff] mb-4">
                  <FaRegStar className="w-6 h-6" />
                  <FaRegStar className="w-6 h-6" />
                  <FaRegStar className="w-6 h-6" />
                  <FaRegStar className="w-6 h-6" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {product?.description}
                </p>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button className="px-6 py-3 w-full text-white bg-[#9a52ff] hover:bg-[#8447ff] rounded-lg shadow-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
