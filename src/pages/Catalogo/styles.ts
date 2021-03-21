import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff0fa;
`;

export const Header = styled.View`
  height: 20%;
  width: 100%;
`;
export const Voltar = styled.TouchableOpacity`
  margin-left: 15px;
  margin-top: 25px;
`;
export const Title = styled.Text`
  font-family: 'AlikeAngular-Regular';
  font-size: 34px;
  margin-top: 20px;
  color: #8f0d62;
  margin-left: 15px;
`;
export const LinhaTitle = styled.View`
  width: 100%;
  height: 4px;
  background: #fac3e7;
`;
export const CorpoBlocoScroll = styled.ScrollView``;
export const CorpoBloco = styled.View`
  flex-direction: row;
`;
export const CorpoEsquerdo = styled.View``;
export const CorpoDireito = styled.View``;

export const Card = styled.View`
  margin-top: 5px;
  margin-left: 5%;
  background: #fac3e7;
  width: 177px;
  height: 211px;
  border-radius: 8px;
`;
export const BoxFotoCard = styled.View`
  width: 100%;
  height: 65%;
`;
export const BotaoTouch = styled.TouchableOpacity``;

export const FotoCard = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;

  border-radius: 8px;
`;
export const DescriptionCard = styled.Text`
  left: 9%;
  font-family: 'RobotoSlab-Medium';
  color: #8f0d62;
  font-size: 18px;
  margin-top: 5px;
`;
export const ItensDoCard = styled.Text`
  color: #b0197c;
  font-family: 'RobotoSlab-Regular';
  font-size: 12px;
  margin-left: 17px;
  margin-top: 3px;
`;
