import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImagemTopo = styled.Image`
  position: absolute;
  width: 453px;
  height: 411px;
  left: 0px;
  top: -6px;
`;

export const BaseBranca = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 312px;
  bottom: 0px;
  background: #f6f5f5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.Image`
  position: relative;
  width: 114px;
  height: 98px;
`;
export const TitleText = styled.Text`
  position: relative;
  width: 50%;
  height: 80px;
  margin-top: 15px;
  text-align: center;

  font-family: 'AlikeAngular-Regular';
  font-size: 34px;
  color: #8f0d62;
`;
export const SubText = styled.Text`
  position: relative;
  margin-top: 15px;
  text-align: center;
  font-family: 'AlikeAngular-Regular';
  font-size: 17px;
  color: #df80be;
  margin-bottom: 5px;
`;
export const Button = styled(RectButton)`
  position: relative;
  margin-top: 15px;
  width: 80%;
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
  letter-spacing: 2.5px;
`;
