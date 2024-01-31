const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sribhargav1345:Assignment@cluster0.a01uyjm.mongodb.net/Assignment?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const foodsCollection = mongoose.connection.db.collection("foods");                     // Fetch data from 'foods' collection
    const fetchedFoods = await foodsCollection.find({}).toArray();

    const foodCategoriesCollection = mongoose.connection.db.collection("food_categories");  // Fetch data from 'food_categories' collection
    const fetchedCategories = await foodCategoriesCollection.find({}).toArray();

    const shops = mongoose.connection.db.collection("Canteen");                             // Fetch data from 'Canteens' collection 
    const shopdata = await shops.find({}).toArray();

    const food_milkshakes = mongoose.connection.db.collection("food_Milkshakes");                             // Fetch data from 'Canteens' collection 
    const milkshakes = await food_milkshakes.find({}).toArray();

    const food_milkshakesCat = mongoose.connection.db.collection("food_MilkshakesCat");                             // Fetch data from 'Canteens' collection 
    const milkshakesCat = await food_milkshakesCat.find({}).toArray();


    const owner_all = mongoose.connection.db.collection("admins");                             // Fetch data from 'Canteens' collection 
    const owners = await owner_all.find({}).toArray();

    global.foods = fetchedFoods;                                                            // Store fetched data in global variables or process further
    global.foodCategories = fetchedCategories;
    global.shops = shopdata;
    global.milkshakes = milkshakes;
    global.milkshakesCat = milkshakesCat;
    global.owners = owners;

  }
    catch (error) {
      console.error('MongoDB connection error:', error);
    }
};

module.exports = mongoDB;
