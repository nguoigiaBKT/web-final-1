import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const URI = process.env.URI_MONGOOSE;
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;