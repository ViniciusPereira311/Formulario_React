
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
                                <label for="nome"><strong>Nome:</strong></label>
                                <input type="text" name="nome" id="nome" required />
                             </div>
                             <div className="campo">
                                <label for="sobrenome"><strong>Sobrenome:</strong></label>
                                <input type="text" name="sobrenome" id="sobrenome" required/>
                             </div>
                        </fieldset>
                        <div className="campo">
                            <label for="email"><strong>E-mail</strong>:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                            <div className="campo">
                            <label><strong>Você Conhece nossa Empresa?</strong></label>
                            <label>
                            <input type="radio" name="check" value="sim" checked/>Sim
                            </label>
                            <label>
                            <input type="radio" name="check" value="nao"/>Não
                            </label>
                            </div>
                           
                        <div className="campo">
                            <label for="estado"><strong>Qual estado voce é:</strong></label>
                            <select id="estado">
                            <option selected disabled value="">Selecione:</option>
                            <option>Acre</option>
                            <option>Alagoas</option>
                            <option>Amapá</option>
                            <option>Amazonas</option>
                            <option>Bahia</option>
                            <option>Ceará</option>
                            <option>Distrito Federal</option>
                            <option>Espírito Santo</option>
                            <option>Goiás</option>
                            <option>Maranhão</option>
                            <option>Mato Grosso</option>
                            <option>Mato Grosso do Sul</option>
                            <option>Minas Gerais</option>
                            <option>Pará</option>
                            <option>Paraíba</option>
                            <option>Paraná</option>
                            <option>Pernambuco</option>
                            <option>Piauí</option>
                            <option>Rio de Janeiro</option>
                            <option>Rio Grande do Norte</option>
                            <option>Rio Grande do Sul</option>
                            <option>Rondônia</option>
                            <option>Roraima</option>
                            <option>Santa Catarina</option>
                            <option>São Paulo</option>
                            <option>Sergipe</option>
                            <option>Tocantins</option>
                            <option>Estrangeiro</option>
                            </select>
                        </div>
                        <fieldset className="grupo">
                          <div className="checkbox">
                            <label><strong>Quais são suas areas de conhecimento?</strong></label>
                            <input type="checkbox" id="option1" name="option1" value="HTML"/>
                            <label for="option1">HTML</label>
                            <input type="checkbox" id="option2" name="option2" value="CSS"/>
                            <label for="option2">CSS</label>
                            <input type="checkbox" id="option3" name="option3" value="JAVA"/>
                            <label for="option3">JAVA</label>
                            <input type="checkbox" id="option4" name="option4" value="PHP"/>
                            <label for="option4">PHP</label>
                            <input type="checkbox" id="option5" name="option5" value="C#"/>
                            <label for="option5">C#</label>
                            <input type="checkbox" id="option6" name="option6" value="REACT"/>
                            <label for="option6">REACT</label>
                            </div>
                        </fieldset>
                        <div className="campo">
                            <br/>
                            <label><strong>Conte um pouco sobre suas experiencias:</strong></label>
                            <textarea row="6" id="experiencia" name="experiencia"></textarea>
                        </div>
                        <button className="botao" type="submit"><strong>Enviar</strong></button>
                    </form>
                    
                </div>
            </div>
    )

}

export default Formulario;