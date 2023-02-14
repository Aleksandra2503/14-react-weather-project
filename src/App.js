import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
     <div className='container'>
    
   <Weather defaultCity="Kyiv" />
<footer className='text-center'>
This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/oleksandra-murashko-1b14a4254/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Murashko Oleksandra
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Aleksandra2503/14-react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://5-week-react-project-murashko.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
  
</footer>
     </div>
    </div>
  );
}

export default App;
