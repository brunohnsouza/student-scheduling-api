import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: "json" };
import { router } from "./routes.js";

const server = express();

server.use(express.json());
server.use(router);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(process.env.PORT ? Number(process.env.PORT) : 3333, () =>
  console.log(
    `Server listening on port ${
      process.env.PORT ? Number(process.env.PORT) : 3333
    }`
  )
);
