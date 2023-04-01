import { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="comtainer">
        <label htmlFor="name" className="form-label">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            className="form-input"
          />
        </label>
        <label htmlFor="number" className="form-label">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Add contact
        </button>
      </form>
    );
  }
}
