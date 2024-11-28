import styled from "@emotion/styled";

export const Selectors__wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
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
  padding: 10px;
  border-radius: 8px;
  input {
    width: 90%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    outline-color: #ffeb3b;
    border: 0;
  }
`;
