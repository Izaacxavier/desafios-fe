import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0rem 8rem;
   
  .title {
    width: 31.25rem;
  
    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 3rem;
      line-height: 110%;
      position: relative;

      > span {
        color: transparent;
        -webkit-background-clip: text;
        -webkit-font-smoothing: antialiased;
        background-clip: text;
        background-clip: text;
        background-image: linear-gradient(
          90deg,
          rgb(147, 197, 253),
          rgb(85, 152, 222) 24%,
          rgb(59, 130, 246) 45%,
          rgb(37, 99, 235) 86%,
          rgb(37, 99, 235)
        );
      }
    }
    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.2rem;
      margin-top: 0.625rem;
      letter-spacing: 0.06em;
      line-height: 160%;
      position: relative;
    }
  }

  .button_container{
    width: 12.5rem;
    position: relative;
  }

  // Responsividade
  @media (max-width: 768px){
    padding: 1rem 2rem;
    
  }

  @media (max-width: 450px){
    .title{
      width: 27rem;
      h1 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 2.5rem;
  }
    }
    
  
}
`;
