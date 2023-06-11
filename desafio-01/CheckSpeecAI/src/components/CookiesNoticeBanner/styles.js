import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  position: fixed;
  bottom: 0;
  z-index: 9999;
  animation: getUp 1s ease forwards;

  @keyframes getUp {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 250px;
    }
  }
`;
export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-size: 0.875rem;
  .icon_content {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    > button {
      background: ${({ theme }) => theme.COLORS.BLUE_300};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border: none;
      padding: 0 12px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.COLORS.BLUE_200};
      }
    }
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > main {
    padding: 0 1rem;
  }
  > footer {
    display: flex;
    flex-direction: column;
    max-height: 150px;
    justify-content: flex-start;
    padding: 0 1rem;
    display: flex;
    padding: 0 1rem 0.625rem;

    .consenseOpen {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      max-height: 100%;
      overflow-y: scroll;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      padding: 1rem;
    }
    .consenseClosed {
      display: none;
      flex-direction: column;
      max-width: 400px;
      max-height: 100%;
      overflow-y: scroll;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      padding: 1rem;
    }


    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      cursor: pointer;
      align-self: start;
      padding: 0.625rem 0;
    }
  }
`;
