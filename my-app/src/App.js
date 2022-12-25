import logDos from './logDos.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>FELIZ NAVIDAD!!!</h1>
        <img src={logDos} className="App-logo" alt="logo" />
        <p>
          Tengo un regalo para vos que arrancaba con esta pagina... Pero a ultimo momento lo tuve que modificar 
          porque no todo se dio como pense que se podia dar, en realidad la propuesta original era hacer un viaje 
          a un lugar que no puedo decirlo para año nuevo pero la realidad tambien es que con el tiempo corto que teniamos 
          se iba a volver muy dificil lograrlo y nada los horarios no coincidian por eso no se pudo.
          De igual forma te dejo dos propuesta a elección que eso si seria el regalo completo y definitivo de navidad!
          Sacando todo esto... Muy feliz navidad, de verdad que siempre te voy a desear lo mejor, sos la mejor persona que conocí, 
          no se muy bien que va a pasar con nosotro pero todas las minimas oportinidades que vos me des las quiero aprovechar al 
          100% para poder demostrarte que hubo muchas cosas que cambiaron pero lo unico que jamas va a poder cambiar va a ser lo 
          que yo siento por vos. Bueno ahora si, no quiero hacer muy largo el mensaje así que voy con las opciones: 
          Info... El regalo es el vuelo o viaje y el hospedaje!
        </p>
        <p>
          Por favor selecciona alguna de las opciones que vos quieras!
        </p>
        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=541131598254&text=Hola,mi desición fue solo pasar año nuevo juntos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pasar año nuevo juntos
        </a>
        <hr/>
        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=541131598254&text=Hola,mi desición fue solo pasar año nuevo juntos y el regalo sorpresa."
          target="_blank"
          rel="noopener noreferrer"
        >
          Pasar año nuevo juntos y mi regalo sorpresa que sera dado a la brevedad.
        </a>
      </header>
    </div>
  );
}

export default App;
