const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./config/dbConfig")
const cookieParser = require("cookie-parser")
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require("./swaggrer/swaggerOptions");

const swaggerDocs = swaggerJsdoc(swaggerOptions);
const app = exp();
dotenv.config();
connectToMongo()

const port = process.env.PORT || 1415;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(exp.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));

app.listen(port, () => console.log("server up and runing on port " + port));