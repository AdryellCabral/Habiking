import NavMenu from "../../components/NavMenu"
import { useState } from "react"
const EditHabit = () => {

    const [difficulty, setDifficulty] = useState();
    const [frequency, setFrequency] = useState();

    return(<>
        <NavMenu/>
        <div className="criacao">
        <input  placeholder="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}></input>
        <input  placeholder="frequency" value={frequency} onChange={(event) => setFrequency(event.target.value)}></input>
        <button>Criar</button>
        </div>
    </>)
}

export default EditHabit