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
  const [ time, setTime ] = useState(0)
  const [ isActive, setIsActive ] = useState(false)
  const [ pomCount, setPomCount ] = useState(0)

  useEffect(() => {
  })

  const countdown = () => {
   //we multiply minutes by 60 to get total time in seconds
    const totalTime = time * 60
  }
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

  const handlePlay = () => {
    setIsActive(!isActive)
  }

  return (
    <AppWrapper>

      <PomWrapper>

          <DisplayContainer>
            <Timer>25:00</Timer>
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
