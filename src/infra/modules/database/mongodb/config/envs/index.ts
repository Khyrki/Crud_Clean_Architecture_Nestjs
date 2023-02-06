interface IConfigEnviroment {
  [key: string]: string;
}

export const mongoConfigEnviroments = (): IConfigEnviroment => {
  const envs = {
    MONGO_DB_HOST: null,
    MONGO_DB_PORT: null,
    MONGO_DB_USER: null,
    MONGO_DB_PASS: null,
    MONGO_DB_NAME: null,
  };

  Object.keys(envs).forEach((env) => {
    if (!process.env[env]) {
      throw new Error(`Não foi possivel encontrar a vairavel: ${env}`);
    }
    envs[env] = process.env[env];
  });

  return envs;
};
