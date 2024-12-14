import styled from "@emotion/styled";

export const Selectors__wrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
  background-color: white;
  gap: 20px;
  input {
    width: 200px;
    padding: 15px 10px;
    border-radius: 8px;
  }
  select {
    padding: 15px 10px;
    border-radius: 8px;
    font-size: 1rem;
    border-color: black;
    border: 2px solid black;
    outline-color: #2196f3;
  }
`;
export const Input_wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid black;
  input {
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    outline-color: #ffeb3b;
    border: 0;
  }
`;
export const CarName = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  img {
    width: 70px;
  }
`;
export const SetDataWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

export const Icon = styled.div`
  margin-right: 8px;
  color: #888;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
`;

export const ButtonElment = styled.button`
  background-color: black;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #333;
  }
`;
export const Location_Btn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  button a {
    text-decoration: none;
    color: #000;
  }
  button {
    width: 100%;
    background-color: #fff;
    color: #000;
  }
`;
