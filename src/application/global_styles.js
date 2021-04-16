import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --black--color: #020E17;
    
    --green--color: #2FDF84;
    --light-green--color: #76D9B9;
    --dark-green--color: #2FDF84;

    --gray--color: #B7B7B7;
    --dark-gray--color: #7A7A7A;
    --light-gray--color: #E4E4E4;
    --white--color: #F3F3F1;

    --red--color: #EB5757;
    --light-red--color: #FF6F6F;
    --foreground--color: rgba(255, 255, 255, 0.02);

    --linear-gradient: linear-gradient(269.95deg, #15AB89 0.03%, #2FDF84 99.96%);

    --button-radius: 5px;
    --input-radius: 10px;
    --card-radius: 15px;

    --container-max-width: 992px;
    --container-margin-top: 65px;
    --container-vertical-padding: 5vh;
    --container-horizontal-padding: 6vw;

    --header-horizontal-padding: 6vw;
    --header-vertical-padding: 20px;
    --header-border-bottom: inset 0 -1px 0 0 hsla(0,0%,100%,0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
    width: 100%;
    min-height: 400px;
    background: var(--black--color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--white--color);
  }

  a {
    outline: none;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }
`