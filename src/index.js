import App from './App';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });
