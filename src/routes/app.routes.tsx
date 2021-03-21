import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Catalogo from '../pages/Catalogo';
import CarouselVestidos from '../pages/Categorias/Vestidos';
import CarouselBlusas from '../pages/Categorias/Blusas';
import CarouselConjuntos from '../pages/Categorias/Conjuntos';
import CarouselColecaoNoivas from '../pages/Categorias/ColecaoNoivas';
import CarouselLiquidacao from '../pages/Categorias/Liquidacao';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Catalogo" component={Catalogo} />
    <App.Screen name="Vestidos" component={CarouselVestidos} />
    <App.Screen name="Blusas" component={CarouselBlusas} />
    <App.Screen name="Conjuntos" component={CarouselConjuntos} />
    <App.Screen name="ColecaoNoivas" component={CarouselColecaoNoivas} />
    <App.Screen name="Liquidacao" component={CarouselLiquidacao} />
  </App.Navigator>
);

export default AppRoutes;
