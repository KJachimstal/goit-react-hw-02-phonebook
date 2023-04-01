import { Component } from 'react';
import { Section } from './Section';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { FindContacts } from './FindContacts';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Rormione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const id = nanoid();

    if (this.searchContacts(name).length != 0) {
      alert(`${name} is already in contacts.`);
    } else {
      this.updateState({
        name,
        number,
        id,
      });
    }
  };

  searchContacts = data => {
    return this.state.contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(data.toLowerCase())) {
        return contact;
      }
      return 0;
    });
  };

  handleChange = event => {
    this.setState({
      filter: event.target.value,
    });
    this.searchContacts(this.state.filter);
  };

  updateState = data => {
    this.setState(state => ({
      contacts: [...state.contacts, data],
    }));
  };

  render() {
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
        <Section title="Contacts">
          <FindContacts
            filter={this.state.filter}
            handleChange={this.handleChange}
          />
          <Contacts contacts={this.searchContacts(this.state.filter)} />
        </Section>
      </div>
    );
  }
}
