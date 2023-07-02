
function TodoText(props) {

    if(((props.completed)-(props.pending)) === 0  ){
        return(
            <div className='title'>
            <p>Felicitaciones</p>
            </div>
        )
    }else{
        return(
            <div className='title'>
            <p>Has completado {props.completed} de {props.pending} tareas</p>
            </div>
        )
    }

}

export {TodoText}