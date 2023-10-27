// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import MascotaModelo from "../db/mascota.ts";

const deleteMascota = async (req: Request, res: Response) => {
  const id = req.params.id;

  const exists = await MascotaModelo.findById(id);
  if (!exists) {
    return res.status(404).send();
  }

  await MascotaModelo.findByIdAndDelete(id);
  res.status(200).send();
};

export default deleteMascota;
