function CreateTodoButton() {
    return(
        <button className="button-create"
            onClick={(event)=>{
                console.log(event)
                console.log('hola')
            }}
        >+</button>
    );    
}

export {CreateTodoButton}