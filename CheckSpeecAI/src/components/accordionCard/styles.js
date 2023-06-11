import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;

  > header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 12px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    cursor: pointer;

    > h3 {
      font-size: 1.2rem;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      &:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.BLUE_300};
      font-size: 1.4rem;
    }
  }

  > main {
    padding: 20px 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 0 0 12px 12px;
    animation: dropdown .1s forwards;
    margin-top: -10px;
    height: 150px;
    width: 100%;

    > p {
      font-size: 1rem;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  @keyframes dropdown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 150px;
    }
  }

  .card_open {
    display: flex;
  }
  .card_close {
    display: none;
  }
`;
