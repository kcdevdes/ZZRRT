import { config as localConfig } from './config.local';
import { config as devConfig } from './config.prod';
// import { config as prodConfig } from './config.prod';

const getConfig = () => {
  switch (process.env.APP_ENV) {
    case 'local':
      return localConfig;
    case 'dev':
      return devConfig;
    // case 'prod':
    //   return prodConfig;
    default:
      return localConfig; // 기본값으로 로컬 설정 사용
  }
};

export const config = getConfig();
