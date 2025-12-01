import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/student" component={StudentDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
