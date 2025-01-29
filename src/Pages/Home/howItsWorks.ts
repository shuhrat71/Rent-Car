import styled from "@emotion/styled";

export const Rental_Process = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const Process_title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 190px;
  font-weight: 600;
  margin-bottom: 4rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    width: 600px;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
`;
export const Process_img = styled.div`
  width: 740px;
  height: 638px;
  border-radius: 24px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 10px;
  img {
    width: 500px;
    position: absolute;
    left: 120px;
    right: 20px;
  }
`;
export const JourneyStepsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const JourneyStepsCards = styled.div`
  width: 600px;
  padding: 25px 20px;
  border: 1px solid #f5f5f5;
  border-radius: 24px;
  margin: 10px;
  display: flex;
  gap: 16px;
`;
export const JourneyStepsText = styled.div`
  width: 500px;
  padding-top: 10px;
  font-size: 16px;
`;
export const JourneyStepsIcon = styled.div`
  width: 24px;
  padding: 30px 16px;
  background-color: #f5f5f5;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const JourneyStepsTitle = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 700;
  }
`;
