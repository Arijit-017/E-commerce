import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const context = useContext(myContext);
  const { getAllProduct, loading } = context;

  const navigate = useNavigate();

  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );

  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filterProduct.length > 0 ? (
                  <>
                    {filterProduct.slice(0, 8).map((item, index) => {
                      const { id, title, price, productImageUrl } = item;
                      return (
                        <div
                          key={index}
                          className="bg-white border border-[#9A52FF]/40 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-3"
                        >
                          <div className="w-full h-[220px] flex justify-center items-center overflow-hidden rounded-lg">
                            <img
                              className="w-full h-full object-cover"
                              onClick={() => navigate(`/productInfo/${id}`)}
                              src={productImageUrl}
                              alt={title}
                            />
                          </div>

                          <div className="mt-3 text-center">
                            <h2 className="text-xs font-medium text-[#9A52FF] uppercase">
                              SwiftBuy
                            </h2>
                            <h1 className="text-md font-semibold text-gray-900 mt-1 leading-tight">
                              {title.length > 25
                                ? `${title.substring(0, 25)}...`
                                : title}
                            </h1>
                            <h1 className="text-md font-semibold text-[#9A52FF] mt-1">
                              ₹{price}
                            </h1>

                            <button className="mt-3 w-full bg-[#8447FF] hover:bg-[#9A52FF] text-white py-2 rounded-lg font-bold transition-all duration-300">
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <div className="flex justify-center">

                      <img
                        className=" mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-black text-xl">
                      No {categoryname} product found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
