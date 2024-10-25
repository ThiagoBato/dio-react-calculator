
import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";

import { Container, CalcContainer, ButtonContainer } from "./GlobalStyle";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev}${number}`);
  };

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation(null);
  };

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : "Erro";
      default:
        return currentNumber;
    }
  };

  const handleOperation = (op) => {
    if (!firstNumber) {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation(op);
    } else if (operation) {
      const result = calculate();
      setFirstNumber(String(result));
      setCurrentNumber('');
      setOperation(op);
    }
  };

  const handleResult = () => {
    if (firstNumber && operation && currentNumber) {
      const result = calculate();
      setCurrentNumber(String(result));
      setFirstNumber('');
      setOperation(null);
    }
  };

  return (
    <>
      <Container>
        <div>
          <h1>Desafio Calculadora React</h1>
          <CalcContainer>
            <Input value={currentNumber || firstNumber} />
            <ButtonContainer>
              {[1, 2, 3].map((num) => (
                <Button key={num} label={num} onClick={() => handleAddNumber(num.toString())} />
              ))}
              <Button label={'+'} onClick={() => handleOperation('+')} />
              {[4, 5, 6].map((num) => (
                <Button key={num} label={num} onClick={() => handleAddNumber(num.toString())} />
              ))}
              <Button label={'-'} onClick={() => handleOperation('-')} />
              {[7, 8, 9].map((num) => (
                <Button key={num} label={num} onClick={() => handleAddNumber(num.toString())} />
              ))}
              <Button label={'*'} onClick={() => handleOperation('*')} />
              <Button label={'AC'} onClick={handleClear} />
              <Button label={0} onClick={() => handleAddNumber('0')} />
              <Button label={'='} onClick={handleResult} />
              <Button label={"/"} onClick={() => handleOperation('/')} />
            </ButtonContainer>
          </CalcContainer>
        </div>
      </Container>
    </>
  );
};

export default App;
