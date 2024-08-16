const subjectsData = {
  botany: {
    key: "botany",
    name: "Botany",
    chapters: [
      {
        key: "celltheory",
        name: "Structure of Cell",
        title: "The Fundamental Unit of Life: Cell Theory",  
        description: "Explore the intricate world of cells, the building blocks of all living organisms. Learn how cells function and how they were discovered.", 
        points: 10,
        icon: "https://img.icons8.com/color-glass/48/eukaryotic-cells.png",
        models: ["animalCell", "plantCell", "neuron"] 
      },
      {
        key: "enzymes",
        name: "Enzymes",
        title: "Catalysts of Life: Enzymes",
        description: "Dive into the essential role enzymes play in speeding up biological reactions. Understand how they work and their significance in metabolism.",
        points: 10,
        icon: "https://img.icons8.com/color/48/enzymes.png",
        models: ["Lysosome", "PETase_Enzyme", "Superposition_of_PETase_and_MHETase"] 
      },
      {
        key: "circulatorysystem",
        name: "Circulatory System",
        title: "The Heart of Life: Circulatory System",
        description: "Study the vital circulatory system in plants and animals, and understand how nutrients and gases are transported throughout the body.",
        points: 10,
        icon: "https://img.icons8.com/color/48/circulatory-system.png",
        models: ["heart", "bloodVessels", "Vascular_Tissue_System_in_Plants"] 
      },
    ],
  },
  Basic_Electrical_Engineering: {
    key: "Basic_Electrical_Engineering",
    name: "Basic Electrical Engineering",
    chapters: [
      {
        key: "Transformers",
        name: "Transformers",
        title: "Power and Distribution: Transformers",  
        description: "Understand how transformers work, including their role in voltage regulation and power distribution in electrical circuits.", 
        points: 10,
        icon: "https://img.icons8.com/color/48/transformer.png",
        models: ["EMI", "transformerModel", "engine","turbine"] 
      },
      {
        key: "Electrical_Installations",
        name: "Electrical Installations",
        title: "Electrical Installations: Safety and Functionality",  
        description: "Learn about the components and safety measures involved in electrical installations, including circuit breakers and fuses.", 
        points: 10,
        icon: "https://img.icons8.com/color/48/electrical.png",
        models: ["Molded_Case_Circuit_Breaker", "Modular_circuit_breaker_(MCB)", "Electric_Fuse_Cabinet"] 
      },
    ],
  },
  biology: {
    key: "biology",
    name: "Biology",
    chapters: [
      {
        key: "Human_System",
        name: "Human Anatomy",
        title: "The Complexity of Human Systems",  
        description: "Explore the complex systems within the human body, including the cardiovascular, skeletal, and digestive systems.", 
        points: 10,
        icon: "https://img.icons8.com/color/48/human-body.png",
        models: ["heart", "skeleton", "digestiveSystem", "Human_Pancreas"] 
      },
    ],
  },
  physics: {
    key: "physics",
    name: "Physics",
    chapters: [
      {
        key: "Quantum_Mechanics",
        name: "Quantum Mechanics",
        title: "The Mysteries of the Quantum World",  
        description: "Discover the principles of quantum mechanics, including wave-particle duality, uncertainty, and the quantum behavior of particles.", 
        points: 10,
        icon: "https://img.icons8.com/color/48/quantum-physics.png",
        models: ["schrodingerCat", "Quantum_Computer","Tesla_Coil"] 
      },
    ],
  },
  IOT: {
    key: "IOT",
    name: "Internet of Things (IoT)",
    chapters: [
      {
        key: "ArduinoUno",
        name: "Arduino Uno",
        title: "Building the Future: Arduino Uno",  
        description: "Learn about the Arduino Uno, a microcontroller board used in IoT projects for automating devices and systems.", 
        points: 10,
        icon: "https://img.icons8.com/color/48/arduino.png",
        models: ["arduinoUno", "esp8266", "RFID"] 
      },
    ],
  },
};

module.exports = { subjectsData };
