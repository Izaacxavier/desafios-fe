import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 1.6rem;
  margin-bottom: 2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-size: 2rem;
    padding-top: 10rem;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    font-size: 1rem;
  }

  .clientes {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;

    .group_1,
    .group_2 {
      width: 100%;
      display: flex;
      justify-content: center;

      > img {
        width: 12.5rem;
      }
    }
    .hero_content {
      padding-top: 3rem;
    }
  }

  .accordion_container {
    display: flex;
    max-width: 100%;
    justify-content: center;
    gap: 0.625rem;
    padding: 60px 80px;
  }

  .group_accordion_2,
  .group_accordion_1 {
    width: 100%;
  }

  .hero_content {
    display: flex;
    justify-content: center;
    padding: 0 6.375rem;
  }
  .text_solucoes {
    width: 100%;
    font-size: 1rem;
    padding: 0.625rem 2.25rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .cards_content {
    display: flex;
    justify-content: center;
    padding: 2.5rem 5rem;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    overflow-x: scroll;
  }
  .cards_content::-webkit-scrollbar {
    display: none;
  }

  .content_group_cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .button_switch_group {
    display: flex;
    justify-content: center;
    padding: 25px;
  }

  @media (max-width: 768px) {
    .accordion_container {
      flex-direction: column;
      padding: 2.5rem 0.313rem;
    }
    .hero_content {
      padding: 0px;
    }
    .cards_content {
      display: flex;
      justify-content: flex-start;
      padding: 2.5rem 0.313rem;
    }
  }

  @media (max-width: 950px) {
    .cards_content {
      justify-content: flex-start;
      padding: 1rem 0;
    }

    .clientes {
      padding: 1.5rem;

      .group_1,
      .group_2 {
        width: 100%;
        display: flex;
        justify-content: center;

        > img {
          width: 9.375rem;
        }
      }
    }
    @media (max-width: 450px) {
      > h2 {
        font-size: 1.6rem;
      }
    }
  }
`;
