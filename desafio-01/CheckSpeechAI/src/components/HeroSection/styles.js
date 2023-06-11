import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 12px;
  padding: 0.625rem;
  

  .text_content {
    width: 100%;
    align-items: center;
    padding: 0.313rem;
    


    > strong {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 1.125rem;
    }
  }

  > .button_content {
    width: 250px;
    display: flex;
    justify-content: center;
    margin-top: -20px ;
  }

  @media (max-width: 768px){
    .text_content {
    > strong {
      font-size: 1rem;
    }
  }

}
`;
