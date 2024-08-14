const subjectsData = {
  botany: {
    key: "botany",
    name: "Botany",
    chapters: [
      {
        key: "celltheory",
        name: "Structure of Cell",
        title: "The Fundamental Unit of Life: Cell Theory",  
        description: "An in-depth look at the structure and function of cells.", 
        points: 10,
        icon: "https://img.icons8.com/color-glass/48/eukaryotic-cells.png",
        models: ["animalCell", "eeukCell", "neuron"] 
      },
      {
        key: "enzymes",
        name: "Enzymes",
        title: "Catalysts of Life: Enzymes",
        description: "Explore the role of enzymes in biological processes.",
        points: 10,
        icon: "https://img.icons8.com/color-glass/48/eukaryotic-cells.png",
        models: ["enzymeModel1", "enzymeModel2"] 
      },
      {
        key: "circulatorysystem",
        name: "Circulatory System",
        title: "The Heart of Life: Circulatory System",
        description: "Detailed study of the circulatory system in plants and animals.",
        points: 10,
        icon: "https://img.icons8.com/color-glass/48/eukaryotic-cells.png",
        models: ["circulatoryModel1"] 
      },
    ],
  },
};

module.exports = { subjectsData };
