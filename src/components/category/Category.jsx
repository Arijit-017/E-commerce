import { useNavigate } from "react-router-dom";

const category = [
    { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
    { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
    { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
    { image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png', name: 'shoes' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png', name: 'books' }
];

const Category = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white py-10 px-5 lg:px-20 shadow-lg border-t border-[#9A52FF]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#8447FF] mb-8">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 justify-center items-center">
                    {category.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center bg-gradient-to-br from-[#9A52FF]/10 to-[#8447FF]/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full"
                        >
                            <div onClick={() => navigate(`/category/${item.name}`)} className="w-20 h-20 bg-gradient-to-r from-[#9A52FF] to-[#8447FF] rounded-full flex items-center justify-center p-3 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-12 h-12" />
                            </div>
                            <h3 className="mt-1 text-lg font-semibold text-[#8447FF]">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
