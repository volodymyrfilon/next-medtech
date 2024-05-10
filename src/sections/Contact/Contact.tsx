import { Title } from '@/components/shared/Title';
import { Form } from '@/components/shared/contact/Form';
import { Footer } from '@/layout/Footer';

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <Title>Записатися на консультацію</Title>
      <div className="bg-accent-gray rounded-[30px] px-5 py-12">
        <Form />
      </div>
      <Footer />
    </section>
  );
};
