import axios from 'axios'
import { useEffect, useState } from 'react'
import { useToken } from '../../providers/UserToken'
import './styles.css'

const HabitCard = (props) => {

  const {userToken} = useToken()
  const [habitos, setHabitos] = useState()

  useEffect(() => {

    let config = {headers:{'Authorization': 'Bearer ' + userToken }}

    axios.get('https://kabit-api.herokuapp.com/habits/personal/', config)
    .then(response => setHabitos(response.data))
  })
  
  

    return(<>
    
    <div className="container">

          <h1>Nome de usuario</h1>
        <div className="cardhabit">

        <h1>Habitos</h1>
        <button className="button">Criar Habito</button>
        <p>lista de habitos</p>
        <div className="caixaHabitos">
        {habitos.map(habit => <div className="card">
            <h1>{habit.title}</h1>
            <h2>{habit.category}</h2>
            <h2>{habit.difficulty}</h2>
            <h2>{habit.frequency}</h2>
            </div>)}
            
        </div>
        </div>
        <div className="cardsEvents">
            <h2>eventos</h2>
          <div className="caixaEvents">
            {/*setHabitos(response.data)*/}
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
            <h3>5</h3>
          </div> 
        </div>
    </div>
    </>)
}

export default HabitCard