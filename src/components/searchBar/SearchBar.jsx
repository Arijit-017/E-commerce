import { useState } from "react";

// Search Data
const searchData = [
  { name: "Fashion", image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg" },
  { name: "Shirt", image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg" },
  { name: "Jacket", image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg" },
  { name: "Mobile", image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg" },
  { name: "Laptop", image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg" },
  { name: "Home", image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg" },
  { name: "Book", image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg" },
];

const SearchBar = () => {
  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#B388EB] placeholder-white text-white rounded-lg px-4 py-2 w-full focus:outline-none transition-all duration-300 shadow-lg"
        />
      </div>

      {/* Search Drop-down */}
      {search && (
        <div className="absolute bg-white shadow-lg w-full mt-2 rounded-lg py-2 max-h-60 overflow-y-auto z-50">
          {filterSearchData.length > 0 ? (
            filterSearchData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 hover:bg-[#9A52FF] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <img className="w-10 h-10 rounded-full object-cover" src={item.image} alt={item.name} />
                <span className="font-medium">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-4">
              <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="No results" />
              <p className="text-gray-500 text-sm mt-2">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
