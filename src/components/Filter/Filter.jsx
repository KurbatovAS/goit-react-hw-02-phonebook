import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ onFilterInputHandler }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="John Smith"
        onInput={onFilterInputHandler}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterInputHandler: PropTypes.func.isRequired,
};

export default Filter;
