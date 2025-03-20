import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import { FaUsers ,FaTshirt } from "react-icons/fa";
import { GiClothes ,GiHanger } from "react-icons/gi";
import {  } from "react-icons/gi";
import { useEffect, useState } from 'react';
import { LuShoppingBag , LuShoppingCart } from "react-icons/lu";

const Dashboard = () => {
    const [counts, setCounts] = useState({products: 0, users: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await fetch('http://localhost:4000/totalUsers');
                const usersData = await usersResponse.json();

                const productsResponse = await fetch('http://localhost:4000/totalProducts');
                const productsData = await productsResponse.json();

                // const ordersResponse = await fetch('http://localhost:4000/totalOrders');
                // const ordersData = await ordersResponse.json();

                setCounts({
                    users: usersData.totalUsers,
                    products: productsData.totalProducts,
                    // orders: ordersData.totalOrders
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div className='flex flex-col lg:flex-row  bg-white '>
                <Sidebar />
                <div className='p-8 box-border bg-white w-full rounded-sm flex-grow '>
                    <h2 className="text-2xl font-bold mb-10 text-[#b57b65]">Dashboard</h2>
                    <div className="flex gap-10 ">
                        <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg ">
                            <div className='flex justify-center'>
                                <FaUsers style={{ color: "#69443c" }} className="text-3xl mb-2 w-[90px] h-[90px] " />
                            </div>
                            <h1 className="flex justify-center text-[60px] text-[#69443c]  font-semibold ">{counts.users}</h1>
                            <p className="flex justify-center text-[25px] text-[#69443c] text-gray-600">Members</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
                            <div className='flex justify-center'>
                                <FaTshirt style={{ color: "#69443c" }} className="text-3xl mb-2  w-[90px] h-[90px]" />
                            </div>
                            <h1 className="text-[#69443c] flex justify-center text-[60px] font-semibold">{counts.products}</h1>
                            <p className=" flex justify-center text-[25px] text-[#69443c]">Products</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
                            <div className='flex justify-center'>
                                <LuShoppingCart style={{ color: "#69443c" }} className="text-3xl mb-2  w-[90px] h-[90px]" />
                            </div>
                            <h1 className=" flex justify-center text-[60px] text-[#69443c] font-semibold">2</h1>
                            <p className="flex justify-center text-[25px] text-[#69443c]">Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
