import './App.css';
import NotesContainer from './components/NotesContainer';
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Trash from './components/Trash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Note from './components/Note';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={NotesContainer} />
            <Route path="/trash" exact component={Trash} />
            <Route path="/note" exact component={Note} />
          </Switch>
          <Overlay />
      </div>
    </Router>
  );
}

export default App;
