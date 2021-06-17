import { useState } from "react"
import NavMenu from "../../components/NavMenu"
import './styles.css'

const CreateHabit = () =>{
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [difficulty, setDifficulty] = useState();
    const [frequency, setFrequency] = useState();

    return(<>
        <NavMenu/>
        <div className="criacao">
        <input placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <input  placeholder="category" value={category} onChange={(event) => setCategory(event.target.value)}></input>
        <input  placeholder="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}></input>
        <input  placeholder="frequency" value={frequency} onChange={(event) => setFrequency(event.target.value)}></input>
        <button>Criar</button>
        </div>
    </>)
}

export default CreateHabit