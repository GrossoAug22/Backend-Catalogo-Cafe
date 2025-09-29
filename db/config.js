import mongoose from "mongoose";

try {
    mongoose.connect(process.env.MONGODB).then(() => {
        console.info("Connected to MongoDB");
    }
)
} catch (error) {
    console.error(error);
}

export default mongoose