import './Button.css'

const Button = ({ ValidarForm, onClear, mensagem }) => {
  return (
    <div>
        {mensagem && <p className='mensagem'>{mensagem}</p>}
        <input type="submit" value="Enviar" disabled={!ValidarForm} />
        
        <input type="button" value="Limpar Dados" onClick={onClear}  />
    </div>
  )
}

export default Button