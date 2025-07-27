const Track = () => {
    return (
        <section className="mt-10 bg-gradient-to-br from-[#F5F0FF] to-[#E8DAFF] py-10 px-5 lg:px-20">
            <div className="container mx-auto px-6 lg:px-16">
                
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#8447FF] tracking-tight">Explore Our Tracks</h2>
                    <p className="mt-2 text-lg text-gray-700">Choose the best track that suits your interests.</p>
                </div>

                {/* Track Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    
                    {/* Track 1 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="text-[#8447FF] w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Premium T-Shirts</h3>
                        <p className="text-gray-600">Our T-Shirts are 100% made of cotton.</p>
                    </div>

                    {/* Track 2 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="text-[#9A52FF] w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Exclusive Hoodies</h3>
                        <p className="text-gray-600">Soft, warm, and perfect for any season.</p>
                    </div>

                    {/* Track 3 */}
                    <div className="bg-white border border-[#9A52FF]/40 hover:bg-[#E8DAFF] transition-all p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="text-[#FF52A2] w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Trendy Sneakers</h3>
                        <p className="text-gray-600">Style & comfort in every step.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;
