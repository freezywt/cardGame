/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  align-items: center;
  padding-top: 50px;
  height: 100%;
  width: 100%;
  background-color: #fefefe;
`;

export const Nickname = styled.Text`
  display: flex;
  text-align: right;
  width: 100%;
  color: #353535;
  margin-right: 15px;
  font-size: 20px;
`;

export const CardGrid = styled.View`
  display: flex;
  align-items: center;
  height: 87%;
`;

export const CardList = styled.FlatList`
  width: 100%;
`;

export const CardContainer = styled.View`
  border: 1.5px solid #353535;
  background-color: #f2f4f5;
  margin: 10px;
  border-radius: 5px;
`;

export const CardTitle = styled.Text`
  display: flex;
  text-align: right;
  color: #353535;
  padding: 3px;
`;

export const CardDescription = styled.Text`
  display: flex;
  text-align: right;
  color: #353535;
  padding: 3px;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 150px;
  max-width: 100px;
  max-height: 150px;
  margin: 4px;
  border-radius: 5px;
`;

export const ButtonCotainer = styled.View`
  width: 100%;
  padding-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f2f4f5;
  border: 1.5px solid #353535;
  border-radius: 5px;
  width: 40%;
  padding: 10px 0px 10px 0px;
  margin: 0 5% 0 5%;
`;

export const ButtonText = styled.Text`
  color: #353535;
  font-weight: 600;
  font-size: 17px;
`;
