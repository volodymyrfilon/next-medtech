import { Title } from '@/components/shared/Title';
import { CertificatesList } from '@/components/shared/certificates/CertificatesList/CertificatesList';

export type CertificateType = {
  title: string;
  image: string;
  width: number;
  height: number;
};

const certificates: CertificateType[] = [
  {
    title: 'Сертифікат з МАК карт',
    image: '/images/certificates/cards.webp',
    width: 700,
    height: 500,
  },
  {
    title: 'Сертифікат з Матриці Долі',
    image: '/images/certificates/matrix.webp',
    width: 700,
    height: 500,
  },
  {
    title: 'Сертифікат з Психосоматики',
    image: '/images/certificates/psychosomatics.webp',
    width: 700,
    height: 500,
  },
  {
    title: 'Сертифікат з Цвяхостояння',
    image: '/images/certificates/nails.webp',
    width: 700,
    height: 500,
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="flex flex-col gap-y-8">
      <Title>Мої сертифікати</Title>
      <CertificatesList certificates={certificates} />
    </section>
  );
};
