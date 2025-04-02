import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={1500} />
      Olá mundo
    </div>
  );
}

export default App;
