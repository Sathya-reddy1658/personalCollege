let models = [
  {
    link: "https://sketchfab.com/3d-models/electromagnetic-induction-62da62419b1f409188e7a3958b6473e2/embed",
    name: "EMI",
    brief:
      "Illustrates the phenomenon of electromagnetic induction, where a voltage is induced by a changing magnetic field.",
  },
  {
    link: "https://sketchfab.com/3d-models/blood-vessel-anatomy-29ac5461ef1745fb8d92f69d92d52d7d/embed",
    name: "bloodVessels",
    brief:
      "Detailed anatomy of blood vessels, showcasing the structure of veins, arteries, and capillaries.",
  },
  {
    link: "https://sketchfab.com/3d-models/vascular-tissue-system-in-plants-004bb5e10c3a41c5ae10f8243a61be9d/embed",
    name: "Vascular_Tissue_System_in_Plants",
    brief:
      "Depicts the vascular tissue system in plants, responsible for transporting water and nutrients.",
  },
  {
    link: "https://sketchfab.com/3d-models/lysosome-6bd2957542ae4625aa0dcd180d979f9b/embed",
    name: "Lysosome",
    brief:
      "Model of a lysosome, a cell organelle involved in breaking down waste materials and cellular debris.",
  },
  {
    link: "https://sketchfab.com/3d-models/superposition-of-petase-and-mhetase-533a5c761857404aa620334d75213420/embed",
    name: "PETase_Enzyme",
    brief:
      "Shows the PETase enzyme, which breaks down plastic, highlighting its superposition with MHETase.",
  },
  {
    link: "https://sketchfab.com/3d-models/a-mechanistic-model-of-the-petase-enzyme-248ab2f9b7974680ab2917e59ed6391a/embed",
    name: "Superposition_of_PETase_and_MHETase",
    brief:
      "Displays the superposition of PETase and MHETase enzymes, crucial for plastic degradation.",
  },
  {
    link: "https://sketchfab.com/3d-models/3p-series-molded-case-circuit-breaker-f-fram-716907821d264aba8626328e8a3580e0/embed",
    name: "Molded_Case_Circuit_Breaker",
    brief:
      "Representation of a molded case circuit breaker, a safety device to protect electrical circuits from damage.",
  },
  {
    link: "https://sketchfab.com/3d-models/modular-circuit-breaker-mcb-c55306284cae4a6281c796b516cbbd04/embed",
    name: "Modular_circuit_breaker_(MCB)",
    brief:
      "A model of a modular circuit breaker (MCB), designed to automatically interrupt electrical flow in a circuit.",
  },
  {
    link: "https://sketchfab.com/3d-models/electric-fuse-cabinet-51995ea7b5a443e9b6162402052bb661/embed",
    name: "Electric_Fuse_Cabinet",
    brief:
      "Model of an electric fuse cabinet, used to house fuses that protect circuits from overload.",
  },
  {
    link: "https://sketchfab.com/3d-models/quantum-computer-af226da83f3649cb89f8c6d0e34043e5/embed",
    name: "Quantum_Computer",
    brief:
      "Visualizes a quantum computer, which leverages quantum mechanics to perform complex calculations at unprecedented speeds.",
  },
  {
    link: "https://sketchfab.com/3d-models/red-alert-tesla-coil-4bd324a642184dbe8741acd34c8854d2/embed",
    name: "Tesla_Coil",
    brief:
      "Depiction of a Tesla coil, a device used to produce high-voltage, low-current, high-frequency alternating-current electricity.",
  },

  {
    link: "https://sketchfab.com/3d-models/human-pancreas-cross-section-f7b30e11b5df445fbdfe0e262e777c85/embed",
    name: "Human_Pancreas",
    brief:
      "Cross-sectional view of the human pancreas, highlighting its role in digestion and hormone production.",
  },
  {
    link: "https://sketchfab.com/3d-models/isometric-chemistry-lab-996c0447b4654d6e8b8144993cbc6473/embed",
    name: "chemLab",
    brief:
      "Isometric view of a chemistry lab setup, ideal for educational and experimental simulations.",
  },
  {
    link: "https://sketchfab.com/3d-models/edta-calcium-complexe-f5eaad269ac6475abc99e1952408cc2d/embed",
    name: "EDTA",
    brief:
      "Model of the EDTA calcium complex, commonly used in experiments to bind metal ions.",
  },
  {
    link: "https://sketchfab.com/3d-models/stylized-simply-visualization-of-dna-51f5ab2ffc364f60be00289eb6909535/embed",
    name: "DNA",
    brief:
      "Stylized visualization of DNA, the molecule that carries genetic information in living organisms.",
  },
  {
    link: "https://sketchfab.com/3d-models/structure-of-neuron-be679731525c457cb01036fcf25afc37/embed",
    name: "neuron",
    brief:
      "Representation of a neuron, the basic working unit of the brain responsible for transmitting information.",
  },
  {
    link: "https://sketchfab.com/3d-models/eukaryotic-cell-cross-section-74f714127a8c4211bb1a2cac7195fb1a/embed",
    name: "eeukCell",
    brief:
      "Cross-section of a eukaryotic cell, showing the complex structures and organelles within.",
  },
  {
    link: "https://sketchfab.com/3d-models/animal-cell-0b15c013059844d7a26c1f16752f8b61/embed",
    name: "animalCell",
    brief:
      "Detailed model of an animal cell, highlighting the nucleus and other essential organelles.",
  },
  {
    link: "https://sketchfab.com/3d-models/atom-b505bc59e6fb48569e4f032a0734f743/embed",
    name: "atom",
    brief:
      "Visual representation of an atom, the smallest unit of ordinary matter that forms a chemical element.",
  },
  {
    link: "https://sketchfab.com/3d-models/realistic-engine-turboprop-f5ea812ccd484b34b66d127a28630863/embed",
    name: "turbine",
    brief: "Realistic Engine Turboprop",
  },
  {
    link: "https://sketchfab.com/3d-models/engine-eea9d9252ab14298b50699a471dc2cee/embed",
    name: "engine",
    brief: "Engine",
  },
  {
    link: "https://sketchfab.com/3d-models/3d-graph-multiple-linear-regression-model-be676c8f7e3942fd96ef04bcd64321ca/embed",
    name: "linReg",
    brief: "3D Graph: Multiple Linear Regression Model",
  },
  {
    link: "https://sketchfab.com/3d-models/3d-graph-of-thermodynamic-behavior-77733f8513a348a39099d0f6a346067d/embed",
    name: "thermo",
    brief: "3D Graph of Thermodynamic Behavior",
  },
  {
    link: "https://sketchfab.com/3d-models/animation-human-heart-775d6629622740de8a5ed61a959c7506/embed",
    name: "heart",
    brief:
      "Animated model of the human heart, depicting the anatomy and functioning of this vital organ.",
  },
  {
    link: "https://sketchfab.com/3d-models/skeleton-6db4f2130c544f628cb349f532d49b1b/embed",
    name: "skeleton",
    brief: "Skeleton",
  },
  {
    link: "https://sketchfab.com/3d-models/transformers-dc8b41f6657b42209b63d88d293b26dc/embed",
    name: "transformers",
    brief: "Transformers",
  },
  {
    link: "https://sketchfab.com/3d-models/arduino-uno-wifi-card-model-esp8266mod-f953d84010d346fc8b1719d79d4c4a58/embed",
    name: "esp82",
    brief: "Arduino UNO WiFi Card Model ESP8266",
  },
  {
    link: "https://sketchfab.com/3d-models/rfid-rc522-arduino-uno-compatible-16501915e98143e49930a755a87272b3/embed",
    name: "RFID",
    brief: "RFID RC522 Arduino UNO Compatible",
  },
  {
    link: "https://sketchfab.com/3d-models/arduino-uno-85e4a60ec0294e2c83fbafa6051a3681/embed",
    name: "arduinoUno",
    brief: "Arduino UNO",
  },
  {
    link: "https://sketchfab.com/3d-models/male-digestive-system-adb79910fd784d02bebe666fe0e1c640/embed",
    name: "digestionSystem",
    brief: "Male Digestive System",
  },
];

module.exports = models;
