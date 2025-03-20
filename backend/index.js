const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(express.json());
app.use(cors(corsConfig));

// Create upload directory if it doesn't exist
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Database connection
mongoose.connect(
    "mongodb+srv://ecommerceCloth:user123@cluster0.xr2ed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n"
)
    .then(() => {
        console.log("MongoDB successfully connected!");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.get("/", (req, res) => {
    res.send("Server is running");
});

// Image storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Serve static files from the upload directory
app.use("/images", express.static(uploadDir));

// Upload image endpoint
app.post("/upload", upload.single("product"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: 0,
            message: "No file uploaded"
        });
    }

    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
});
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Product add
app.post("/addProduct", async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        console.log("Adding product:", product);
        await product.save();
        console.log("Saved product");

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({
            success: false,
            message: "Error adding product",
            error: error.message
        });
    }
});

// Edit product
app.put("/editProduct/:id", async (req, res) => {
    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { id: productId },
            {
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        console.log("Updated product:", updatedProduct);
        res.json({
            success: true,
            updatedProduct,
        });
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Delete products
app.delete("/deleteProduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Get product according to product id
app.get('/getProduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findOne({ id: productId });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all products details
app.get("/allProducts", async (req, res) => {
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
});

// Total products count
app.get("/totalProducts", async (req, res) => {
    try {
        let totalProducts = await Product.countDocuments({});

        console.log("Total products counted:", totalProducts);

        res.send({ totalProducts: totalProducts });
    } catch (error) {
        console.error("Error counting products:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Schema user model
const User = mongoose.model("User", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Total users count
app.get("/totalUsers", async (req, res) => {
    try {
        let totalUsers = await User.countDocuments({});

        console.log("Total users counted:", totalUsers);

        res.send({ totalUsers: totalUsers });
    } catch (error) {
        console.error("Error counting users:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Get all Users
app.get("/allusers", async (req, res) => {
    let users = await User.find({});
    console.log("All Users are fetched");
    res.send(users);
});

// Delete users
app.delete('/deleteUser', async (req, res) => {
    const { name } = req.body;

    console.log('Request to delete user:', name);

    if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
    }

    try {
        const user = await User.findOneAndDelete({ name });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            name: user.name,
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'An error occurred while deleting the user' });
    }
});

// Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({
            success: false,
            errors: "Existing user found with same email address",
        });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });
    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };
    const token = jwt.sign(data, "secret_ecommerce_token");
    res.json({
        success: true,
        token,
    });
});

// Creating endpoint for logging in the user
app.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passwordMatch = req.body.password === user.password;
        if (passwordMatch) {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const token = jwt.sign(data, "secret_ecommerce_token");
            res.json({
                success: true,
                token,
            });
        } else {
            res.json({
                success: false,
                errors: "Incorrect password",
            });
        }
    } else {
        res.json({
            success: false,
            errors: "Incorrect email address",
        });
    }
});

// Latest products
app.get("/newCollection", async (req, res) => {
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);
    console.log("New collection fetched");
    res.send(newCollection);
});

// Popular products
app.get("/popularProducts", async (req, res) => {
    let products = await Product.find({ category: "men" });
    let popularProducts = products.slice(0, 4);
    console.log("Popular products fetched");
    res.send(popularProducts);
});

// Authentication middleware
const fetchUser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ errors: "Please authenticate using a valid login" });
    }

    try {
        const data = jwt.verify(token, "secret_ecommerce_token");
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};

// Add products to cart data
app.post("/addtocart", fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);
    let userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send('Added');
});

// Remove from cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId);
    let userData = await User.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send('Removed');
});

// Get cart data
app.post('/getcart', fetchUser, async(req, res) => {
    console.log('Get cart data');
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});