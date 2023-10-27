// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import MascotaModelo from "../db/mascota.ts";

const getMascota = async (req: Request, res: Response) => {
  const id = req.params.id;
  const encontrada = await MascotaModelo.findById(id);
  if (!encontrada) {
    return res.status(404).send();
  }
  res.status(200).send({
    nombre: encontrada.nombre,
    descripcion: encontrada.descripcion,
    tipo: encontrada.tipo,
    id: encontrada._id,
  });
};

export default getMascota;
