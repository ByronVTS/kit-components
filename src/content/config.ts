// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";

// Define un `type` y un `schema` para la colección `posts`
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

// Define un `type` y un `schema` para la colección `projects`
const hobbiesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      hobbies:z.array(z.string())
    })
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
  posts: postsCollection,
  hobbies: hobbiesCollection,
};


//! Entiendo que desde este puedo empieza para crear las colecciones, definimos la estructura que va a tener y que esos datos estan en la coleccion llamada 'posts', "entiendo que aqui esta vacio no tiene nada!!!!!!" solo es la estructura 