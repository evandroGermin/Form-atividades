import { useState } from 'react'
import './Form.css'
import Button from './Button'

const Form = () => {

const [nome, setNome] = useState("") 
const [sobrenome, setSobrenome] = useState("")
const [email, setEmail] = useState("") 
const [Data, setData] = useState("")
const [telefone, setTelefone] = useState("")
const [pais, setPais] = useState("")
const [bio, setBio] = useState("")
const [funcao, setFuncao] = useState("user")
const [senha, setSenha] = useState("")
const [mensagem, setMensagem] = useState("")
const [termos, setTermos] = useState(false)

const handleName = (e) => {
  setNome(e.target.value)
}

const handleSobrenome = (e) => {
  setSobrenome(e.target.value)
}

const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handleData = (e) => {
  setData(e.target.value)
}

const handleTelefone = (e) => {
  setTelefone(e.target.value)
}

const handlePais = (e) => {
  setPais(e.target.value)
}

const handleBio = (e) => {
  setBio(e.target.value)
}

const handleFuncao = (e) => {
  setFuncao(e.target.value)
}

const handleSenha = (e) => {
  setSenha(e.target.value)
}

const handleTermos = (e) => {
  setTermos(e.target.checked)
}

const handleSubmit = (e) => {
  e.preventDefault();

  setMensagem("Dados enviados com sucesso!");

    //limpar após enviar os dados
    setNome("");
    setSobrenome("");
    setEmail("");
    setData("");
    setTelefone("");
    setPais("");
    setBio("");
    setSenha("");
    setTermos(false);
  }
  const handleClear = () => {
    setNome("");
    setSobrenome("");
    setEmail("");
    setData("");
    setTelefone("");
    setPais("");
    setBio("");
    setSenha("");
    setTermos(false);
    setMensagem("");
  }

  const ValidarForm =
  nome.trim() !== "" &&
  sobrenome.trim() !== "" &&
  email.trim() !== "" &&
  Data !== "" &&
  telefone.trim() !== "" &&
  pais !== "" &&
  bio.trim() !== "" &&
  senha.trim() !== "" &&
  termos === true

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" placeholder='Digite seu nome' onChange={handleName} value={nome}/>
                </label>

                <label>
                <label htmlFor="sobrenome">Sobrenome:</label>
                <input type="text" name="sobrenome" placeholder='Digite seu sobrenome' onChange={handleSobrenome} value={sobrenome}/>
                </label>

                <label>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder='Digite seu email' onChange={handleEmail} value={email}/>
                </label>

                <label>
                <label htmlFor="data">Data de Nascimento:</label>
                <input type="date" name="data" placeholder='Digite sua data de nascimento' onChange={handleData} value={Data}/>
                </label>

                <label>
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" name="telefone" placeholder="(00) 00000-0000" onChange={handleTelefone} value={telefone} />
                </label>

                    <label>
                    <label htmlFor="pais">País:</label>
                    <select name="pais" onChange={handlePais} value={pais}>
                        <option value="">Selecione um país</option>
                        <option value="brasil">Brasil</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="canada">Canadá</option>
                        <option value="reino-unido">Reino Unido</option>
                    </select>
                </label>

                 <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Digite sua bio' onChange={handleBio} value={bio}>
                    </textarea>
                </label>

                <label>
                <span>Função no sistema: </span>
                <select name="funcao" onChange={handleFuncao} value={funcao}>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">Usuário</option>
                </select>
                </label>

                <label>
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" placeholder='Digite sua senha' onChange={handleSenha} value={senha}/>
                </label>

                <label>
                <input type="checkbox" name="termos" onChange={handleTermos} checked={termos}/>
                <span>Aceitar os termos</span>
                </label>

                
                <Button ValidarForm={ValidarForm} onClear={handleClear} mensagem={mensagem}/>
            </div>
        </form>
    </div>
  )
}

export default Form