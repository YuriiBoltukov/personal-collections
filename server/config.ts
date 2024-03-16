import { ConnectOptions } from 'mongoose';

interface Config {
  mongodb: {
    uri: string;
    options: ConnectOptions;
  };
}

export const config: Config = {
  mongodb: {
    uri: 'mongodb+srv://admin:<password>@personalcollections.rllwvoo.mongodb.net/?retryWrites=true&w=majority&appName=personalCollections',
    options: {
      user: 'admin',
      pass: 'DyXmNXc1KTinWY2n',
    },
  },
};
