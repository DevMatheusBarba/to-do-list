import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    console.log(index);
    novaTarefa = novaTarefa.trim();
    novaTarefa = novaTarefa.toLowerCase();

    if (!novaTarefa) return alert('Tarefas em branco!');
    if (tarefas.includes(novaTarefa)) return alert('Tarefa já existente!');

    if (index === -1) {
      return this.setState({ tarefas: [...tarefas, novaTarefa], novaTarefa: '' });
    }
    tarefas[index] = novaTarefa;
    return this.setState({
      tarefas,
      novaTarefa: '',
      index: -1, // Reset index after editing
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    return this.setState({ tarefas: novasTarefas });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
