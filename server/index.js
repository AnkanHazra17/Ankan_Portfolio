const express = require("express");
const app = express();

const database = require("./configs/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./configs/cloudinary");

const authRoutes = require("./routes/Auth");
const projectRoutes = require("./routes/Project");
const timmeLineRoutes = require("./routes/TimeLine");

const PORT = process.env.PORT || 5000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

cloudinaryConnect();

// Mount Routes
app.use("/portfolio-api/v1/auth", authRoutes);
app.use("/portfolio-api/v1/project", projectRoutes);
app.use("/portfolio-api/v1/timeLine", timmeLineRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
