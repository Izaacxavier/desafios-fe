import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  margin-top: 10px;
  position: relative;

  > .select {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    outline: none;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

    .flags {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

      img {
        width: 40px;
        padding: 5px;
      }

      > input {
        background: transparent;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
    .button_dropdown {
      width: 40px;
      display: flex;
      justify-content: center;

      svg {
        cursor: pointer;
      }
    }
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
    background: red;
  }

  .dropDown_options {
    position: absolute;
    height: 18rem;
    width: 100%;
    border-radius: 8px;
    padding: 5px 5px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 22rem;
    display: none;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    

    img {
      width: 30px;
      height: 30px;
      border: solid 1px ${({ theme }) => theme.COLORS.GRAY_100};
    }
    span {
      position: relative;
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 6px;
      cursor: pointer;

      > span{
        position: absolute;
        opacity: 0;
      }
      &:hover {
        background: ${({ theme }) => theme.COLORS.BLUE_300};
      }
    }
  }
  .dropDown_options.is-open{
    display: flex;
  }
`;
