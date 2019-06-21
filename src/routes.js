import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import BuscaAlunos from './pages/Busca';
import Documentacao from './pages/Documentacao';
import Recados from './pages/Recados';
import Detalhes from './pages/Detalhes';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
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
  Detalhes: {
    screen: Detalhes,
  },
  Cadastro: {
    screen: Cadastro,
  },
});

export default createAppContainer(AppNavigator);
