import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export function Menu() {
  return (
    <Container>
      <Code>
        <QRCode 
          value="https://www.instagram.com/sergio.cmcc/"
          size={90}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        {/* NavItem */}

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        {/* NavItem */}

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurações do cartão</NavText>
        </NavItem>
        {/* NavItem */}

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do APP</NavText>
        </NavItem>
        {/* NavItem */}
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}