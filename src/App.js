import './App.css';
import Headers from './Components/Header/Header';
import Listsp from './Components/Listsp/Listsp';
import Card from './Components/Card/Card';
import Button from './Components/Button/Button';
import Students from './Components/Students/Students';
import UserGreeting from './Components/UserGreeting/UserGreeting';
import List from './Components/List/List';
import New from './Components/Newcomponent/New';
import Counter from './Components/Counter/Counter';
import Number from './Components/Number/Number';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Car from './Components/Car/Car';
import Fruits from './Components/Fruits/Fruits';
import Car2 from './Components/Car2/Car2';




function App() {
  const fruits= [{id:1, name:"apple", calories: 95},
                 {id:2, name:"orange", calories: 45},
                 {id:3, name:"coconut", calories: 105},
                 {id:4, name:"banana", calories: 40},
                 {id:5, name:"pineapple", calories: 95},
    ];
  const vegetables= [{id:6, name:"tomatoes", calories: 110},
                 {id:7, name:"potato", calories: 35},
                 {id:8, name:"carrots", calories: 25},
                 {id:9, name:"corn", calories: 63},
                 {id:10, name:"broccoli", calories: 15},
];
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
      <UserGreeting isLoggedIn={true} username="Spider-man" />
      <UserGreeting isLoggedIn={true}/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <New/>
      <Counter/>
      <Number/>
      <ColorPicker/>
      <Car/>
      <Fruits/>
      <Car2/>
  </section>
  
  );
}

export default App;
