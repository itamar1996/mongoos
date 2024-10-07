const exp = require("express")
const dotenv = require("dotenv")

const app = exp();
dotenv.config();
const port = process.env.PORT || 3500 ;

app.use(exp.json());
app.use('/auth',require('./routes/authrouter'))
app.use('/user',require('./routes/userRouter'))
app.use('/greeneye',require('./routes/greenEyeRouter'))


app.listen(port,()=>{
    console.log("server run on port",port);
})