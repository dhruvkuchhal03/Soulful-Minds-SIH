const mongoose = require("mongoose");
const mongoString = "mongodb://localhost:27017/soulful-minds";
mongoose.connect(
  `mongodb+srv://soulful_minds:sih_soulful_minds@cluster0.rdbr1wc.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});







const new2 = new mongoose.Schema({
  QuizInfo:{
    type: Map,
    required: true,
  },
})

const collection = mongoose.model("collection", newSchema);
const col2 = mongoose.model("QuizInfo", new2);



module.exports = {collection, col2};
// module.exports = { collection };
