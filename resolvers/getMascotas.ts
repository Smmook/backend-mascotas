// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import MascotaModelo from "../db/mascota.ts";

const getMascotas = async (req: Request, res: Response) => {
  const resultados = await MascotaModelo.find({});
  const mascotas = resultados.map((mascota) => {
    return {
      nombre: mascota.nombre,
      descripcion: mascota.descripcion,
      tipo: mascota.tipo,
      id: mascota._id,
    };
  });
  res.status(200).send(mascotas);
};

export default getMascotas;
