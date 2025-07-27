import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Nike Air Force 1 07 LV8",
        href: "#",
        price: "₹47,199",
        originalPrice: "₹48,900",
        discount: "5% Off",
        color: "Orange",
        size: "8 UK",
        imageSrc:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    },
    {
        id: 2,
        name: "Nike Blazer Low 77 SE",
        href: "#",
        price: "₹1,549",
        originalPrice: "₹2,499",
        discount: "38% off",
        color: "White",
        size: "8 UK",
        imageSrc:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
    },
    {
        id: 3,
        name: "Nike Air Max 90",
        href: "#",
        price: "₹2,219",
        originalPrice: "₹9,999",
        discount: "78% off",
        color: "Black",
        imageSrc:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
    },
];

const CartPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        {/* Cart Items */}
                        <section className="rounded-lg bg-white lg:col-span-8">
                            <ul className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6 sm:py-6 shadow-md rounded-lg p-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.name}
                                                className="h-24 w-24 sm:h-38 sm:w-38 rounded-md object-contain object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <h3 className="text-sm">
                                                        <a
                                                            href={product.href}
                                                            className="font-semibold text-black"
                                                        >
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                    <div className="mt-1 flex text-sm text-gray-500">
                                                        <p>{product.color}</p>
                                                        {product.size && (
                                                            <p className="ml-4 border-l border-gray-200 pl-4">
                                                                {product.size}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="mt-1 flex items-end">
                                                        <p className="text-xs font-medium text-gray-500 line-through">
                                                            {product.originalPrice}
                                                        </p>
                                                        <p className="text-sm font-medium text-gray-900 ml-2">
                                                            {product.price}
                                                        </p>
                                                        <p className="text-sm font-medium text-green-500 ml-2">
                                                            {product.discount}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Quantity and Remove */}
                                        <div className="ml-6 flex text-sm">
                                            <div className="flex items-center space-x-2">
                                                <button className="h-7 w-7 text-lg font-bold text-gray-600 border rounded">
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    className="w-9 h-7 text-center border rounded"
                                                    defaultValue={1}
                                                />
                                                <button className="h-7 w-7 text-lg font-bold text-gray-600 border rounded">
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                className="ml-6 flex items-center space-x-1 text-red-500 hover:text-red-700"
                                            >
                                                <Trash size={14} />
                                                <span className="text-xs font-medium">Remove</span>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order Summary */}
                        <section className="mt-16 rounded-md bg-white border border-gray-400 lg:col-span-4 lg:mt-0 lg:p-0 shadow-lg">
                            <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                                Price Details
                            </h2>
                            <div className="px-4 py-4">
                                <dl className="space-y-2">
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-800">Price (3 items)</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-800">Discount</dt>
                                        <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex justify-between border-t pt-3">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                                    </div>
                                </dl>
                                {/* Buttons */}
                                <div className="mt-6 flex flex-col gap-3">
                                    <button className="w-full px-4 py-3 text-white bg-[#9a52ff] hover:bg-[#8447ff] rounded-xl shadow-md">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
