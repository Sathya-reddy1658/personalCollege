const Groq = require("groq-sdk");
require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
async function infoGen(Q){
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [{
                "role": "user",
                "content": `give me same as below but for topic ${Q} , don't chnage the styling 
<div class="flex flex-col   text-justify w-[full] border border-black rounded-[15px] p-[15px]">
                <h1 class="text-[50px] font-extrabold">NEURONS <br></h1>
                <p class="font-extralight">The messengers of human body </p>
                <hr class="w-[90%] bg-blue-900 h-[5px]">
                <h2 class="text-[30px] text-20">Brief Overview</h2>
                <p class="text-[20px] font-extralight">Neurons are the basic building blocks of the nervous system, crucial for transmitting information
                    throughout the body. They facilitate everything from basic reflexes to complex thoughts and
                    emotions.</p>
                <hr class="w-[90%] bg-gray-900 h-[5px]">
                <h2 class="text-[30px] font-bold ">Key Information</h2>
                <ul class="flex flex-col gap-[10px]">
                    <li  class="text-[20px] font-extralight"><strong>Structure:</strong> Neurons consist of a cell body, dendrites (which receive signals),
                        and an axon (which sends signals to other neurons, muscles, or glands).</li>
                    <li  class="text-[20px] font-extralight"><strong>Types:</strong>
                        <ul  class="text-[20px] font-extralight">
                            <li><strong>Sensory Neurons:</strong> Carry signals from sensory receptors to the central
                                nervous system (CNS).</li>
                            <li><strong>Motor Neurons:</strong> Transmit signals from the CNS to muscles and glands.
                            </li>
                            <li><strong>Interneurons:</strong> Connect neurons within the CNS, playing a key role in
                                information processing.</li>
                        </ul>
                    </li>
                    <li  class="text-[20px] font-extralight"><strong>Synapse:</strong> The synapse is the junction between two neurons where communication
                        occurs through neurotransmitter release.</li>
                    <li class="text-[20px] font-extralight"><strong>Action Potential:</strong> An action potential is a brief electrical charge that travels
                        down an axon, enabling neurons to communicate.</li>
                    <li class="text-[20px] font-extralight"><strong>Myelin Sheath:</strong> A fatty layer that surrounds axons, allowing electrical impulses
                        to transmit quickly and efficiently along the nerve cells.</li>
                    <li class="text-[20px] font-extralight"><strong>Neuroplasticity:</strong> The brain's ability to reorganize itself by forming new neural
                        connections throughout life, essential for learning, memory, and recovery from injury.</li>
                </ul>
                <hr class="w-[90%] bg-gray-900 h-[5px]">
                <h2 class="text-[30px] font-bold ">Important Facts</h2>
                <ul class="flex flex-col gap-[10px] text-[20px] font-extralight"">
                    <li><strong>Fact 1:</strong> The human brain contains approximately 86 billion neurons.</li>
                    <li><strong>Fact 2:</strong> Neurons can transmit signals at speeds up to 120 meters per second.
                    </li>
                    <li><strong>Fact 3:</strong> The longest axon in the human body, known as the sciatic nerve, can
                        extend over one meter in length.</li>
                    <li><strong>Fact 4:</strong> Each neuron can form thousands of synapses, allowing for complex neural
                        networks in the brain.</li>
                    <li><strong>Fact 5:</strong> Unlike most other cells, neurons generally do not regenerate, making
                        neural damage particularly significant.</li>
                </ul>
                <hr class="w-[90%] bg-gray-900 h-[8px]">
                <h2 class="text-[30px] font-bold"">Additional Information</h2>
                <ul class="flex flex-col gap-[10px] text-[20px] font-extralight"">
                    <li><strong>Neural Networks:</strong> Neurons work together in networks to perform various tasks,
                        from basic reflexes to higher cognitive functions.</li>
                    <li><strong>Glial Cells:</strong> Supportive cells that provide nutrients, maintain homeostasis, and
                        protect neurons in the nervous system.</li>
                    <li><strong>Electrical vs. Chemical Signals:</strong> Neurons communicate via both electrical
                        signals (within neurons) and chemical signals (between neurons).</li>
                </ul>
            </div> size of content should be appooximately same, not less not more`,
            }],
            "model": "llama3-70b-8192",
            "temperature": 1,
            "max_tokens": 8192,
            "top_p": 1,
            "stream": false,
            "stop": null
        });

        const result = chatCompletion.choices[0]?.message?.content || '';

        const htmlContent = result.match(/<div class="flex flex-col[\s\S]*<\/div>/);
        return htmlContent[0];
        
    } catch (error) {
        console.error('Error in ask function:', error);
        throw new Error('Failed to get completion');
    }
}

module.exports = infoGen;