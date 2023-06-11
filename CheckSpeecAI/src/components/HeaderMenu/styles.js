import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 100%;
    max-height: 100vh;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 0.625rem 1rem;
    position: fixed;
    z-index: 9999;
    top: 0;
   

    > nav{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        
        .menu_mobile{
            display: flex;
            gap: 0.313rem;
            align-items: center;
        }

        .hamburgue_menu{
            display: none;
          
           > button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            
           } 

           button.button_closed{
               display: none;
           }
           button.button_open{
               display: flex;
           }

        }

        .button_traslate{
            position: relative;
            padding: 0 0.435rem;
            display: flex;
            justify-content: center;
            cursor: pointer;

            > button{
                background: transparent;
                align-items: center;
                padding: 0.063rem;
                border: solid 2px ${({theme})=> theme.COLORS.GRAY_100};
                border-radius: 4px;
                cursor: pointer;


                > span{
                    font-size: 1.125rem;
                }
            }
            .flags_menu_choose{
                display: none;
                position: absolute;
                padding: 2rem 0.635rem;
                flex-direction: column;
                gap: 0.625rem;
                cursor: pointer;
                
                > span{
                    border: solid 2px ${({theme})=> theme.COLORS.GRAY_100};
                    font-size: 1.125rem;
                }

            }

            .flags_menu_isOpen{
                display: flex;
                position: absolute;
                padding: -2rem 0.635rem;
                margin-top: 2rem;
                flex-direction: column;
                gap: 0.625rem;
                cursor: pointer;
                
                > span{
                    border: solid 2px ${({theme})=> theme.COLORS.GRAY_100};
                    font-size: 1.125rem;
                }
            }
            
        }
        
    }
   
    @media (max-width: 696px){
        nav{
            > .ul{
                display: none;
            }
            .hamburgue_menu{
            display: flex;
            }

        }
    }
    
`