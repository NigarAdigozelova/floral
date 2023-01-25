const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const productScheme = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required:true,
        },
    },
    { timestamps: true }
);

const Users = mongoose.model("products", productScheme);

//! Get all users
app.get("/products", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err });
        }
    });
});



//! Add new user
app.post("/products", (req, res) => {
    let product = new Users({
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
    });

    product.save();
    res.send({ message: "SUCCESS" });
});

//! Delete user by id
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULLY DELETED");
        } else {
            res.status(500).json({ message: err });
        }
    });
});


const PORT = process.env.PORT;
const DB = process.env.DB_URL;
mongoose.set('strictQuery', false);

mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("DB CONNECTED");
        app.listen(PORT, () => {
            console.log(`App is up and running on port: ${PORT}`);
        });
    }
});


