import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';

function App() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Icon style={{ color: green[500] }}>star</Icon>
        </IconButton>
        <Typography variant="h6" color="inherit">
          Guess Icon Game
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
