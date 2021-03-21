/* eslint-disable camelcase */

import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Voltar } from '../../Catalogo/styles';
import { ButtonText, Header, LinhaTitle, Title } from './styles';
import { Button } from './styles';
import Data from '../../../DATA/vestidos.json';

const { width, height } = Dimensions.get('screen');

const DATA = Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CarouselVestidos(): JSX.Element {
  const navegacao = useNavigation();

  const VoltarAtras = useCallback(() => {
    navegacao.goBack();
  }, [navegacao]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header>
        <Voltar onPress={VoltarAtras}>
          <Icon name="chevron-left" size={24} color="#8f0d62" />
        </Voltar>
        <Title>Categorias</Title>
        <LinhaTitle />
      </Header>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: 'center', padding: 20 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={{ uri: item.avatar_url }}
                  style={{
                    width: width / 1.1,
                    height: height / 1.1,
                    maxHeight: 350,
                    resizeMode: 'contain',
                    borderRadius: 8,
                  }}
                />
              </View>
              <View style={{ flex: 0.2 }}>
                <Text
                  style={{
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '800',
                    color: '#8f0d62',
                    fontSize: 26,
                    marginTop: 30,
                    marginBottom: 10,
                  }}
                >
                  {item.nome}
                </Text>

                <Text
                  style={{
                    fontFamily: 'RobotoSlab-Regular',
                    fontWeight: '300',
                    fontSize: 15,
                    color: '#df80be',
                  }}
                >
                  {item.descricao}
                </Text>
              </View>
              <View style={{ flex: 0.1, marginTop: 70 }}>
                <Button onPress={() => Linking.openURL(`${item.linkSite}`)}>
                  <ButtonText>Confira no site</ButtonText>
                </Button>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
