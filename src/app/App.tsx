import React, {useState} from 'react';
import {Provider} from 'react-redux';
import Routes from 'routes/Routes';
import {getStore} from 'state';
import AppLoading from 'app/AppLoading';
import {initAsync} from './AppInitializer';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from 'theme';
import '../assets/scss/index.scss';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleError = (e: any) => {
    // eslint-disable-next-line no-console
    console.log('eee', e);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={async () => {
          await initAsync();
        }}
        onFinish={() => setIsReady(true)}
        onError={handleError}
      />
    );
  }

  return (
      <Provider store={getStore()}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
  );
};

export default App;
