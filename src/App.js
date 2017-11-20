import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state={
    persons:[
      {id:'id1',name:'Parul', age:30},
      {id: 'id2',name:'Binny', age:26},
      {id: 'id3',name:'Peter', age:25},
    ],
    otherState:'some other value',
    showPersons:false
}

deletePersonHandler =(personIndex) =>{
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});

}

nameChangeHandler = (event, id) =>{
  const personIndex=this.state.persons.findIndex(p =>{
   return p.id===id;
  });

  const person={...this.state.persons[personIndex]};

  person.name=event.target.value;
  const persons=[...this.state.persons];
  persons[personIndex] =person; 
  this.setState({persons:persons});
}

toggleHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
}

  render() {
    let persons=null;

    const style={
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    
    };

    if (this.state.showPersons){
      persons=(
         <div>
            {this.state.persons.map((person,index) => {
                return (<Person 
                            name={person.name}
                            id={person.id}
                            age={person.age}
                            click={this.deletePersonHandler.bind(this,index)}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event,person.id)}/>);
            })}
        </div> 
      );
      style.backgroundColor='red';
     
    }

    const classes=[];
    if (this.state.persons.length <=2){
        classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
 
    return (
     
         <div className="App">
          <h1>hi, I'm React App</h1>
          <p className={classes.join(' ')}>This is really working!!</p>
          <button style={style} onClick={this.toggleHandler}>Switch Name</button>
          {persons}
        </div>
    
    );
  }
}

export default App;
