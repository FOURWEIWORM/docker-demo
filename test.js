import koa from "koa";
import fs from "fs";

const app = new koa();
app.use(async (ctx) => {
    if(ctx.path == "/" || ctx.path == "/index") {
      ctx.body = fs.readFileSync("index.html", "utf8");
    } else {
      ctx.body = "<h1>404 Not Found</h1>";
    }
});
app.listen(3000);
console.log("Server is running on port 3000");