import express from "express";
import path from 'path';
import { logger } from "./logger";
import { testRoutes1} from './router/routers1'
import { testRoutes2} from './router/routers2'

const app = express();

app.use((req, res, next) => {
  logger.info(`IP: ${req.ip} accessing the path: ${req.path} using method: ${req.method}`);
  next();
});

app.use('/r1', testRoutes1)
app.use('/r2', testRoutes2)
app.use(express.static(path.join(__dirname, "public")))



const port = 8080;

app.listen(port, () => {
  logger.info(`listening to PORT: ${port}`);
});
