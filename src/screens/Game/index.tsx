import React, {useState, useEffect, useContext, useCallback} from 'react';
import {
  Container,
  Nickname,
  CardGrid,
  CardList,
  CardContainer,
  CardTitle,
  CardDescription,
  CardImage,
  ButtonCotainer,
  Button,
  ButtonText,
} from '../../styles/game';
import {AuthContext} from '../../contexts/AuthContext';
import {api} from '../../api/api';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export default function Game() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reverseOrder, setReverseOrder] = useState(false);

  const {nickname} = useContext(AuthContext);

  const updateCharacters = useCallback(({newCharacters}: any) => {
    setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
  }, []);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await api.get(`/character/?page=${currentPage}`);
      const newCharacters = response.data.results.slice(
        0,
        currentPage === 1 ? 5 : 1,
      );
      const updatedCharacters = [...characters, ...newCharacters];
      setCharacters(updatedCharacters.slice(0, 8));
    }
    fetchCharacters();
  }, [currentPage, updateCharacters]);

  function loadMoreCharacters() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  function toggleOrder() {
    setReverseOrder(prevOrder => !prevOrder);
    setCharacters(prevCharacters =>
      [...prevCharacters].sort((a, b) => {
        if (reverseOrder) {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      }),
    );
  }

  return (
    <Container>
      <Nickname>{nickname}</Nickname>
      <CardGrid>
        <CardList
          data={characters}
          numColumns={3}
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}: any) => (
            <CardContainer>
              <CardTitle>{item.name.split(' ')[0]}</CardTitle>
              <CardDescription>{item.species.split(' ')[0]}</CardDescription>
              <CardImage source={{uri: item.image}} />
            </CardContainer>
          )}
        />
      </CardGrid>
      <ButtonCotainer>
        <Button onPress={loadMoreCharacters}>
          <ButtonText>Load more</ButtonText>
        </Button>
        <Button onPress={toggleOrder}>
          <ButtonText>Shuffle</ButtonText>
        </Button>
      </ButtonCotainer>
    </Container>
  );
}
