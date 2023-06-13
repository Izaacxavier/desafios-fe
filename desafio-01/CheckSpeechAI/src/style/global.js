import { createGlobalStyle } from "styled-components";
import backgroundImage from '../assets/background.png'


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }

    body{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: 'Inter', sans-serif;
        height: 100vh;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        background-image: url(${backgroundImage});
        background-position: right;
        background-size: 500px;
        background-repeat: no-repeat;
        padding-top: 40px;
        overflow-x: hidden;
        
    }
    a{
        color:${({ theme }) => theme.COLORS.GRAY_100};
        text-decoration: none;
        transition: ease-in-out .3s;;
    }
    a:hover{
        color:${({ theme }) => theme.COLORS.WHITE_100};
        
    }


    //Framer motion

    #hero{
        padding-top: 5rem;
        width: 100%;
        position: absolute;
    }

// Responsividade
    @media (max-width: 768px){
    
    html{
      font-size: 12px;
     
    }
  }

`;
