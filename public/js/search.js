const Groq = require("groq-sdk");
require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
async function search(query) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [{
                "role": "user",
                "content":"in precise manner and enclose headings with <strong> </strong> and remaining in <p> </p> tag and also don't use '**' and dont make it larger than 150 words" +query,
            }],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 8192,
            "top_p": 1,
            "stream": false,
            "stop": null
        });

        let cont = chatCompletion.choices[0]?.message?.content || '';

        return cont;
    } catch (error) {
        console.error('Error in ask function:', error);
        throw new Error('Failed to get completion');
    }
}

module.exports = search;