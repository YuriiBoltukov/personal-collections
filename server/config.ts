import { ConnectOptions } from 'mongoose';

interface Config {
  mongodb: {
    uri: string;
    options: ConnectOptions;
  };
}

export const config: Config = {
  mongodb: {
    uri: 'mongodb://localhost:27017',
    options: {
      user: 'admin',
      pass: 'DyXmNXc1KTinWY2n',
    },
  },
};
