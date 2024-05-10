'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICONS } from '../../icons';

interface FormFields {
  fullName: string;
  email: string;
  consultationFormat: 'online' | 'offline';
  problem: string;
  contactVia: 'telegram' | 'instagram';
  socialNickname: string;
  acceptTermsOfUse: boolean;
}

const selectConsultationFormat = [
  {
    icon: <ICONS.INSTAGRAM className="h-8 w-8" />,
    value: 'Instagram',
  },
  {
    icon: <ICONS.TELEGRAM className="h-8 w-8" />,
    value: 'Telegram',
  },
];

export const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const methods = useForm();

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'Sorry',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex select-none flex-col gap-y-4"
      autoComplete="off"
    >
      <Input {...register('fullName')} type="text" placeholder="Ім'я та прізвище" />
      <Input {...register('email')} type="email" placeholder="Email" />
      <Select
        title="Як з Вами зв'язатися?"
        register={register('contactVia')}
        options={selectConsultationFormat}
      />
      <Button
        disabled={isSubmitting}
        variant="black"
        className="!rounded-[20px] px-4 py-[30px] !text-base "
      >
        {isSubmitting ? (
          'Надсилання...'
        ) : (
          <>
            Надіслати контакти
            <ICONS.ARROW_RIGHT className="h-6 w-6 fill-white" />
          </>
        )}
      </Button>
      {errors.root && <span className="text-red-500">{errors.root.message}</span>}
    </form>
  );
};

{
  /* <Checkbox
        register={register('acceptTermsOfUse', {
          required: 'ededwwedf',
        })}
        title="Прийняти умови та політику конфіденційності"
      >
        Ви погоджуєтеся з Умовами Користування та Політикою Конфіденційності
      </Checkbox>
      {errors.acceptTermsOfUse && (
        <span className="text-red-500">{errors.acceptTermsOfUse.message}</span>
      )} */
}

{
  /* <input
{...register('email', {
  required: 'Email is requiered',
  // pattern: /^[a-z0-9._&+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  validate: value => {
    if (!value.includes('@')) {
      return 'Email must include @';
    }
    return true;
  },
  minLength: {
    value: 1,
    message: 'Email must be minimim 8 vchar',
  },
})}
type="email"
placeholder="Email"
/>
{errors.email && <span className="text-red-500">{errors.email.message}</span>}
<input {...register('text')} type="text" placeholder="Problem" /> */
}
