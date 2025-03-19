
import logofooter from "../assets/logo/LorenzLogo.png"

function Footer() {
    return (
        <footer className="text-black body-font bg-gray">
            <div className="container px-2 py-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div className="flex flex-col items-start pl-10 py-5">
                        <img src={logofooter} height={100} width={100} />
                        {/* <span className="ml-3 text-xl">ShopCarts</span> */}
                    </div>
                    <p className="mt-2 text-sm text-[#101010] pl-10">
                        Discover timeless fashion with The Loren. Stylish, high-quality, and made for you !
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-50 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-[#101010] tracking-widest text-sm mb-4">
                            PRODUCTS
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    T-Shirts
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Hoodies & Sweatshirts
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Dresses
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Jeans & Trousers
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Jackets & Coats
                                </a>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-[#101010] tracking-widest text-sm mb-4">
                            COMPANY
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-[#101010] tracking-widest text-sm mb-4">
                            SUPPORT
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Shipping Information
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Returns & Exchanges
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Customer Support
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-[#101010] tracking-widest text-sm mb-4">
                            FOLLOW US
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="text-[#101010] hover:text-gray-400" href="#">
                                    Pinterest
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="container mx-auto py-1  flex flex-wrap flex-col sm:flex-row">
                    <p className="text-black text-sm mx-auto sm:text-left">
                        © 2024 ShopMate. All rights reserved. Terms & Conditions | Privacy
                        Policy
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
