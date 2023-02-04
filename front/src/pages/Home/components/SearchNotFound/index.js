import PropTypes from 'prop-types';

import magnifierQuestiom from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestiom} alt="Magnifier question" />

      <span>
        Nenhum resultado foi encontrado para
        {' '}
        <strong>{searchTerm}</strong>
        .
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
