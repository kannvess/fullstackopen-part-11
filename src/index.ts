import { Elysia } from "elysia";

export const PORT = process.env.PORT || 3000;

export const app = new Elysia().get("/", () => "Hello Elysia");

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
