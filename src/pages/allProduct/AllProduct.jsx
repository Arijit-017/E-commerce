import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const AllProduct = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;
  return (
    <Layout>
      <div className="py-8 bg-[#f8f5ff]">
        {loading && <Loader />}
        <div>
          <h1 className="text-center mb-5 text-3xl font-bold text-[#8447ff]">
            All Products
          </h1>
        </div>
        {/* Main */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {getAllProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;

                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-[#b388eb] rounded-xl overflow-hidden shadow-md cursor-pointer bg-white hover:shadow-lg transition-all duration-300">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-60 h-96 w-full object-fill"
                        src={productImageUrl}
                        alt="product"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs font-medium text-[#9a52ff] mb-1">
                          SwiftBuy
                        </h2>
                        <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-md font-medium text-[#9a52ff] mb-3">
                          ₹{price}
                        </h1>

                        <div className="flex justify-center">
                          <button className="bg-[#8447ff] hover:bg-[#9a52ff] w-full text-white py-2 rounded-lg font-bold transition-all duration-300">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllProduct;
