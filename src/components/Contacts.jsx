import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
