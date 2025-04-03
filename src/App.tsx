import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1200}
        shortRestTime={300}
        longRestTime={500}
        cycles={4}
      />
    </div>
  );
}

export default App;
