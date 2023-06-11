import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  margin-top: 10px;
 

  > input {
    height: 40px;
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    outline: none;
    border: none;
    color: ${({theme})=> theme.COLORS.WHITE_100};
    font-size: 14px;
  }

  > input:focus{
        outline: trasparent;
        box-shadow: 0 0 0 2px ${({theme}) => theme.COLORS.BLUE_200}
    }
  > svg{
    display: flex;
    align-self: center;
    margin-left: 10px;
    font-size: 20px;
    
  }

`;
