import styled from "styled-components";

export const Container = styled.div`
  > .card {
    width: 23.75rem;
    height: 400px;
    padding: 0.625rem 1.875rem;
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
        margin-bottom: 0.313rem;
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
        font-size: 1.125rem;

        > span {
          font-size: 0.75rem;
          color: ${({ theme }) => theme.COLORS.WHITE_100};
        }
      }

      > .button_container {
        padding: 0 1.875rem;
      }
    }
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .card_enterprise {
    width: 23.75rem;
    height: 400px;
    padding: 0.625rem 1.875rem;
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
        margin-bottom: 0.313rem;
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
        font-size: 1.125rem;

        > span {
          font-size: 0.75rem;
        }
      }

      > .button_container {
        padding: 0 1.875rem;
      }
    }
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .card_main {
    width: 23.75rem;
    height: 100%;
    padding: 1rem 1.875rem;
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
        margin-bottom: 0.313rem;
      }
    }
    > footer {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 1.25rem 0.313rem;

      > .button_container {
        padding: 0 1.875rem;
      }

      > strong {
        font-size: 1.125rem;

        > span {
          font-size: 0.75rem;
        }
      }
    }
  }
`;
