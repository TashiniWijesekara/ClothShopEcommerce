import Sidebar from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import upload from "../assets/upload_area.svg";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddProduct = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        });
    };

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setImage(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    };

    const addProduct = async () => {
        // Validate inputs
        if (!productDetails.name || !image || !productDetails.new_price || !productDetails.old_price) {
            setErrorMessage("Please fill all fields and upload an image");
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            // First upload the image
            const formData = new FormData();
            formData.append("product", image);

            const uploadResponse = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData,
            });

            const uploadData = await uploadResponse.json();

            if (!uploadData.success) {
                throw new Error("Failed to upload image");
            }

            // Then create the product with the image URL
            const productData = {
                name: productDetails.name,
                image: uploadData.image_url,
                category: productDetails.category,
                new_price: productDetails.new_price,
                old_price: productDetails.old_price
            };

            const productResponse = await fetch('http://localhost:4000/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData),
            });

            const productResult = await productResponse.json();

            if (productResult.success) {
                setSuccessMessage("Product Added Successfully !");
                // Reset the form
                setProductDetails({
                    name: "",
                    image: "",
                    category: "women",
                    new_price: "",
                    old_price: ""
                });
                setImage(null);
                setImagePreview(null);
            } else {
                throw new Error("Failed to add product ! ");
            }
        } catch (error: unknown) {
            console.error("Error adding product:", error);

            if (error instanceof Error) {
                setErrorMessage(error.message);  // ✅ Safe access
            } else {
                setErrorMessage("An error occurred while adding the product ! ");
            }
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col lg:flex-row bg-white gap-10">
                <Sidebar />
                <div className=" box-border bg-white w-full rounded-sm  flex-grow ">
                    {/* Success message */}
                    {successMessage && (
                        <div className="bg-white border  text-black px-4 py-3 rounded mb-4 relative">
                            {successMessage}
                            <button
                                className="absolute top-0 right-0 px-4 py-3"
                                onClick={() => setSuccessMessage(null)}
                            >
                                &times;
                            </button>
                        </div>
                    )}

                    {/* Error message */}
                    {errorMessage && (
                        <div className="bg-white border border-black text-black px-4 py-3 rounded mb-4 relative">
                            {errorMessage}
                            <button
                                className="absolute top-0 right-0 px-4 py-3"
                                onClick={() => setErrorMessage(null)}
                            >
                                &times;
                            </button>
                        </div>
                    )}

                    <div className="mb-3 gap-20">
                        <h4 className="bold-22 p-5 uppercase text-[#b57b65]">Add Product</h4>
                        <h4 className="bold-18 pb-2">Product title :</h4>
                        <input
                            type="text"
                            value={productDetails.name}
                            onChange={changeHandler}
                            name="name"
                            placeholder="Type here.."
                            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                        />
                    </div>
                    <div className="mb-3">
                        <h4 className="bold-18 pb-2">Price :</h4>
                        <input
                            type="number"
                            value={productDetails.old_price}
                            onChange={changeHandler}
                            name="old_price"
                            placeholder="Type here.."
                            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                        />
                    </div>
                    <div className="mb-3">
                        <h4 className="bold-18 pb-2">Offer Price :</h4>
                        <input
                            type="number"
                            value={productDetails.new_price}
                            onChange={changeHandler}
                            name="new_price"
                            placeholder="Type here.."
                            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
                        />
                    </div>
                    <div className="mb-3 flex items-center gap-x-4">
                        <h4 className="bold-18 pb-2">Product Category : </h4>
                        <select
                            name="category"
                            value={productDetails.category}
                            onChange={changeHandler}
                            className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none"
                        >
                            <option value="women">Women</option>
                            <option value="men">Men</option>
                            <option value="kid">Kid</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <h4 className="bold-18 pb-2">Product Image:</h4>
                        <div className="relative">
                            {imagePreview ? (
                                <div className="relative">
                                    <img
                                        src={imagePreview}
                                        alt="Product preview"
                                        className="w-40 h-40 object-cover rounded"
                                    />
                                    <button
                                        onClick={() => {
                                            setImage(null);
                                            setImagePreview(null);
                                        }}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ) : (
                                <label
                                    htmlFor="file-input"
                                    className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white-50 hover:bg-gray-100"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <img src={upload} alt="Upload" className="w-10 h-10 mb-2" />
                                        <p className="text-sm text-gray-500">Click to upload</p>
                                    </div>
                                    <input
                                        id="file-input"
                                        type="file"
                                        accept="image/*"
                                        onChange={imageHandler}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={addProduct}
                        disabled={isLoading}
                        className={`px-6 py-2 bg-[#c18d5c] text-white rounded-md flex items-center gap-x-2 ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c18d5c]-800'
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="5" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>


                                Processing...
                            </>
                        ) : (
                            <>
                                <FaPlus /> Add Product
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;