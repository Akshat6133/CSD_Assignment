
const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

const mongoDB = require("./db")

const DisplayCanteen = require("./Routes/User/DisplayCanteen.js");

app.use(cors());

// app.use((req,res,next) => {
//   res.setHeader("Access-Control-Allow-Origin",`${window.location.origin}`);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

mongoDB();


app.use(express.json());

app.use("/",  DisplayCanteen);

// app.get('/', (req, res) => {
//   res.send("Working");
//   res.redirect('/user');
// });

app.get('/user', (req, res) => {
  res.send('Hello World!');
});


// Shop_Owner Part
app.use('/api', require("./Routes/Shop_Owner/CreateAdmin"));

app.use('/api', require("./Routes/Shop_Owner/Create_Food"));
app.use('/api', require("./Routes/Shop_Owner/CreateAdmin"));

app.use('/api', require("./Routes/Shop_Owner/DisplayFoodsActoShop"));             
app.use('/api', require("./Routes/User/DisplayDataAcToShops"));              


// User part
app.use('/api', require("./Routes/User/CreateUser"));
app.use('/api', require("./Routes/User/OrderData"));
app.use('/api', require("./Routes/User/DisplayCanteen"));

// Super_Admin part

app.use('/api', require("./Routes/Super_Admin/Owners"));
app.use('/api', require("./Routes/Super_Admin/CreateSuperAdmin"));
app.use('/api', require("./Routes/Super_Admin/CreateShops"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

