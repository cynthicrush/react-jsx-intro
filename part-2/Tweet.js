function Tweet(props) {
    return (
        <div className='tweet'>
            <h1>{props.username}</h1>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}