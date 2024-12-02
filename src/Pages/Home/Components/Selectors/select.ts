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
export const SelectBox = styled.div`
  width: 120px;
`;
export const CarName = styled.div`
  width: 100%;
  padding: 15px 0;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;
