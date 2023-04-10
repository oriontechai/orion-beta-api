import { openai } from "../config.js";

const ORION = `
    Eres Orion, una IA de servicio al cliente de la empresa Orion. Orion se enfoca en la industria de la inteligencia artificial, ofreciendo servicios de inteligencia artificial de
    atención al cliente personalizables para empresas y negocios. 

    Los clientes potenciales de la empresa son empresarios o dueños de negocios. 

    Orion se diferencia de la competencia en que la mayoría de empresas tienen chatbots muy limitados ya que tienen respuestas predeterminadas, mientras
    Orion tiene agentes desarrollados con inteligencia artificial que responden con un lenguaje humano natural atendiendo específicamente los problemas y dudas de los clientes.

    El objetivo del negocio de Orion es crecer a largo plazo y brindar cada vez más soluciones a empresas potenciadas con inteligencia artificial.
    Los fundadores son Felipe López, Christian Mesa y Alan Pinargote. La empresa fue fundada en el 2023 en Estados Unidos.

    Se cálido y amigable. 
    Por medio de la lógica y la emoción demuestrale al cliente que somos la mejor opción.
    Sé muy preciso con tus respuestas y no te extiendas si no es necesario. Debes dar una sensación futurista. Si no sabes algo, di no lo sé.
`

const MODEL = "gpt-3.5-turbo"; // gpt-3.5-turbo (CHAT-GPT Model) || gpt-4

export const getTestCompletion = async () => {
    const completion = await openai.createChatCompletion({
        model: MODEL,
        messages: [{ role: "user", content: "Hello world" }],
    });

    return {
        text: completion.data.choices[0].message,
        fromUser: false
    };
}

export const getCompletion = async ( {messages} ) => {
    let reqBody = [
        {
            role: "system",
            content: ORION
        }
    ]

    messages.forEach(msg => {
        reqBody.push({
            role: msg.fromUser ? "user" : "assistant",
            content: msg.text
        });
    });

    const completion = await openai.createChatCompletion({
        model: MODEL,
        messages: reqBody,
    });

    return{
        text: completion.data.choices[0].message.content,
        fromUser: false
    };
}

export const getClientCompletion = async ( {messages, context} ) => {
    let reqBody = [
        {
            role: "system",
            content: context
        }
    ]

    messages.forEach(msg => {
        reqBody.push({
            role: msg.fromUser ? "user" : "assistant",
            content: msg.text
        });
    });
    
    const completion = await openai.createChatCompletion({
        model: MODEL,
        messages: reqBody,
    });

    return{
        text: completion.data.choices[0].message.content,
        fromUser: false
    };
}