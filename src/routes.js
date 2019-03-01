import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import BuscaAlunos from './pages/BuscaAlunos';
import Documentacao from './pages/Documentacao';
import Recados from './pages/Recados';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Documentacao: {
    screen: Documentacao,
  },
  BuscaAlunos: {
    screen: BuscaAlunos,
  },
  Recados: {
    screen: Recados,
  },
});

export default createAppContainer(AppNavigator);
