export enum TipoDeMascota {
  "perros",
  "gatos",
  "serpientes",
}

export interface Mascota {
  nombre: string;
  descripcion: string;
  tipo: TipoDeMascota;
}
