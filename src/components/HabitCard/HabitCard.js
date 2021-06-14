import axios from 'axios'
import { useEffect } from 'react'
import './styles.css'

const HabitCard = (props) => {

  useEffect(() => {
    axios.get('https://kabit-api.herokuapp.com/habits/personal/')
    .then(response => console.log(response))
  })

    return(<div className="container">

          <h1>Nome de usuario</h1>
        <div className="cardhabit">

        <h1>Habitos</h1>
        <button className="button">Criar Habito</button>
        <p>lista de habitos</p>
        <div className="caixaHabitos">
            {/*map com habitos */}
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
            <h3>5</h3>
        </div>
        </div>
        <div className="cardsEvents">
            <h2>eventos</h2>
          <div className="caixaEvents">
            {/*map com eventos */}
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
            <h3>5</h3>
          </div> 
        </div>
    </div>)
}

export default HabitCard