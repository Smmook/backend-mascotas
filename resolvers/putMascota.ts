// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import MascotaModelo from "../db/mascota.ts";
import { Mascota, TipoDeMascota } from "../types/types.ts";

const putMascota = async (req: Request, res: Response) => {
  const id = req.params.id;
  const mascota: Mascota = req.body;

  if (!(mascota.tipo in TipoDeMascota)) {
    return res.status(400).send();
  }

  const exists = await MascotaModelo.findById(id);
  if (!exists) {
    return res.status(404).send();
  }

  try {
    await MascotaModelo.findByIdAndUpdate(id, mascota);
    res.status(200).send();
  } catch (_error) {
    res.status(400).send();
  }
};

export default putMascota;
