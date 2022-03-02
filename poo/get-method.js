class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name
    this.monthlyProcessedLoad = monthlyProcessedLoad
  };

  get weeklyProcessedLoad() { //Retorna o valor como uma variável
    return this.monthlyProcessedLoad / 4
  };
};

let resourceProcessor = new ResourceProcessStation('Gaia', 500);

console.log(resourceProcessor.weeklyProcessedLoad);

resourceProcessor.monthlyProcessedLoad = 600;

console.log(resourceProcessor.weeklyProcessedLoad);
