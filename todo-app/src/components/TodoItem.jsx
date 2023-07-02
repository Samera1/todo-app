
function TodoItem(props) {
    if(props.completed === true){
        return(
            <div  className="item-container">
            <img src="../../public/Check.svg" alt="Icon" onClick={props.onComplete}/>
            <p>{props.text}</p>
            <img 
            src={'../../public/Delete.png'}
            alt="Icon"
            onClick={props.onDelete}/>
            </div>
        );
    }else{
        return(
            <div  className="item-container">
            <img src="../../public/Incompleto.svg" alt="Icon" onClick={props.onComplete}/>
            <p>{props.text}</p>
            <img 
            src={'../../public/Delete.png'}
            alt="Icon"
            onClick={props.onDelete}/>
            </div>
        );
    }
    
}

export {TodoItem}