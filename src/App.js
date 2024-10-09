import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <p>
            This project was created by{" "}
            <a
              href="https://hollyberrywigmore.com/"
              rel="noreferrer"
              target="_blank"
            >
              Holly Wigmore
            </a>{" "}
            is open-sourced on{" "}
            <a
              href="https://github.com/Holly-Wigmore/react-weather-project"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
