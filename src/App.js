import React, { useState, useEffect } from 'react';
import { 
  AppWrapper,
  Button,
  ButtonContainer,
  DisplayContainer,
  Pom,
  PomContainer,
  PomWrapper,
  Timer,
} from './App.modulecss';

const App = () => {
  //hook for the pomodoro time
  const [ minutes, setMinutes ] = useState('')
  const [ time, setTime ] = useState(5 * 60)
  const [ count, setCount] = useState(0)
  const [ isActive, setIsActive ] = useState(false)
  const [ pomCount, setPomCount ] = useState(0)

  /*
  User inputs amt of minutes


  for display 
  - minutes: time / 60
  - seconds: time % 60
  <Timer>{minutes}:{seconds}</Timer>

  logic to countdown 
  - while time > 0
    - time -= 1
  

  */

  useEffect(() => {
    if(isActive === true){
      setInterval(setTime(time - 1),1000)
    }
    console.log(time)
  },[time])

  const handlePlay = () => {
    setIsActive(!isActive)
  }

  return (
    <AppWrapper>

      <PomWrapper>

          <DisplayContainer>
            <Timer>{Math.floor(time / 60)}:{time%60 == 0?'00': time%60}
            </Timer>
          </DisplayContainer>
          
          <PomContainer>
            <Pom />
            <Pom />
            <Pom />
            <Pom />
          </PomContainer>

        <ButtonContainer>

          <Button onClick={handlePlay}>
            <p>{isActive ? 'Pause' : 'Start'}</p>
          </Button>
          {/*<Button>
            <p>Set Time</p>
          </Button>*/}

        </ButtonContainer>

      </PomWrapper>

    </AppWrapper>
  );
}

export default App;
