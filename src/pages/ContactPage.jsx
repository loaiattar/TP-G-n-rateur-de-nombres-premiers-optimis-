import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-full flex-grow rounded-lg p-8">
        <ContactForm />
      </div>
    </>
  );
}