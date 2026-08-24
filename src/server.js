import express from "express"
import dotenv from "dotenv"
import { connectDB, disconnectDB} from "./config/db.js";


// Import routes 
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();
connectDB()

const app = express()

// API routes 
app.use("/movies", movieRoutes); 

const PORT = 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

process.on("unhandledRejection",(error)=>{
  console.log("Uhandled Rejection", error);
  server.close(async()=>{
    console.log("Server closed");
    await disconnectDB();
    process.exit(1);
  })
});


process.on("uncaughtException", async(error)=>{
  console.log("Uncaught Exception", error);
  server.close(async()=>{
    console.log("Server closed");
    await disconnectDB();
    process.exit(1);
  })
})


process.on("SIGTERM",()=>{
  console.log("SIGTERM received, shutting down gracefully...");
  server.close(async()=>{
    console.log("Server closed");
    await disconnectDB();
    process.exit(0);
  })
})


