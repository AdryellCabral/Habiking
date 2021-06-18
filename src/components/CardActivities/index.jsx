import {DivContainer} from "./styles"


const CardActivities = ({activity}) => {
    const {title, realization_time} = activity
    
    let data = new Date (realization_time)
    const newData = `${data.toLocaleDateString('pt-br')} às ${data.toLocaleTimeString('pt-br')}`
    return (
        <DivContainer>
            <h3>Titulo: {title}</h3>
            <h3>Data: {newData}</h3>
        </DivContainer>  
    )
}

export default CardActivities