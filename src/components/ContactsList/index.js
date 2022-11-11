import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <strong> 3 contatos</strong>
        <a href="http://">Novo Contato</a>
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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <a href="/">
            <img src={trash} alt="Delete" />
          </a>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <a href="/">
            <img src={trash} alt="Delete" />
          </a>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <a href="/">
            <img src={trash} alt="Delete" />
          </a>
        </div>
      </Card>

    </Container>
  );
}
