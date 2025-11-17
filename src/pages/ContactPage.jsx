import ContactForm from '../components/ContactForm';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

export default function Contact() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ContactForm />
    </div>
    <Footer />
    </>
  );
}