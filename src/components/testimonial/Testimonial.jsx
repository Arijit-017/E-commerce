const Testimonial = () => {
    return (
        <section className="mt-10 bg-gradient-to-br from-[#F5F0FF] to-[#E8DAFF] py-10 px-5 lg:px-20">
            <div className="container mx-auto px-6 lg:px-16">
                
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#8447FF] tracking-tight">Testimonials</h2>
                    <p className="mt-2 text-lg text-gray-700">What our <span className="text-[#FF52A2]">customers</span> are saying</p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    
                    {/* Testimonial 1 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                        <p className="text-gray-600">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.</p>
                        <span className="inline-block h-1 w-10 rounded bg-[#FF52A2] mt-6 mb-4"></span>
                        <h3 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h3>
                        <p className="text-gray-500">Senior Product Designer</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                        <p className="text-gray-600">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.</p>
                        <span className="inline-block h-1 w-10 rounded bg-[#FF52A2] mt-6 mb-4"></span>
                        <h3 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h3>
                        <p className="text-gray-500">UI Developer</p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                        <p className="text-gray-600">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.</p>
                        <span className="inline-block h-1 w-10 rounded bg-[#FF52A2] mt-6 mb-4"></span>
                        <h3 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ</h3>
                        <p className="text-gray-500">CTO</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;