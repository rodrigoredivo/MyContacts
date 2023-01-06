import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { Loader } from '../../components/Loader';

import { ContactForm } from '../../components/ContactForm';
import toast from '../../utils/toast';
import ContactsService from '../../service/ContactsService';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contact = await ContactsService.getContactById(
          id,
        );

        contactFormRef.current.setFieldsValues(contact);
        setIsLoading(false);
        setContactName(contact.name);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    };

    loadContact();
  }, [id, history]);

  const handleSubmit = () => {
    //
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
