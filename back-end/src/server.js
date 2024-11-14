import express from "express";
import { cartItems as cartItemsRaw, products as productsRaw} from "./temp-data.js";

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();

app.use(express.json());

function populatedCartIds (ids) {
    return ids.map(cartId => {
        const product = products.find(product => product.id === cartId);
        return product;
    })
}

app.get("/hello", (req, res) => {
    res.send("Hello World");

});

app.get("/products", (req, res) => {
    res.json(products);
})

app.get("/cart", (req, res) => {
    const populatedCart = populatedCartIds(cartItems);
    res.json(populatedCart);
})

app.get("/products/:id", (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    res.json(product);
})

app.post("/cart", (req, res) => {
    const productId = req.body.id;
    const product = products.find((product) => product.id === productId);
    product && cartItems.push(productId);
    const populatedCartItems = populatedCartIds(cartItems);
    res.json(populatedCartItems);
})

app.delete("/cart/:id", (req, res) => {
    cartItems = cartItems.filter((item) => item !== req.params.id);
    const populatedCartItems = populatedCartIds(cartItems);
    res.json(populatedCartItems);
})


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});