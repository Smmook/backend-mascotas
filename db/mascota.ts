import mongoose from "npm:mongoose@7.6.3";
import { Mascota } from "../types/types.ts";

const MascotaEsquema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  tipo: { type: String, required: true },
});

const MascotaModelo = mongoose.model<Mascota>("Mascota", MascotaEsquema);

export default MascotaModelo;
