// app.get("/add/:x/:y", (req, res) => {
//   let x = parseFloat(req.params.x);
//   let y = parseFloat(req.params.y);

//   res.send(`${x + y}`);
// });

// app.get("/mul/:x/:y", (req, res) => {
//   let x = parseFloat(req.params.x);
//   let y = parseFloat(req.params.y);

//   res.send(`${x * y}`);
// });

// app.get("/div/:x/:y", (req, res) => {
//   let x = parseFloat(req.params.x);
//   let y = parseFloat(req.params.y);
//   res.send(y === 0 ? `Error: div by zero` : `${x / y}`);
// });

import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './components/Home'
import NoMatch from './components/NoMatch'

import Add from './components/Add'
import Sub from './components/Sub'
import Mul from './components/Mul'
import Div from './components/Div'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="sub" element={<Sub />} />
          <Route path="mul" element={<Mul />} />
          <Route path="div" element={<Div />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )

}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/add?x=1&y=1">/add?x=a&y=b</Link>
          </li>
          <li>
            <Link to="/sub?x=1&y=1">/sub?x=a&y=b</Link>
          </li>
          <li>
            <Link to="/mul?x=1&y=1">/mul?x=a&y=b</Link>
          </li>
          <li>
            <Link to="/div?x=1&y=1">/div?x=a&y=b</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}