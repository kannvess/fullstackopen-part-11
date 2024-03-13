import { Elysia } from "elysia";

export const PORT = process.env.PORT || 3000;

export const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/version", () => {
    console.log(
      "Hey man, if you're reading this, I would like to thank you very much, truly. I have been accepted to a job just by including the certificate of this course, all the skills I learned have been very helpful and I can't thank you and the whole fullstackopen team for making this course. <3"
    );

    return "2";
  })
  .get("/health", () => "ok");

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
