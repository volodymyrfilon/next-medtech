import { Title } from '@/components/shared/Title';
import { Form } from '@/components/shared/contact/Form';
import { Footer } from '@/layout/Footer';

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-8" id="contact">
      <Title>Записатися на консультацію</Title>
      <div className="rounded-[30px] bg-accent-gray px-5 py-12">
        <Form />
      </div>
      <Footer />
    </section>
  );
};
