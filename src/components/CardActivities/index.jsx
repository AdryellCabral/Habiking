const CardActivities = ({activity}) => {
    const {title, realization_time} = activity
    console.log(activity)
    return (
        <div>
            <h3>{title}</h3>
            <h3>{realization_time}</h3>
        </div>
    )
}

export default CardActivities