const Groq = require("groq-sdk");
require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
async function askgroq(data) {
    let prompt = `I want to learn ${data}. Generate me a roadmap in a specific format. Split it into sections with estimated time it would take to complete them(in weeks). List out subtopics for each section(max 6, divide in that manner) and provide links to resources to learn those topics. Also provide free courses/resources links at the top of the response. *generate the data in the form of a json*.The free courses should also be part of the json`;
    let response = "";
    try {
    const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama3-70b-8192",
        //"model": "gemma2-9b-it",
        //"model": "mixtral-8x7b-32768",
        //"model": "llama3-groq-70b-8192-tool-use-preview",
        temperature: 0,
        max_tokens: 8192,
        top_p: 1,
        stream: true,
        stop: null,
    });

    for await (const chunk of chatCompletion) {
        response += chunk.choices[0]?.delta?.content || "";
    }
    console.log("Complete Response:", response);
    const match = response.match(/```([^`]*)```/);
    if (match) {
        const respObj = JSON.parse(match[1]);
      console.log(respObj);
      return respObj
    } else {
      console.error("JSON block not found in response.");
    }
    } catch (error) {
        console.error("Error generating HTML:", error);
    }
}

module.exports = askgroq;