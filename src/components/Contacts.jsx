import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button
              type="submit"
              onClick={this.props.handleDelete.bind(this, id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
