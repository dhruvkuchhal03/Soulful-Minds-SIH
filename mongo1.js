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

const dataSchema = new mongoose.Schema({
  web_arr: {
    type: Array,
    items: {
      type: String,
    },
  },
});

const blockCollection = mongoose.model("blockCollection", dataSchema);

module.exports = blockCollection;
