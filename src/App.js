import logo from "./logo.svg";
import "./App.css";
import Typical from "react-typical";
// import gif from "../public/images/anonymous.gif";
import Lottie from "react-lottie";
import animationData from "./animationData.json";

function App() {

	const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

   return (
      <div className="App">
         <header className="App-header">
				<Lottie options={defaultOptions} height={300} width={300} />
            <p>
               <Typical
                  loop={Infinity}
                  weapper="p"
                  steps={[
                     "I'm a Devloper 💻",
                     1000,
                     "Pls call me JookGruls 🤖",
                     1000,
                     "I'm a cat slave 😻",
                     1000,
                  ]}
               />
            </p>
         </header>
      </div>
   );
}

export default App;
