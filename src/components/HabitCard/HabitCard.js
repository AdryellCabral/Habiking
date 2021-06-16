import { Link } from 'react-router-dom'
import './styles.css'


const HabitCard = ({setHabitos,habitos}) => {

return(<>
  {habitos.map( habit =>
              <div className="card">
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
                      <Link to="/edit-habit"><button>Editar</button></Link>
                        <button onClick={() => setHabitos(habitos.filter(habito => habito.id !== habit.id))}>Deletar</button>
                      </div>
            
                        <div className="check">
                          <input type="checkbox"/>
                        </div>
                  </div>
              </div>
              )}
</>)
}

export default HabitCard