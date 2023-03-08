import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fefefe;
`;

export const ContainerInput = styled.View.attrs({
  //elevation: 1,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  border: 1.5px solid #353535;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: #454545;
`;

export const Input = styled.TextInput`
  background-color: #f2f4f5;
  border: 1.5px solid #353535;
  color: #353535
  border-radius: 5px;
  width: 95%;
  padding: 5px 10px 5px 10px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f2f4f5;
  border: 1.5px solid #353535;
  border-radius: 5px;
  width: 95%;
  padding: 10px 0px 10px 0px;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: #353535;
  font-weight: 600;
  font-size: 17px;
`;
