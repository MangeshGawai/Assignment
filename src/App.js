import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core'
import { ListTask } from "./task/ListTask";
import { AddTask } from "./task/AddTask";

function App() {
  return (
    <div className="App">
      <Typography variant="h3" component="h3">Todos</Typography>
      <div >
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
