import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import { default as Dashboard } from './components/Dashboard/Dashboard';
import { default as FormWizard } from './components/FormWizard/FormWizard'
import { default as Error } from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="formwizard" element={<FormWizard />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
