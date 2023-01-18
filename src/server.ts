import Fastify from "fastify";

const app = Fastify();

app.post("/", () => {
  return "Hello Yuri";
});

const port = 3333;
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server is running on port ${port}!`);
  });
