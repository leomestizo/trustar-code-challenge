import React from 'react';
import { Provider } from 'react-redux';
import Notifications from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import ProjectsView from 'core/projects/components/ProjectsView';

import store from '../store';

import styles from './app.less';

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <Notifications />
      <ProjectsView />
    </div>
  </Provider>
);

export default App;
