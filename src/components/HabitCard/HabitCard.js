import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useToken } from '../../providers/UserToken'
import './styles.css'
import {apiKabit} from "../../utils/apis"

const HabitCard = (props) => {

  const {userToken, userId} = useToken()
  const [habitos, setHabitos] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    let config = {headers:{'Authorization': 'Bearer ' + userToken }}

    apiKabit.get('/habits/personal/', config)
    .then(response => console.log(response.data))
    .then(setLoading(true))
    
    apiKabit.get('/users/')
    .then(response => setUser(response.data.results.find((user) => user.id === userId)))

    
  },[])
  console.log(loading)
    return(<>
    <div className="container">

        {loading && <div>{user.username === undefined ? <h1>{user.username}</h1>: null}</div> }
        <div className="cardhabit">

        <h1>Habitos</h1>
        <Link to="/criarHabito"><button>Criar Habito</button></Link>
        <p>lista de habitos</p>
        <div className="caixaHabitos">
        {loading && habitos.map((habit,index) =>
        <div className="card" key={index}>
        <div className="title">
            <h1>{habit.title}</h1>
            </div>
            <div className="conteudo">
          <div className="desc">
            <h2>{habit.category}</h2>
            <p>{habit.difficulty}</p>
            <p>{habit.frequency}</p>
            </div>
            <div className="botoes">
              <button>Deletar</button>
              <button>Editar</button>
            </div>
            
              <div className="check">
                <input type="checkbox"/>
                </div>
                </div>
        </div>
        )}
             </div>
        </div>
        
    </div>
    </>)
}

export default HabitCard