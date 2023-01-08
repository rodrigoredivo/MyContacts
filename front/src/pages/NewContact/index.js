import { useRef } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import ContactsService from '../../service/ContactsService';
import toast from '../../utils/toast';

export function NewContact() {
  const contactFormRef = useRef(null);

  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact, formData);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  };

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
