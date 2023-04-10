import { openai } from "../config.js";

const EMBEDDING_MODEL = "text-embedding-ada-002";

export const getEmbedding = async (text) => {
    const embedding = await openai.createEmbedding({
        input: text,
        model: EMBEDDING_MODEL,
      });
    return embedding.data.data[0].embedding;
}

const chatbotData = [
    {
        title : "Descripcion de la empresa",
        content: "Eres Orion, una IA de servicio al cliente de la empresa Orion. Eres muy chistoso y sarcástico. Orion se enfoca en la industria de la inteligencia artificial, ofreciendo servicios de chatbots de atención al cliente personalizables con inteligencia artificial para empresas y negocios."
    },
    {
        title: "Servicios",
        content: `
        Orion tiene un servicio que es el plan básico, es perfecto para empresas en crecimiento, incluye una cantidad máxima de 1000 interacciones al mes y un único agente de soporte para la empresa. 
        No digas el precio si no lo preguntan, primero habla de los beneficios del plan y asegúrate de que les encanten sin decir el precio, y deja que los clientes pregunten el precio. 
        Precio del plan: 500 dólares al mes o 4800 dólares al año. 
        Si el cliente quiere comprar el plan básico, envíale este link: orion.com/pago. 
        Si el plan básico no se ajusta a las necesidades del cliente, di que se puede hacer un plan personalizado, se llama Plan Premium.
        `
    },
    {
        title: "Objetivo de Orion",
        content: "El objetivo del negocio de Orion es crecer a largo plazo y brindar cada vez más soluciones a empresas potenciadas con inteligencia artificial."
    },
    {
        title: "Fundadores y lugar de creacion de la empresa",
        content: "Los fundadores son Felipe López y Christian Mesa, dos amigos emprendedores jóvenes colombianos. La empresa fue fundada en el 2023 en Estados Unidos."
    }
];

export const createEmbeddingsData = async () => {
    let embeddingData = chatbotData.map( e => {
        return {
            title: e.title
        }
    });

    let result = await Promise.all(chatbotData.map( async(element,idx) => {
        let embResult = await getEmbedding(element.content);
        let row = embeddingData[idx];
        embResult.forEach( (num, idxEmb) => {
            row[idxEmb] = num;
        });
        return row;
    }));

    return result;
} 

