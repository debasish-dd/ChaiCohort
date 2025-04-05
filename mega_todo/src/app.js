import express from "express"

const app = express();

//import all routes
import healthCheckRouter from "./routes/healthCheck.routes.js"

app.use("/api/v1/healthcheck" , healthCheckRouter)

export default app