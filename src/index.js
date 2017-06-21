import App from './App';
import { AppRegistry } from 'react-native';
import registerServiceWorker from './registerServiceWorker';

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });
registerServiceWorker();
