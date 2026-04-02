import express from "express";
import cors from "cors";

import adminApi from "./Apis/adminApi.js";
import authorApi from "./Apis/authorApi.js";
import userApi from "./Apis/userApi.js";
import commonApi from "./Apis/commonApi.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user-api", userApi);
app.use("/api/author-api", authorApi);
app.use("/api/admin-api", adminApi);
app.use("/api/common-api", commonApi);

export default app;