import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  border: 3px solid #000;
  border-radius: 20px;
  text-align: center;
  font-family: Arial;
  font-size: 20px;
`;

const Border = styled.div`
  border-radius: 20px;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  padding: 20px;
`;
const Content = styled.h4`
  text-align: center;
  font-family: Verdana;
  font-size: 21px;
`;
const Input = styled.input`
  border: 2px solid red; 
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  outline: 0;
`;

const Button = styled.button` 
  color: #fff;
  background-color: red;
  border-radius: 20px;
  cursor: pointer;
  width: 270px;
  padding: 10px;
  outline: 0;
`;

function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const required = value => (value || typeof value === 'number' ? undefined : 'Required')

  function handleChange({ target }) {
    const { value, name } = target;

    if (name === "peso") setPeso(value);
    else if (name === "altura") setAltura(value);
  }
    function fazerCalculo(e) {
      e.preventDefault();
      if(!peso || !altura) {
        alert("Favor digitar os valores nos campos.");
      } else {
        let calculo = ((peso) / (altura * altura));
        if(calculo < 18.5) {
        alert("Seu IMC é: "+calculo.toFixed(2)+" e seu estado atual é: Magreza");
        } else if( calculo > 18.5 && calculo < 24.9) {
          alert("Seu IMC é: "+calculo.toFixed(2)+" e seu estado atual é: Normal");
        } else if (calculo > 25.0 && calculo < 29.9) {
          alert("Seu IMC é: "+calculo.toFixed(2)+" e seu estado atual é: Sobrepeso");
        } else if (calculo > 30.0 && calculo < 39.9) {
          alert("Seu IMC é: "+calculo.toFixed(2)+" e seu estado atual é: Obesidade Grau I");
        } else {
            alert("Seu IMC é: "+calculo.toFixed(2)+" e seu estado atual é: Obesidade Grave (Grau II)");
        }
    }
  }
  return <>
    
    <Title>Calculadora de IMC</Title>
    <Content>Digite o seu peso e sua altura nos campos abaixo: </Content>
    <Border>
      <Input type="number" required step="any" defaultValue={peso} 
      onChange={handleChange} placeholder="Digite seu peso..." name="peso"></Input><br/><br/>
      <Input type="number"  
      step="any" defaultValue={altura} onChange={handleChange} 
      placeholder="Digite sua altura..." name="altura"></Input><br/><br/>
      <Button onClick={fazerCalculo}>Calcular</Button>
    </Border>
    <hr/>
  </>
}

export default App;