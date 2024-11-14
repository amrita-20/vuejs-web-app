import express from "express";
import { MongoClient } from "mongodb";
import {
  cartItems as cartItemsRaw,
  products as productsRaw,
} from "./temp-data.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

let cartItems = cartItemsRaw;
let products = productsRaw;

async function init() {
  const uri = process.env.MONGODB_URI || "";

  const client = new MongoClient(uri);

  await client.connect();
  const database = client.db("full-stack-vue-db");

  const app = express();

  app.use(express.json());

  async function populatedCartIds(ids) {
   
    return Promise.all(
      ids.map((id) => {
        const product = database.collection("products").findOne({ id });
        return product;
      })
    );
  }

  app.get("/products", async (req, res) => {
    const products = database.collection("products").find({}).toArray();
    res.json(products);
  });

  app.get("/users/:userId/cart", async (req, res) => {
    const user = await database
      .collection("users")
      .findOne({ id: req.params.userId });
    const populatedCart = await populatedCartIds(user.cartItems);
    res.json(populatedCart);
  });

  app.get("/products/:id", async (req, res) => {
    const product = await database
      .collection("products")
      .findOne({ id: req.params.id });
    res.json(product);
  });

  app.post("/users/:userId/cart", async(req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;

    await database.collection("users").updateOne(
      { id: userId },
      {
        $addToSet: {
          cartItems: productId,
        },
      }
    );
    const user = await database
    .collection("users")
    .findOne({ id: userId });
    const populatedCartItems = await populatedCartIds(user.cartItems);
    res.json(populatedCartItems);
  });

  app.delete("/users/:userId/cart/:id", async (req, res) => {
    await database
    .collection("users")
    .updateOne({ id: req.params.userId }, {
        $pull: {
            cartItems: req.params.id,
        },
    });

    const user = await database
    .collection("users")
    .findOne({ id: req.params.userId });
    const populatedCartItems = await populatedCartIds(user.cartItems);
    res.json(populatedCartItems);
  });

  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
}

init();
