import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        process.exit(1);
    }
}

export default connect;