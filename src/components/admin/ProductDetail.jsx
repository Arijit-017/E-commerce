import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true)
    try {
        await deleteDoc(doc(fireDB, 'products', id))
        toast.success('Product Deleted successfully')
        getAllProductFunction();
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {loading && <Loader />}

        {/* Title */}
        <h1 className="text-xl text-[#9a52ff] font-bold">All Products</h1>

        {/* Add Product Button */}
        <Link to={"/addproduct"}>
          <button className="px-5 py-2 bg-[#9a52ff] hover:bg-[#8447ff] text-white font-bold rounded-md transition-all duration-300 shadow-md">
            Add Product
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-[#b388eb] text-[#8447ff]">
          <tbody>
            {/* Table Header */}
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                S.No.
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Image
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Title
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Price
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Category
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Date
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Action
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-[#b388eb] text-[#8447ff] bg-[#f3e8ff] font-bold">
                Action
              </th>
            </tr>

            {/* Table Row */}
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;
              return (
                <tr key={index} className="text-[#9a52ff] text-center">
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] text-[#8447ff]">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb]">
                    <img className="h-36 " src={productImageUrl} alt="" />
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] first-letter:uppercase">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] first-letter:uppercase">
                    ₹{price}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] first-letter:uppercase">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] first-letter:uppercase">
                    {date}
                  </td>
                  <td
                    onClick={() => {
                      navigate(`/updateproduct/${id}`);
                    }}
                    className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] text-[#22c55e] cursor-pointer hover:text-[#16a34a] text-center"
                  >
                    Edit
                  </td>
                  <td onClick={()=> deleteProduct(id)} className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#b388eb] text-red-500 cursor-pointer hover:text-red-700 text-center">
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
