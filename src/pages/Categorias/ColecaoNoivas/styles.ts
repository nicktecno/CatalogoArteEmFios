import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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

export const Button = styled(RectButton)`
  position: relative;
  margin-top: 30px;
  width: 300px;
  height: 60px;
  background: #ffcbed;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'AlikeAngular-Regular';
  color: #71064c;
  font-size: 20px;
  letter-spacing: 2px;
`;
