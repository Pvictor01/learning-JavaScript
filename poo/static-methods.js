class ResourcePrecessorStation {
  constructor(name, monthlyProcessing) {
    this.name = name
    this.monthlyProcessing = monthlyProcessing
  };

  static calculateProcessInHours(monthlyProcessing, hours) {
    return monthlyProcessing / 720 * hours //720 é a quantidade de horas em um mês
  };
};

//let totalProcessing = ResourcePrecessorStation.calculateProcessInHours(500, 6); // n precisa intânciar o objeto

let processor = new ResourcePrecessorStation('Tardis', 500);

let totalProcessing = ResourcePrecessorStation.calculateProcessInHours(processor.monthlyProcessing, 6);

console.log(totalProcessing);