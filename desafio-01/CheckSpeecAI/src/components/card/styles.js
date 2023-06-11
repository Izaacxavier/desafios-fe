import styled from "styled-components";

export const Container = styled.div`
  > .card {
    width: 23.75rem;
    height: 400px;
    padding: 10px 30px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    > header {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.BLUE_300};
      padding-bottom: 15px;
      > strong {
        color: ${({ theme }) => theme.COLORS.GREEN};
      }
    }
    > main {
      padding: 0 15px;
      text-align: start;
      font-size: 1rem;
      height: 220px;

      li {
        margin-bottom: 5px;
      }
    }
    > footer {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 20px 5px;

      > strong {
        font-size: 18px;

        > span {
          font-size: 12px;
          color: ${({ theme }) => theme.COLORS.WHITE_100};
        }
      }

      > .button_container {
        padding: 0 30px;
      }
    }
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .card_enterprise {
    width: 380px;
    height: 400px;
    padding: 10px 30px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    > header {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.BLUE_300};
      padding-bottom: 15px;
    }
    > main {
      padding: 0 15px;
      text-align: start;
      font-size: 1rem;
      height: 220px;

      li {
        margin-bottom: 15px;
      }
    }
    > footer {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 20px 5px;

      span {
        display: none;
      }

      > strong {
        font-size: 18px;

        > span {
          font-size: 12px;
        }
      }

      > .button_container {
        padding: 0 30px;
      }
    }
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .card_main {
    width: 380px;
    height: 100%;
    padding: 20px 30px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: ${({ theme }) => theme.COLORS.BLUE_300};
    position: relative;

    > header {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      padding-bottom: 15px;
    }
    > main {
      padding: 0 15px;
      text-align: start;
      font-size: 1rem;

      li {
        margin-bottom: 5px;
      }
    }
    > footer {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 20px 5px;

      > .button_container {
        padding: 0 30px;
      }

      > strong {
        font-size: 18px;

        > span {
          font-size: 12px;
        }
      }
    }
  }
`;
