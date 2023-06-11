import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-top: 20px;

    > button{
        padding: 0.625rem 0.75rem;
        border-radius: 8px;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_10};
        background: ${({theme}) => theme.COLORS.BLUE_300};
        cursor: pointer;
        transition: ease .5s;

        &:hover{
           background: ${({theme}) => theme.COLORS.BLUE_300} ;
        }
    }
    
    .buttonTransparent{
        background: ${({theme}) => theme.COLORS.BACKGROUND_900} ;

          
    }
   
`

