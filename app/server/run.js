exports.Server = class {
  constructor() {}
  static run(...service) {
    service.forEach(s => {
      s.start();
    });
  }
};
