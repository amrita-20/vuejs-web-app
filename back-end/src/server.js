import express from "express";
import { cartItems as cartItemsRaw, products as productsRaw} from "./temp-data.js";

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("Hello World");

});

app.get("/products", (req, res) => {
    res.json(products);
})

app.get("/cart", (req, res) => {
    res.json(cartItems);
})

app.get("/products/:id", (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    res.json(product);
})

app.post("/cart", (req, res) => {
    const productId = req.body.id;
    const product = products.find((product) => product.id === productId);
    product && cartItems.push(product);
    res.json(cartItems);
})

app.delete("/cart/:id", (req, res) => {
    cartItems = cartItems.filter((item) => item.id !== req.params.id);
    res.json(cartItems);
})


app.listen(8000, () => {
  console.log("Server is running on port 3000");
});