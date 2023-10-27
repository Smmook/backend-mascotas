// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import { Mascota, TipoDeMascota } from "../types/types.ts";
import MascotaModelo from "../db/mascota.ts";

const postMascota = async (req: Request, res: Response) => {
  const mascota: Mascota = req.body;
  if (!(mascota.tipo in TipoDeMascota)) {
    return res.status(400).send();
  }

  try {
    const saved = await new MascotaModelo(mascota).save();
    res.send(saved);
  } catch (_error) {
    res.status(400).send();
  }
};

export default postMascota;
