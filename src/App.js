import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogCarga from "./Body/components/DialogCarga/DialogCarga";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DialogLab from './Body/components/DialogLab/DialogLab';

document.body.style = 'background: #060609;';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/" exact>
            <DialogCarga />
          </Route>
          <Route path="/Lab">
            <DialogLab/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
