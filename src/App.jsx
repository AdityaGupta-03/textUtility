//  To style the app.jsx: App.css is used
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import WordMeaning from "./components/WordMeaning";
import About from "./components/About";
import { useState } from "react";

// Exporting the Component
export default function App() {
    const [Mode, setMode] = useState("light");

    // Only 1 Tag is returned by the React
    return (
        // This is the react Fragment to return multiple things as a single container
        <>
          {/* Component with Prop */}
          <Navbar title="Coffee With Addy" mode={Mode}/>

          {/* Nesting Function in the App Component */}
          <div className="container">
            {/* <Form heading="Write Text here"/> */}
            {/* <WordMeaning /> */}
            <About />
          </div>
        </>
    );
}
