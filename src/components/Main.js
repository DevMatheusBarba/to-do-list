import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    console.log(localStorage.getItem('tarefas'));
  }

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    novaTarefa = novaTarefa.toLowerCase();

    if (!novaTarefa) return alert('Tarefas em branco!');
    if (tarefas.includes(novaTarefa)) return alert('Tarefa já existente!');

    if (index === -1) {
      return this.setState({ tarefas: [...tarefas, novaTarefa], novaTarefa: '' });
    }
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index] = novaTarefa;
    return this.setState({
      tarefas: tarefasAtualizadas,
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

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
