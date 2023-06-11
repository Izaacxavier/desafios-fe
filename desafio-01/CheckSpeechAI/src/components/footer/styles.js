import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > .footer_container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 10rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    

    > .content_1,
    .content_1 {
      width: 250px;
      text-align: start;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      > p {
        padding-top: 10px;
      }
    }

    > .social {
      width: 250px;

      > div {
        display: flex;
        padding-top: 50%;
      }

      svg {
        font-size: 26px;
      }
    }
  }

  .copyright {
    padding: 5px;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

`;
