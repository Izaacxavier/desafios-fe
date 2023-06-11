import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  

  > a {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      transition: ease-in-out 0.5s;
      &:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 1.4rem;
      border-radius: 50%;
      padding: 0.313rem 0.5rem;
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }
  }


 
`;
