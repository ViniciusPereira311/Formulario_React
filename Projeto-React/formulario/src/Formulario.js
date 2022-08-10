import { useState } from 'react';
import React from "react";
import Select from "react-select";


function Formulario() { 
    
    const [nome, setNome] = useState()
    const [Sobrenome, setSobrenome] = useState()
    const [email, setEmail] = useState()
    const [check, setCheck] = useState()
    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()
    const [option3, setOption3] = useState()
    const [option4, setOption4] = useState()
    const [option5, setOption5] = useState()
    const [option6, setOption6] = useState()
    const [textarea, setTexterea] = useState()

    const options = [
        { value: 'AC', label: 'Acre' },
        { value: 'AL', label: 'Alagoas' },
        { value: 'AP', label: 'Amapá' },
        { value: 'AM', label: 'Amazonas' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
        { value: 'DF', label: 'Distrito Federal' },
        { value: 'ES', label: 'Espírito Santo' },
        { value: 'GO', label: 'Goías' },
        { value: 'MA', label: 'Maranhão' },
        { value: 'MT', label: 'Mato Grosso' },
        { value: 'MS', label: 'Mato Grosso do Sul' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'PA', label: 'Pará' },
        { value: 'PB', label: 'Paraíba' },
        { value: 'PR', label: 'Paraná' },
        { value: 'PE', label: 'Pernambuco' },
        { value: 'PI', label: 'Piauí' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'RN', label: 'Rio Grande do Norte' },
        { value: 'RS', label: 'Rio Grande do Sul' },
        { value: 'RO', label: 'Rondônia' },
        { value: 'RR', label: 'Roraíma' },
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'SE', label: 'Sergipe' },
        { value: 'TO', label: 'Tocantins' },
      ];

    function meuEvento(e) {
        e.preventDefault()
        console.log('Enviando Dados...')
        console.log(nome)
        console.log(Sobrenome)
        console.log(email)
        console.log(check)
        console.log(option1)
        console.log(option2)
        console.log(option3)
        console.log(option4)
        console.log(option5)
        console.log(option6)
        console.log(textarea)
    }
      
    return(
        <div className='formulario'>
            <div className='formulario-single'>
                <h1>FORMULARIO TESTE - </h1>
                <p>Complete suas informações no formulario teste:</p>
            </div>
            <div className='form'>
                <h2>COMPLETE O FORMULARIO:</h2>
                <form>
                    <fieldset className="grupo">
                        <div className="campo">
                            <label><strong>Nome:</strong></label>
                            <input type="txt" name="nome" id="nome" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="campo">
                            <label><strong>Sobrenome:</strong></label>
                            <input type="txt" name="sobrenome" id="sobrenome" onChange={(e) => setSobrenome(e.target.value)}/>
                        </div>
                    </fieldset>
                    <div className="campo">
                        <label><strong>E-mail</strong>:</label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="campo">
                        <label><strong>Você Conhece nossa Empresa?</strong></label>
                        <label>
                            <input type="radio" name="check" defaultValue="sim" defaultChecked onChange={(e) => setCheck(e.target.value)}/>Sim
                        </label>
                        <label>
                            <input type="radio" name="check" defaultValue="nao" onChange={(e) => setCheck(e.target.value)}/>Não
                        </label>
                    </div> 
                    <div className="campo">
                        <label><strong>Qual estado voce é:</strong></label>
                        <Select placeholder="Selecione" className="select" options={options}/>
                    </div>
                    <fieldset className="grupo" >
                        <div className="checkbox" >
                            <label><strong>Quais são suas areas de conhecimento?</strong></label>
                            <input type="checkbox" id="option1" name="option1" defaultValue="HTML" onChange={(e) => setOption1(e.target.value)}/>
                            <label >HTML</label>
                            <input type="checkbox" id="option2" name="option2" defaultValue="CSS" onChange={(e) => setOption2(e.target.value)}/>
                            <label>CSS</label>
                            <input type="checkbox" id="option3" name="option3" defaultValue="JAVA" onChange={(e) => setOption3(e.target.value)}/>
                            <label>JAVA</label>
                            <input type="checkbox" id="option4" name="option4" defaultValue="PHP" onChange={(e) => setOption4(e.target.value)}/>                           
                            <label>PHP</label>
                            <input type="checkbox" id="option5" name="option5" defaultValue="C#" onChange={(e) => setOption5(e.target.value)}/>
                            <label>C#</label>
                            <input type="checkbox" id="option6" name="option6" defaultValue="REACT" onChange={(e) => setOption6(e.target.value)}/>
                            <label>REACT</label>
                        </div>
                    </fieldset>
                    <div className="campo">
                        <br/>
                        <label><strong>Conte um pouco sobre suas experiencias:</strong></label>
                        <textarea row="6" id="experiencia" name="experiencia" onChange={(e) => setTexterea(e.target.value)}></textarea>
                    </div>
                    <button onClick={meuEvento} className="botao" type="submit"><strong>Enviar</strong></button>
                </form> 
            </div>
        </div>
    );
};

export default Formulario;