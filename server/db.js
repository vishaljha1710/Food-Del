const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://romanvkj2001:vishal2001@cluster0.zqk6fxi.mongodb.net/FoodDB?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    await mongoose.connect(mongoURI).then(async () => {
        console.log("Connection successfull");
        const fetched_data = await mongoose.connection.db.collection('items');
        const data = await fetched_data.find({}).toArray();

        // console.log("data : ",data);

    }).catch((e) => {
        console.log("Connection failed: ",e);
    });
}

mongoDB();