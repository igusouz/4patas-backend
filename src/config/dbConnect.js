import mongoose from "mongoose";

async function connectDataBase(){
    mongoose.connect("mongodb+srv://igor2003f:GWVSg9ItvzYbuZ6Q@4patasbackend.lnddael.mongodb.net/?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;