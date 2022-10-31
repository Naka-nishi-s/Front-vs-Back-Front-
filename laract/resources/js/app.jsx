import "./bootstrap";
import ReactDOM from "react-dom/client";
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
