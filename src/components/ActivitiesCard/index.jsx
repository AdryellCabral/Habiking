import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useToken } from '../../providers/UserToken'
import NavMenu from '../NavMenu'
import './styles.css'


const ActivesCard = () =>{

    const {userToken} = useToken()
    const [habitos, setHabitos] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
  
      let config = {headers:{'Authorization': 'Bearer ' + userToken }}
  
      axios.get('https://kabit-api.herokuapp.com/habits/personal/', config)
      .then(response => setHabitos(response.data))
  
      setLoading(true)
    })

    return(<>
        <div className="container">
    
              <h1>Nome de usuario</h1>
            <div className="cardhabit">
    
            <h1>Habitos</h1>
            <button className="button" onClick={() => <Link to="/criarHabito"/>}>Criar Habito</button>
            <p>lista de habitos</p>
            <div className="caixaHabitos">
            {loading && habitos.map(habit => <div className="card">
                oi
                </div>)}
                 </div>
                 
            </div>
            
        </div>
        </>)

}

export default ActivesCard