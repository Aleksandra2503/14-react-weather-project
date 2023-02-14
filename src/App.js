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
            href="https://www.mysite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Murashko Oleksandra
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://my.app/"
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
