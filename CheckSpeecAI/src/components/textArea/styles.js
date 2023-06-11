import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 300px;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  padding: 14px;
  outline: none;
  color: ${({theme})=> theme.COLORS.WHITE_100};
  font-size: 1rem;
  

  &:focus{
        outline: trasparent;
        box-shadow: 0 0 0 2px ${({theme}) => theme.COLORS.BLUE_300}
    }
`;
