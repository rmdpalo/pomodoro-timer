import styled from 'styled-components'

//breakpoints used in chrome dev tools
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

//create media queries using the breakpoints above.
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const AppWrapper = styled.div`
margin: 0;
padding: 0;
`

export const PomWrapper = styled.div`
display: flex;
flex-direction:column;
background-color: pink;
justify-content: space-around;
align-items: center;
width: 800px;
height: 600px;
margin: auto;

@media ${device.mobileL} {
  max-width: 400px;
  max-height: 300px;
}

@media ${device.laptop} {
  max-width: 800px;
  max-height: 500px;
}
`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
color: white;
border: 3px solid black;
border-radius: 10px;
width: 100px;
font-size: 16px;
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
`

export const DisplayContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const Pom = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: red;
`

export const PomContainer = styled.div`
display: flex;
width: 100px;
justify-content: space-around;
`

export const Timer= styled.p`
font-size: 40px;
font-weight: 600;
margin: 0;
padding: 0;
`