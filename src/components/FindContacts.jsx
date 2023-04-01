import { Component } from 'react';

export class FindContacts extends Component {
  render() {
    const { inputValue } = this.props.filter;
    return (
      <label htmlFor="find" className="form-label">
        Search by name:
        <input
          className="form-input"
          type="text"
          id="find"
          value={inputValue}
          onChange={this.props.handleChange}
        />
      </label>
    );
  }
}
