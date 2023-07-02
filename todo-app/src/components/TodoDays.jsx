 
function TodoDays() {
    var fechaActual = new Date();
    var diaActual = fechaActual.getDate();

    var fechaManana = new Date();
    fechaManana.setDate(fechaActual.getDate() + 1);
    let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());

    return(
    <div className="day-card">
        <p>{diaActual}</p>
        <p>{mesActual}</p>
    </div>

    );
    
}

export {TodoDays}