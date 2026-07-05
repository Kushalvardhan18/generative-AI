import { OpenAI } from "openai";
import "dotenv/config"
const client = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})

async function main() {
    const result = client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: "tell me a story about vikram betal" }]
    })

    console.log("Ans from OpenAI API :",(await result).choices[0].message.content);

}
main()