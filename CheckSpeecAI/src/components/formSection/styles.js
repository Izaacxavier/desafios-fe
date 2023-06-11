import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

  > h2 {
    text-align: start;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    padding: 0 8rem;
    padding-top: 8rem;
  }
  > p {
    text-align: start;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: 1rem;
    padding: 0 8rem;
  }

  .button_content {
    display: flex;
    justify-content: end;
    width: 100%;

  

    > div {
      width: 18.75rem;
      padding: 0 1.25rem;
    }
  }


  .input_terms{
    display: flex;
    gap: 5px;
    .input_check{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid ${({theme})=> theme.COLORS.WHITE_100};
      background: solid ${({theme})=> theme.COLORS.GRAY_100};
      position: absolute;
      padding: 5px;
      justify-content: center;

      > svg{
        display: flex;
        color: ${({theme}) => theme.COLORS.GREEN};
        font-size: 1.5rem;
        margin-top: -15px;
        margin-left: -10px;
        position: absolute;

      }
      > svg.isinvisible{
        display: none;

      }
    }
    > input{
      position: relative;
      opacity: 0;
     
    }
  
   
  }
  // Responsividade
  @media (max-width: 768px) {
    .button_content {
      padding: 0;
    }
    > h2 {
      font-size: 2rem;
      padding: 0 1rem;
    }
    > p {
      padding: 0 1rem;
    }
  }
`;
export const Form = styled.form`
  padding: 3.75rem 6.25rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    gap: 15px;
    align-items: center;
   

    > label {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1rem;
    }
  }

  > label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1rem;
  }

  // Responsividade
  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem;
    .button_content {
      padding: 0;
    }
  }

  @media (max-width: 450px){
     .group_one, .group_two{
      flex-wrap: wrap;
    }
  }
`;
