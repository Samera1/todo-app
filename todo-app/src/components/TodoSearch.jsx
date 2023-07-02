
function TodoSearch({searchValue,setSearchValue}) {
    
    return(
    <div>
    <input type="text" className="input" placeholder="Buscar Tarea"
    value={searchValue}
    onChange={(event)=>{
        setSearchValue(event.target.value)
    }}
    ></input>
    </div>

    );
    
}

export {TodoSearch}