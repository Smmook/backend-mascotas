// @deno-types="npm:@types/express"
import express from "npm:express@4.18.2";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import mongoose from "npm:mongoose@7.6.3";
import getMascotas from "./resolvers/getMascotas.ts";
import getMascota from "./resolvers/getMascota.ts";
import postMascota from "./resolvers/postMascota.ts";
import putMascota from "./resolvers/putMascota.ts";
import deleteMascota from "./resolvers/deleteMascota.ts";

const app = express();
app.use(express.json());

const env = await load();
let mongoUri: string | undefined = env["MONGO"];
if (mongoUri === undefined) {
  mongoUri = Deno.env.get("MONGO");
}
await mongoose.connect(mongoUri as string);

app.get("/api/mascotas", getMascotas);
app.get("/api/mascotas/:id", getMascota);
app.post("/api/mascotas", postMascota);
app.put("/api/mascotas/:id", putMascota);
app.delete("/api/mascotas/:id", deleteMascota);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
