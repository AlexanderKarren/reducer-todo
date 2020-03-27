import React, { useState } from 'react';
import TodoList from './components/TodoList'
import SortedTodoList from './components/SortedTodoList'
import Settings from './components/Settings'
import { ReactSVG } from 'react-svg'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css'

export default function App() {
  const { push } = useHistory();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = event => {
    event.preventDefault();
    push(settingsOpen ? "/" : "/settings")
    setSettingsOpen(!settingsOpen);
  }
  return (
    <div className="App">
      <div className={settingsOpen ? "main-heading settings-open" :"main-heading"}><h1>Todo App 2</h1><ReactSVG src="gear.svg" onClick={toggleSettings}/></div>
      <Switch>
        <Route path="/settings"><Settings setSettingsOpen={setSettingsOpen}/></Route>
        <Route path="/:tag"><SortedTodoList /></Route>
        <Route path="/"><TodoList /></Route>
      </Switch>
    </div>
  );
}