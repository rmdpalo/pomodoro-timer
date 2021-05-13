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
  const [ minutes, setMinutes ] = useState(25)
  const [ seconds, setSeconds ] = useState(0)
  const [ isActive, setIsActive ] = useState(false)

  //handles counting down of time
  const handleTime = () => {
    //if both the minutes and seconds are at 0. return.
    if(minutes === 0 && seconds === 0) {
      return;
    //if the seconds are at 0, decrement minutes by one and set seconds to 59
    }else if(seconds === 0) {
      setMinutes(minutes -= 1)
      setSeconds(59)
    } else {
      setSeconds(seconds -= 1)
    }

  }

  return (
    <AppWrapper>

      <PomWrapper>

          <DisplayContainer>
            <Timer>25:00</Timer>
          </DisplayContainer>
          
          <PomContainer>
            <Pom></Pom>
            <Pom></Pom>
            <Pom></Pom>
            <Pom></Pom>
          </PomContainer>

        <ButtonContainer>

          <Button>
            <p>{isActive ? 'Pause' : 'Start'}</p>
          </Button>
          <Button>
            <p>Set Time</p>
          </Button>

        </ButtonContainer>

      </PomWrapper>

    </AppWrapper>
  );
}

export default App;
