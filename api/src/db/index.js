import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://yadavarmaan10:eC5zlUOcR5mGaZWd@cluster0.tttnbec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connectionInstance) {
      console.log(
        "Databse connected at host : ",
        connectionInstance.connection.host
      );
    }
  } catch (error) {
    console.log("Error while connectiong to DataBase ,  ERROR : ", error);
  }
};

export default connectDB();
