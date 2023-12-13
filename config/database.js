import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    mongoose
    .connect(process.env.MONGO_URI)
    //console---f connection.host = cluster shared etc etc connect ;
      .then(() => console.log("Database Connected Successfully ✅  "))
      .catch(() => console.log("Database connection failed!"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }

// mongoose
// .connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// // const {connection} = mongoose.connect(process.env.MONGO_URI);

// console.log("MongoDB Connected")
