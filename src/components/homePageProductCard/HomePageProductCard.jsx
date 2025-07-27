import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
      // console.log(item)
      dispatch(addToCart(item));
      toast.success("Add to cart")
  }

  const deleteCart = (item) => {
      dispatch(deleteFromCart(item));
      toast.success("Delete cart")
  }

  // console.log(cartItems)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  
  return (
    <div className="mt-10 bg-gradient-to-br from-[#F5F0FF] to-[#E8DAFF] py-10 px-5 lg:px-20">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#8447FF]">
          Bestselling Products
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getAllProduct.slice(0, 8).map((item, index) => {
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

                    <button onClick={() => addCart(item)} className="mt-3 w-full bg-[#8447FF] hover:bg-[#9A52FF] text-white py-2 rounded-lg font-bold transition-all duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
