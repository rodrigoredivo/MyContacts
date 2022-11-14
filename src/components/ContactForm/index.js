import PropTypes from 'prop-types';
import { useState } from 'react';
import { ButtonContainer, Form } from './styles';

import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  const handleNameChange = ({ target }) => {
    setName(target.value);

    if (!target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  };

  console.log(errors);

  const handleSubmit = ((event) => {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      category,
    });
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Categoria</option>
            <option value="Instagram">Instragram</option>
            <option value="Discord">Discord</option>
          </Select>
        </FormGroup>

        <ButtonContainer>
          <Button type="submit">
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
