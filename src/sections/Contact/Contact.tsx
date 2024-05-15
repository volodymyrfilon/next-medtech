import { Title } from '@/components/shared/Title';
import { Form } from '@/components/shared/contact/Form';
import { Footer } from '@/layout/Footer';

export const Contact = () => {
  return (
    <section
      className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 md:grid-rows-2"
      id="contact"
    >
      <Title className="pl-10 pt-10 md:row-span-1 md:text-left">Записатися на консультацію</Title>
      <div className="rounded-[30px] bg-accent-gray px-5 py-12 md:col-start-2 md:row-span-full">
        <Form />
      </div>
      <Footer className="self-end md:row-start-2" />
    </section>
  );
};
