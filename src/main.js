import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.routes.js";
import { errorHandle } from "./middlewares/error-hencler.js";
import { ApiError } from "./utils/custum-error.js";
config();

const app = express();
const PORT = +process.env.PORT;

app.use(express.json())

await connectDB()
app.use("/api", router)

app.all(/(.*)/, (req, res, next) => {
    next(new ApiError("not funt ulr",404))
})

app.use(errorHandle);

app.listen(PORT, () => console.log("server startdet on port ", PORT))
