const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://owaisrao405:express123@cluster0.dkjoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongo DB Connected Successfully");
  } catch (err) {
    console.log("Mongo DB Connection Error: ", err);
  }
};

module.exports = connectDB;
