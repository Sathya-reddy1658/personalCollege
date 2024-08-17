
const Groq = require("groq-sdk");
require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
async function quiz(Q) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [{
                "role": "user",
                "content": `Generate a list of 5 unique questions with answers in Array format on the topic of ${Q}. Frame questions in a manner that it has short answers.do not send any other text except the JSON object.`,
            }],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 1024,
            "top_p": 1,
            "stream": false,
            "stop": null
        });

        const result = chatCompletion.choices[0]?.message?.content || '';

        return result;
    } catch (error) {
        console.error('Error in ask function:', error);
        throw new Error('Failed to get completion');
    }
}
 
module.exports = quiz;