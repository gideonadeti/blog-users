import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Header />
      <Main />
    </div>
  );
}
