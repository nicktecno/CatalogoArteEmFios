/* eslint-disable camelcase */
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import Blusas from '../../assets/blusas.jpeg';
import Vestidos from '../../assets/vestidos.jpeg';
import Colecao from '../../assets/colecao.jpeg';
import Conjuntos from '../../assets/conjuntos.jpg';
import Liquidacao from '../../assets/liquidacao.jpg';

import vestidosLength from '../../DATA/vestidos.json';
import blusasLength from '../../DATA/blusas.json';
import conjuntosLength from '../../DATA/conjuntos.json';
import colecaoNoivasLength from '../../DATA/colecaoNoivas.json';
import liquidacaoLength from '../../DATA/liquidacao.json';

import {
  Container,
  Header,
  Voltar,
  Title,
  LinhaTitle,
  CorpoEsquerdo,
  CorpoDireito,
  Card,
  FotoCard,
  DescriptionCard,
  CorpoBloco,
  CorpoBlocoScroll,
  BoxFotoCard,
  ItensDoCard,
  BotaoTouch,
} from './styles';

export function Catalogo(): JSX.Element {
  const navegacao = useNavigation();
  const { navigate } = useNavigation();

  const VoltarAtras = useCallback(() => {
    navegacao.goBack();
  }, [navegacao]);

  const LiquidacaoSoma = liquidacaoLength;
  const LiquidacaoLength = LiquidacaoSoma.length;
  const IrLiquidacao = useCallback(() => {
    navigate('Liquidacao');
  }, [navigate]);

  const ColecaoNoivasSoma = colecaoNoivasLength;
  const ColecaoNoivasLength = ColecaoNoivasSoma.length;
  const IrColecaoNoivas = useCallback(() => {
    navigate('ColecaoNoivas');
  }, [navigate]);

  const ConjuntosSoma = conjuntosLength;
  const ConjuntosLength = ConjuntosSoma.length;
  const IrConjuntos = useCallback(() => {
    navigate('Conjuntos');
  }, [navigate]);

  const BlusasSoma = blusasLength;
  const BlusasLength = BlusasSoma.length;
  const IrBlusas = useCallback(() => {
    navigate('Blusas');
  }, [navigate]);

  const VestidosSoma = vestidosLength;
  const VestidosLength = VestidosSoma.length;
  const IrVestidos = useCallback(() => {
    navigate('Vestidos');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <Voltar onPress={VoltarAtras}>
          <Icon name="chevron-left" size={24} color="#8f0d62" />
        </Voltar>
        <Title>Categorias</Title>
        <LinhaTitle />
      </Header>
      <CorpoBlocoScroll>
        <CorpoBloco>
          <CorpoEsquerdo>
            <BotaoTouch onPress={IrBlusas}>
              <Card>
                <BoxFotoCard>
                  <FotoCard source={Blusas} />
                </BoxFotoCard>
                <DescriptionCard>Blusas</DescriptionCard>
                <ItensDoCard>({BlusasLength})</ItensDoCard>
              </Card>
            </BotaoTouch>

            <BotaoTouch onPress={IrVestidos}>
              <Card>
                <BoxFotoCard>
                  <FotoCard source={Vestidos} />
                  <DescriptionCard>Vestidos</DescriptionCard>
                  <ItensDoCard>({VestidosLength})</ItensDoCard>
                </BoxFotoCard>
              </Card>
            </BotaoTouch>

            <BotaoTouch onPress={IrLiquidacao}>
              <Card>
                <BoxFotoCard>
                  <FotoCard source={Liquidacao} />
                  <DescriptionCard>Liquidação</DescriptionCard>
                  <ItensDoCard>({LiquidacaoLength})</ItensDoCard>
                </BoxFotoCard>
              </Card>
            </BotaoTouch>
          </CorpoEsquerdo>

          <CorpoDireito>
            <BotaoTouch onPress={IrColecaoNoivas}>
              <Card>
                <BoxFotoCard>
                  <FotoCard source={Colecao} />
                  <DescriptionCard>Coleção Noivas</DescriptionCard>
                  <ItensDoCard>({ColecaoNoivasLength})</ItensDoCard>
                </BoxFotoCard>
              </Card>
            </BotaoTouch>

            <BotaoTouch onPress={IrConjuntos}>
              <Card>
                <BoxFotoCard>
                  <FotoCard source={Conjuntos} />
                  <DescriptionCard>Conjuntos</DescriptionCard>
                  <ItensDoCard>({ConjuntosLength})</ItensDoCard>
                </BoxFotoCard>
              </Card>
            </BotaoTouch>
          </CorpoDireito>
        </CorpoBloco>
      </CorpoBlocoScroll>
    </Container>
  );
}

export default Catalogo;
