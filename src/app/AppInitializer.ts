import {configureStore} from 'state/StateInitializer';
import {rootSaga} from 'state/ducks';

const initAsync = async () => {
  await configureStore(rootSaga);
};

export {
  //
  initAsync,
};
