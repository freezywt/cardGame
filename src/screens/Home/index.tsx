import React, {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {
  Container,
  Title,
  ContainerInput,
  Input,
  Button,
  ButtonText,
} from '../../styles/home';

export default function Home() {
  const {login} = useContext(AuthContext);
  const [nickname, setNickname] = useState('');

  function registerNickName() {
    if (nickname !== '') {
      login({nickname});
    }
  }

  return (
    <Container>
      <Title>Rick And Morty</Title>
      <ContainerInput>
        <Input
          placeholder="Your best nickname"
          placeholderTextColor="#505050"
          value={nickname}
          onChangeText={setNickname}
        />
        <Button onPress={() => registerNickName()}>
          <ButtonText>Enter</ButtonText>
        </Button>
      </ContainerInput>
    </Container>
  );
}
