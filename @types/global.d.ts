declare global {
  var globalString: string;

  interface GlobalInterface {
    value: unknown;
  }

  type GlobalType = {
    value: unknown;
  };

  interface globalThis {
    mongoose: any;
  }

  type mongoose = {};

  type MONGODB_URI = {};
}

export {};
