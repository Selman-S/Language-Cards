import './App.css';
import ReactSvg from './assets/react.svg';
import {languages} from './helper/data';
import Card from './components/card/Card'
function App() {

  console.log(languages)
  return (
    <div className="container">
     <img src={ReactSvg} alt="" />
     <div className="content">
      <h1>Languages</h1>
      <div className="blueStripe"></div>
      <div className="content-cards">

      {languages.map((item, i) => {
        return (<>
         <Card key={i} card={item} />   
          </>
         )
        })}
        </div>
         
         
         
         
     </div>
    </div>
  );
}

export default App;
