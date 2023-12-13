import {app} from './app.js';
import {config} from 'dotenv';
import {connectDatabase} from './config/database.js'
// import cors  from "cors";
// import mongoose  from "mongoose";
import cloudinary from 'cloudinary'

config({
    path : './config/config.env'
})
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

// app.use(cors());
// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
    
//   )
//   .catch((error) => console.log(error.message));

connectDatabase()


app.listen(process.env.PORT , ()=> console.log(`Server is running on http://localhost:${process.env.PORT} ✅`))