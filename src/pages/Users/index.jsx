
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useToken } from '../../providers/UserToken'
import './styles.css'
import {apiKabit} from "../../utils/apis"
import HabitCard from '../../components/HabitCard/HabitCard'
import NavMenu from '../../components/NavMenu'

const Users = (props) => {
 
    const {userToken, userId} = useToken()
    const [habitos, setHabitos] = useState([{
      "id": 2037,
      "title": "Kata JS nivel 3",
      "category": "JS",
      "difficulty": "Difícil",
      "frequency": "Diária",
      "achieved": false,
      "how_much_achieved": 30,
      "user": 719
    }])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      let config = {headers:{Authorization: 'Bearer ' + userToken }}
  
      apiKabit.get('/habits/personal/', config)
      .then(response => { 
        console.log(response.data)
        setLoading(true)
        })
      
    },[userToken])
    
  return(<>
  <NavMenu/>
    <div className="container">
    
      <div className="cardhabit">
        <div className="criacao">
          <h1>Habitos</h1>
          <Link to="/create-habit"><button>Criar Habito</button></Link>
        </div>
  
        <div className="lista">
          <p>lista de habitos</p>
            {loading ? <div className="caixaHabitos"><HabitCard habit={habitos} setHabitos={setHabitos} habitos={habitos}/> </div> : <p>loading...</p>} 
        </div>
      </div>
          
    </div>
  </>)
  }

  export default Users