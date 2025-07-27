import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#9A52FF] to-[#8447FF] text-white py-20 px-5 lg:px-20 lg:h-[90vh]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Discover the Best Deals <br />
            <span className="text-[#FFD700]">Shop Smart, Shop Easy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Browse through a wide range of products with unbeatable prices. 
            Elevate your shopping experience today!
          </p>
          <div className="mt-6">
            <Link
              to="/allproduct"
              className="bg-[#FFD700] hover:bg-white hover:text-[#9A52FF] text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-10 lg:mb-0 flex justify-center items-center">
          <img
            src="/images/home.jpg"
            alt="Shopping Hero"
            className="w-3/4 max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
