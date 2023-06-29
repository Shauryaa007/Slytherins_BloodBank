require("dotenv").config();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./db/connectDB");
const authRouter = require("./routes/auth");
const Users = require("./models/user");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlesMiddleware = require("./middleware/error-handler");
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:3000", credentials: true }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.get("/delete", async (req, res) => {
  await Users.deleteMany({});
  res.json("delete");
});

app.use(notFoundMiddleware);
app.use(errorHandlesMiddleware);

const port = process.env.PORT || 9000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
