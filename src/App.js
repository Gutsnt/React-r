import Button from './Button.js'
const App = () => {
    const miVariable = true

    if (miVariable) {
        return <p>Mi variable dio true</p>
    }
    return (
        <div>
            <h1>Hola mundo</h1>
            <Button onClick={() => console.log('clickeado')}>Enviar</Button>
        </div>
    )
}
export default App