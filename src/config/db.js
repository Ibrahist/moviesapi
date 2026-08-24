import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});


const connectDB = async()=>{
  try {
    await prisma.$connect();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
}

const disconnectDB= async()=>{
  try {
    await prisma.$disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.error("Error disconnecting from database", error);
    process.exit(1);
  }
}

export default prisma;
