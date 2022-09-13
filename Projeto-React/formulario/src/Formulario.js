import { useState } from 'react';
import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons';




function Formulario() { 

    const options = [ // Array Select
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
    
     // State com a Array de todos os itens
    const [checked, setChecked] = useState([]);


    const listaChecked = [
        'HTML', 
        'CSS', 
        'JAVA', 
        'PHP', 
        'C#', 
        'REACT',
    ];
    
    // Evento de Adicionar & Remover item marcado da lista
    const handlerChecked = (event) => {
        var atualizarLista = [...checked];
        if (event.target.checked) {
        atualizarLista = [...checked, event.target.value];
        } else {
        atualizarLista.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(atualizarLista);
    };


    const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

    // Retornar classes com base em que o item está marcado
    var isChecked = (item) =>
    checked.includes(item) ? "ok-checou-item" : "nao-checou-item";

    // UseState do Form
    const [form, setForm] = useState({
        nome:'',
        sobrenome:'',
        email:'',
        check:'',
        selecione: null,
        selecioneDois: null,
        texto:''
    });

    // quando tem os eventos padroes
    // ou seja quando tem target
    const handler = (event) => {
        setForm(form => ({...form, [event.target.name]: event.target.value }));       
    }

    // quando tem eventos customizados
    // ou seja, o event já é o valor
    const handlerSelect = (event, campo) => {
        // console.log(event, campo)
        setForm(form => ({...form, [campo]: event}));
    }

    function salvarForm(e) {
        e.preventDefault()
        console.log('Enviando Dados...')
        console.log(form)
        console.log(checked)
    }
     
    function limparForm(e) {
        setForm({
            nome:'',
            sobrenome:'',
            email:'',
            check:'',
            selecione: '',
            selecioneDois: '',
            texto:'',
        })
        console.log('Limpando Dados...')
    }

    return(
        <div className='formulario'>
            <div className='formulario-single'>
                <h1>FORMULARIO TESTE - <i><FontAwesomeIcon icon={faNoteSticky} /></i></h1>
                <p>Complete suas informações no formulario teste:</p>
            </div>
            <div className='form'>
                <h2>COMPLETE O FORMULARIO:</h2>
                <form style={{ padding: '30px' }}>
                    <fieldset className='grupo'>
                        <div className='campo'>
                            <label><strong>Nome:</strong></label>
                            { /* <input type="txt" name="nome" value={form.nome} onChange={handler} required/> */ }
                            { /* <input type="txt" name="nome" value={form.nome} onChange={e => handlerSelect(e.target, e.target.name)} required/> */ }
                            <input type='txt' name='nome' value={form.nome} onChange={e => handlerSelect(e.target.value, 'nome')} required/>
                        </div>
                        <div className="campo">
                            <label><strong>Sobrenome:</strong></label>
                            <input type="txt" name="sobrenome" value={form.sobrenome} onChange={handler} required/>
                        </div>
                    </fieldset>
                    <div className="campo">
                        <label><strong>E-mail</strong>:</label>
                        <input type="email" name="email" value={form.email} onChange={handler} required/>
                    </div>
                    <div className="campo">
                        <label>
                            <strong>Você Conhece nossa Empresa?</strong>
                        </label>
                        <label>
                            <input type="radio" name="check"  value={form.check} onChange={e => handlerSelect('Sim', 'check')} />Sim
                        </label>
                        <label>
                            <input type="radio" name="check" onChange={e => handlerSelect('Não', 'check')}/>Não
                        </label>
                    </div> 
                    <div className="campo">
                        <label>
                            <strong>Qual estado voce é:</strong>
                        </label>
                        <Select placeholder="Selecione" options={options} onChange={e => handlerSelect(e.value, 'selecione')} />
                    </div>
                    <div className="campo">
                        <label>
                            <strong>Qual estado voce é Dois:</strong>
                        </label>
                        <Select placeholder="Selecione Dois" options={options} onChange={e => handlerSelect(e.value, 'selecioneDois')} />
                    </div>
                    <div className="campo">
                        <label>
                            <strong>Quais são suas areas de conhecimento?</strong>
                        </label>
                        <div className="campo">
                            {listaChecked.map((item, index) => (
                                <div key={index}>
                                    <input value={item} type="checkbox" onChange={handlerChecked} />
                                    <span className={isChecked(item)}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="campo">
                        <label>
                            <strong>Conte um pouco sobre suas experiencias:</strong>
                        </label>
                        <textarea row="6" id="experiencia" name="texto" value={form.texto} onChange={handler}></textarea>
                    </div>
                    <button onClick={salvarForm} className="botao" type="submit">
                        <strong>Enviar <i><FontAwesomeIcon icon={faFloppyDisk} /></i></strong>
                    </button>
                    <button onClick={limparForm} className="botao2" type="reset">
                        <strong>Limpar <i><FontAwesomeIcon icon={faTrash} /></i></strong>
                    </button>
                    <p style={{ wordBreak: 'break-all', padding: '10px' }}>
                        { JSON.stringify(form) }
                    </p>
                    <div>
                        {`Áreas Selecionadas:" ${checkedItems}"`}
                    </div>
                    { /* <p>nome:{form.nome}</p>
                    <p>sobrenome:{form.sobrenome}</p>
                    <p>email:{form.email}</p>
                    <p>selecione:{form.selecione}</p>
                    <p>selecione Dois:{form.selecioneDois}</p>
                    <p>check:{form.check}</p>
                    <p>option1:{form.option1}</p>
                    <p>texto:{form.texto}</p> */ }
                </form> 
            </div>
        </div>
    );
};

export default Formulario;