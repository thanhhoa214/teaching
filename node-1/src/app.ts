import * as express from "express";
import { Request, Response } from "express";

const app = express();
// parse incoming request bodies in a middleware before your handlers, available under the req.body property
// app.use(express.json());

/**
 * user ---request---> middleware ----> route handler
 * server ---response---> user
 */

/**
 * frontend ---request---> server ---read---> database
 * database ---response---> server --response--> frontend
 */

app.get("/users", function (req: Request, res: Response) {
  // here we will have logic to return all users
  res.send({ users: [] });
});

app.get("/users/:id", function (req: Request, res: Response) {
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.body);

  // here we will have logic to return user by id
});

app.post("/users", function (req: Request, res: Response) {
  // here we will have logic to save a user
});

app.put("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to update a user by a given user id
});

app.delete("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to delete a user by a given user id
});

// start express server
app.listen(3000);
