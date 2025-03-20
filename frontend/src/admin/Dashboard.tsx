import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import { FaUsers ,FaTshirt } from "react-icons/fa";
import { GiClothes ,GiHanger } from "react-icons/gi";
import {  } from "react-icons/gi";
import { useEffect, useState } from 'react';
import { LuShoppingBag , LuShoppingCart } from "react-icons/lu";

const Dashboard = () => {
    const [counts, setCounts] = useState({products: 0, users: 0});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await fetch('http://localhost:4000/totalUsers');
                const usersData = await usersResponse.json();

                const productsResponse = await fetch('http://localhost:4000/totalProducts');
                const productsData = await productsResponse.json();


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
                                <FaUsers className="text-3xl mb-2 w-[90px] h-[90px] " />
                            </div>
                            <h1 className="text-[60px] font-semibold ">{counts.users}</h1>
                            <p className="text-[25px] text-gray-600">Members</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
                            <div className='flex justify-center'>
                                <FaTshirt className="text-3xl mb-2  w-[90px] h-[90px]" />
                            </div>
                            <h1 className="text-[60px] font-semibold">{counts.products}</h1>
                            <p className="text-[25px] text-gray-600">Products</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
                            <div className='flex justify-center'>
                                <LuShoppingCart className="text-3xl mb-2  w-[90px] h-[90px]" />
                            </div>
                            <h1 className="text-[60px] font-semibold">1</h1>
                            <p className="text-[25px] text-gray-600">Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
