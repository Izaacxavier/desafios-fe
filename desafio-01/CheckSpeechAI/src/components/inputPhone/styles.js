import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  margin-top: 10px;
 
  &:focus {
    outline: trasparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.BLUE_200};
  }

   .input_code{
      width: 5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
    }

  > input {
    height: 40px;
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    outline: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 14px;

  }

  .select { 
    position: relative;
    height: 40px;
    max-width: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    outline: none;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-right: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
    
    > svg{
      cursor: pointer;
    }
    img {
      width: 40px;
      padding: 5px;
    }
   
  }

  .dropdown_options {
    position: absolute;
    height: 18rem;
    min-width: 300%;
    border-radius: 8px;
    padding: 5px 5px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 22rem;
    margin-left: 10rem;
    display: none;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 700;

    img {
      width: 30px;
      height: 30px;
      border: solid 1px ${({ theme }) => theme.COLORS.GRAY_100};
    }
    span {
      position: relative;
      width: 100%;
      display: flex;
      font-size: 0.85rem;
      padding-bottom: 0.5rem;
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      &:hover {
        background: ${({ theme }) => theme.COLORS.BLUE_300};
      }

      > span{
        position: absolute;
        width: 100%;
        opacity: 0;
      }
    }
  }

  .dropdown_options.is-open{
    display: flex;
  }
`;
