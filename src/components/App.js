import React, { Fragment, useEffect } from 'react';
import { get } from 'utils/requests';

import { Counter } from 'components/counter/Counter';
import Titlebar from 'components/titlebar/Titlebar';

import logo from 'logo.png';
import styles from 'components/App.module.scss';

function App() {
  return (
    <Fragment>
      <Titlebar />

      <div className={ styles.app }>
        <header className={ styles['app-header'] }>
          <img src={ logo } className={ styles['app-logo'] } alt="logo" />
          <Counter />
        </header>
      </div>
    </Fragment>
  );
}

export default App;
