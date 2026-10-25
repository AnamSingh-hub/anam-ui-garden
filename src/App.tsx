
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "32px" }}>
      <h1>Anam UI Garden</h1>
      <p>React Component Library</p>

      <section style={{ marginBottom: "24px" }}>
        <h2>Button</h2>
        <Button label="Default Button" />
        <span style={{ marginLeft: "12px" }}>
          <Button label="Disabled Button" disabled />
        </span>
      </section>
    </div>
  );
}

export default App;
