const express = require("express");
const ExportRouter = require("./routes/export.route");
const app = express();

app.use("/api", ExportRouter);

app.listen(5200, console.log(`server connected on  ${5200}`));
