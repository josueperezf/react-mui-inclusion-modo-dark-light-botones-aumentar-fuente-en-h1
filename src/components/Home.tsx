import { useState } from "react";
import Paper from '@mui/material/Paper';
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "../App.css";
import { Button, Typography } from "@mui/material";

//* para crear botones personalizados

// declare module "@mui/material/Button" {
//   interface ButtonPropsVariantOverrides {
//     bold: true;
//   }
// }

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h1"> Vite + React </Typography>
      <div className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Paper elevation={3}>
        hola desde Paper
      </Paper>
      <p >
        Click on the Vite and React logos to learn more
      </p>
      <Typography variant="body2" color="initial"> hola</Typography>
      <Button variant="contained" color="info" >Hola a todos</Button>
    </div>
  );
};

export default Home;