const CardActivities = ({activity}) => {
    const {title, realization_time} = activity
    
    let data = new Date (realization_time)
    const newData = `${data.toLocaleDateString('pt-br')} às ${data.toLocaleTimeString('pt-br')}`
    return (
        <div>
            <h3>{title}</h3>
            <h3>{newData}</h3>
        </div>  
    )
}

export default CardActivities