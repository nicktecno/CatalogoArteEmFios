/* eslint-disable camelcase */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import {
  Container,
  ImagemTopo,
  BaseBranca,
  LogoImg,
  TitleText,
  SubText,
  Button,
  ButtonText,
} from './styles';
import blusaFuccia from '../../assets/blusa-gola-fuccia.jpg';
import logoImg from '../../assets/logo.png';

export interface Provider {
  id: string;
  nome: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { navigate } = useNavigation();

  const navigateToCatalago = useCallback(() => {
    navigate('Catalogo');
  }, [navigate]);

  return (
    <Container>
      <ImagemTopo source={blusaFuccia} />
      <BaseBranca>
        <LogoImg source={logoImg} />
        <TitleText>Catálogo da Arte em Fios</TitleText>
        <SubText>
          Aqui você poderá conhecer as variedades de roupas exclusivas da nossa
          grife e escolher qual será sua opção de compra no site
        </SubText>
        <Button onPress={navigateToCatalago}>
          <ButtonText>INICIAR</ButtonText>
        </Button>
      </BaseBranca>
    </Container>
  );
};

export default Dashboard;
