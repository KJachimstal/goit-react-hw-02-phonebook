import { Component } from 'react';
import { Section } from './Section';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const id = nanoid();
    this.updateState({
      name,
      id,
    });
  };

  updateState = data => {
    this.setState(state => ({
      contacts: [...state.contacts, data],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form handleSubmit={this.handleSubmit} />
        </Section>
        <Contacts title="Contacts" contacts={this.state.contacts} />
      </div>
    );
  }
}
