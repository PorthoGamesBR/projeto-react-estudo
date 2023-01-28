import Button from "./evento/Button"

function Evento({ numero }){
    function meuEvento(){
        console.log(`Ativando primeiro evento! Numero ${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"></Button>
        </div>
    )
}

export default Evento