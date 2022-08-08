import ComboBox, { SelectEstados } from './ComboBox';


function Formulario(){    
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
                            <input type="txt" name="nome" id="nome" onChange={console.log}/>
                        </div>
                        <div className="campo">
                            <label><strong>Sobrenome:</strong></label>
                            <input type="txt" name="sobrenome" id="sobrenome" onChange={console.log}/>
                        </div>
                    </fieldset>
                        <div className="campo">
                            <label><strong>E-mail</strong>:</label>
                            <input type="email" name="email" id="email" onChange={console.log}/>
                        </div>
                        <div className="campo">
                            <label><strong>Você Conhece nossa Empresa?</strong></label>
                            <label>
                                <input type="radio" name="check" defaultValue="sim" defaultChecked onChange={console.log}/>Sim
                            </label>
                            <label>
                                <input type="radio" name="check" defaultValue="nao" onChange={console.log}/>Não
                            </label>
                        </div> 
                        <div className="campo">
                            <label><strong>Qual estado voce é:</strong></label>
                           <ComboBox />
                        </div>
                        <fieldset className="grupo">
                            <div className="checkbox">
                                <label><strong>Quais são suas areas de conhecimento?</strong></label>
                                <input type="checkbox" id="option1" name="option1" defaultValue="HTML" onChange={console.log}/>
                                <label>HTML</label>
                                <input type="checkbox" id="option2" name="option2" defaultValue="CSS" onChange={console.log}/>
                                <label>CSS</label>
                                <input type="checkbox" id="option3" name="option3" defaultValue="JAVA" onChange={console.log}/>
                                <label>JAVA</label>
                                <input type="checkbox" id="option4" name="option4" defaultValue="PHP" onChange={console.log}/>
                                <label>PHP</label>
                                <input type="checkbox" id="option5" name="option5" defaultValue="C#" onChange={console.log}/>
                                <label>C#</label>
                                <input  type="checkbox" id="option6" name="option6" defaultValue="REACT" onChange={console.log}/>
                                <label>REACT</label>
                            </div>
                        </fieldset>
                        <div className="campo">
                            <br/>
                            <label><strong>Conte um pouco sobre suas experiencias:</strong></label>
                            <textarea row="6" id="experiencia" name="experiencia" onChange={console.log}></textarea>
                        </div>
                        <button className="botao" type="submit"><strong>Enviar</strong></button>
                </form> 
            </div>
        </div>
    );
};

export default Formulario;