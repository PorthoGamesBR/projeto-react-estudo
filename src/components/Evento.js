function Evento({ numero }){
    function meuEvento(){
        console.log(`Evento ativado! Fui ativado com numero ${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento