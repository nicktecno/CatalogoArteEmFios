import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  position: relative;
  width: 100%;
  height: 60px;
  background: #ffcbed;
  border-radius: 10px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #71064c;
  font-size: 18px;
`;
