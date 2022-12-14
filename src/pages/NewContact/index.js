import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import ContactsService from '../../service/ContactsService';

export function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await ContactsService.CreateContact(contact, formData);
      console.log('New Contact --> handleSubmit', response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato!');
    }
  };

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
