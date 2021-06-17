
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useToken } from '../../providers/UserToken'
import './styles.css'
import {apiKabit} from "../../utils/apis"
import HabitCard from '../../components/HabitCard/HabitCard'
import NavMenu from '../../components/NavMenu'

const Users = (props) => {
 
    const {userToken, userId} = useToken()
    const [habitos, setHabitos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      let config = {headers:{Authorization: 'Bearer ' + userToken }}
  
      apiKabit.get('/habits/personal/', config)
      .then(response => { 
        console.log(response)
        setLoading(true)
        })
      
    },[userToken])
    
    console.log(habitos)
  return(<>
  <NavMenu/>
    <div className="container">
      {/* nome do usuario aqui*/}
    
      <div className="cardhabit">
        <div className="criacao">
          <h1>Habitos</h1>
          <Link to="/create-habit"><button>Criar Habito</button></Link>
        </div>
  
        <div className="lista">
          <p>lista de habitos</p>
            {habitos[0] === undefined ?<h1>Sem habitos</h1> : null}
            {loading ? <div className="caixaHabitos"><HabitCard habit={habitos} setHabitos={setHabitos} habitos={habitos}/> </div> : <p>loading...</p>} 
        </div>
      </div>
          
    </div>
  </>)
  }

  export default Users