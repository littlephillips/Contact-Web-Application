import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from 'constants/routes';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} exact path={path} element={<Element />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
