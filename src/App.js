import './App.css';
import Headers from './Components/Header/Header';
import Listsp from './Components/Listsp/Listsp';
import Card from './Components/Card/Card';
import Button from './Components/Button/Button';
import Students from './Components/Students/Students';
import UserGreeting from './Components/UserGreeting/UserGreeting';




function App() {
  return (
  <section>
      <Headers/>
      <Listsp/>
      <Card/>
      <Button/>
      <Students name="Spongebob" age={30} isStudent={true} />
      <Students name="Patrick" age={32} isStudent={false} />
      <Students name="Mcqueen" age={22} isStudent={true} />
      <Students />
      <UserGreeting/>
  </section>
  
  );
}

export default App;
