import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong> 3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Rodrigo Redivo</strong>
            <small>instagram</small>
          </div>
          <span>rodrigo.a.redivo@gmail.com</span>
          <span>(16) 99309-8843</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}

fetch('http://localhost:3001/contacts')
  .then(async (response) => {
    const json = await response.json();
    console.log('response', response);
    json.forEach((contact) => {
      console.log(contact.name);
    });
  })
  .catch((error) => {
    console.log('error', error);
  });
