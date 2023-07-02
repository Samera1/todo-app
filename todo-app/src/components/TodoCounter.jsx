

function TodoCounter() {
    const fecha = new Date();
    const añoActual = fecha.getFullYear()
    let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());

    return(
    <div className='title'>
        <p>{mesActual} {añoActual}</p>
    </div>

    );
    
}

export {TodoCounter}