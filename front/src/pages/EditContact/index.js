import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { Loader } from '../../components/Loader';

import { ContactForm } from '../../components/ContactForm';
import toast from '../../utils/toast';
import ContactsService from '../../service/ContactsService';

export function EditContact() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );
        console.log({ contactData });
        setIsLoading(false);
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

      <PageHeader title="Editar Rodrigo Redivo" />

      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
