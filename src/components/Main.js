import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();
    novaTarefa = novaTarefa.toLowerCase();

    if (!novaTarefa) return alert('Tarefas em branco!');
    if (tarefas.includes(novaTarefa)) return alert('Tarefa já existente!');

    const newTarefas = [...tarefas, novaTarefa];

    return this.setState({ tarefas: newTarefas, novaTarefa: '' });
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
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
