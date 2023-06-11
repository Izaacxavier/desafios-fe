import styled from "styled-components";


export const Container = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.WHITE_200};
  height: 100%;
  border-radius: 12px;

  > div {
    width: 100%;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: 1s;
    font-size: 0.875rem;
    letter-spacing: 0.08em;
  }
  .isMensal {
    background: ${({ theme }) => theme.COLORS.BLUE_300};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .isAnual {
    background: ${({ theme }) => theme.COLORS.WHITE_200};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

`;
