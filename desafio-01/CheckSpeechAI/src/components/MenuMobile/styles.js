import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding-top: 100px;
  border-radius: 0 0 20px 25px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  position: fixed;
  z-index: 900;
  animation: moveToRight 1s ease-in-out;;
  

  > ul {
    display: flex;
    gap: 0.625rem;
    flex-direction: column;
    list-style: none;
    padding: 80px;
    font-size: 2rem;
  }

  @keyframes moveToRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
