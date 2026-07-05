import { OpenAI } from "openai";
import "dotenv/config"


const client = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})

async function main() {
    const result = client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{
            role: 'user', 
            content: `What is 2+2 equals 
            Do not add anything in answer,take the samples from the examples.
                    Examples:
                      - what is 5 + 4 ?
                    Expected Output: 9(Nine)
                      - What is 10 + 10 ?
                    Expected Output: 20(Twenty)`
        }]
    })

    console.log("Ans from OpenAI API :", (await result).choices[0].message.content);

}
main()