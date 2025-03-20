import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className=" bg-[#ddc08a] py-7 flex flex-col items-start w-full bg-white gap-y-5 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
            <Link to={"/dashboard"}>
                <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-48 medium-16 xs:w-44 hover:bg-[#c18d5c] rounded hover:text-light transition duration-200 px-4 mt-4">
                    <AiFillProduct style={{ color: "#69443c" }} className="w-6 h-6"/>
                    <span className="text-base text-[#69443c]">Dashboard</span>
                </button>
            </Link>
            <Link to={"/addProduct"}>
                <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#c18d5c] rounded hover:text-light transition duration-200 px-4 mt-4 ">
                    <PiShoppingBagOpenFill style={{ color: "#69443c" }} className="w-6 h-6"/>
                    <span className="text-base text-[#69443c]">Add Products</span>
                </button>
            </Link>
            <Link to={"/listProduct"}>
                <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#c18d5c] rounded hover:text-light transition duration-200 px-4 mt-4">
                    <FaClipboardList style={{ color: "#69443c" }} className="w-6 h-6"/>
                    <span className="text-base text-[#69443c] ">Product List</span>
                </button>
            </Link>
            <Link to={"/listUsers"}>
                <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#c18d5c] rounded hover:text-light transition duration-200 px-4 mt-4">
                    <FaUsers style={{ color: "#69443c" }} className="w-6 h-6"/>
                    <span className="text-base text-[#69443c]">Users List</span>
                </button>
            </Link>
            <Link to={"/"}>
                <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#c18d5c] rounded hover:text-light transition duration-200 px-4 mt-4">
                    <BiSolidLogOut style={{ color: "#69443c" }} className="w-6 h-6"/>
                    <span className="text-base text-[#69443c]">Log Out</span>
                </button>
            </Link>
        </div>
    );
};

export default Sidebar;
