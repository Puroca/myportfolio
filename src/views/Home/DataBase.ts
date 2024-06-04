import { ProjectInterface } from "./Types";


export const projects: ProjectInterface[] = [
  {
    id: 1,
    name: 'Cintre Vintage',
    description:
      'Une market place de vente de vêtements et accessoirs',
    link: 'https://cintrevintage.com',
    image: '/capture-cintrevtg.jpg',
  },
  {
    id: 2,
    name: 'Filières techniques',
    description:
      "Une plate forme de livres gratuits pour les techniciens",
    link: 'https://filierestechniques.com',
    image: '/capture-technofile.jpg',
  },
  {
    id: 3,
    name: 'Finition Décor Plus',
    description:
      "Un site vitrine d'une entreprise de finition BTP",
    link: 'https://fdp.filierestechniques.com',
    image: '/capture-fdp.jpg',
  },
  {
    id: 4,
    name: 'NotesApp',
    description:
      "Une application web de prise de notes",
    link: 'https://note-app.mooo.com',
    image: 'capture-noteapp.jpg',
  },
]