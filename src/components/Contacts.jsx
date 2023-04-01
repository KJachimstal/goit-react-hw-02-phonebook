import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}
