'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Coffee, Instagram, Laptop, Send } from 'lucide-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ICONS } from '../../icons';

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Мінімальна кількість 3 символи' })
    .max(50, { message: 'Максимальна кількість 50 символів' })
    .refine(
      value => /[^a-zA-Zа-яА-ЯєЄїЇіІ\s]/.test(value ?? ''),
      'Це поле не має містити спеціальних символів'
    )
    .refine(value => /\d/.test(value ?? ''), 'Це поле не має містити цифри'),
  email: z
    .string()
    .email('Невірна пошта')
    .max(265, { message: 'Максимальна кількість 50 символів' }),
  consultationFormat: z.string(),
  problem: z
    .string()
    .min(10, { message: 'Мінімальна кількість 10 символів' })
    .max(2000, { message: 'Максимальна кількість 2000 символів' }),
  contactVia: z.string(),
  socialNickname: z.string(),
  acceptTermsOfUse: z.boolean(),
});

type FormFields = z.infer<typeof schema>;
//   fullName: string;
//   email: string;
//   consultationFormat: 'Online' | 'Offline';
//   problem: string;
//   contactVia: 'Telegram' | 'Instagram';
//   socialNickname: string;
//   acceptTermsOfUse: boolean;

const optionsContactVia = [
  {
    icon: <Instagram className="h-5 w-5" />,
    value: 'Instagram',
  },
  {
    icon: <Send className="h-5 w-5" />,
    value: 'Telegram',
  },
];
const optionsConsultationFormat = [
  {
    icon: <Laptop className="h-5 w-5" />,
    value: 'Online',
  },
  {
    icon: <Coffee className="h-5 w-5" />,
    value: 'Offline',
  },
];

export const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  setValue('contactVia', 'Telegram');
  setValue('consultationFormat', 'Offline');

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      // if (data.contactVia === null) {
      //   setError('contactVia', {
      //     type: 'required',
      //     message: "Будь ласка, виберіть, як з вами зв'язатися",
      //   });
      // }
      // if (!data.consultationFormat) {
      //   setError('consultationFormat', {
      //     type: 'required',
      //     message: 'Будь ласка, виберіть формат консультації',
      //   });
      // }
      // if (!data.contactVia || !data.consultationFormat) {
      //   return;
      // }

      await new Promise(resolve => setTimeout(resolve, 800));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'Вибачте, сталася помилка. Будь ласка, спробуйте знову пізніше.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex select-none flex-col gap-y-4 font-eUkraine"
      autoComplete="off"
    >
      <Input {...register('fullName')} type="text" placeholder="Ім'я та прізвище" />
      {errors.fullName && <span className="-mt-3 text-red-500">{errors.fullName.message}</span>}
      <Input {...register('email')} type="email" placeholder="Email" />
      {errors.email && <span className="-mt-3 text-red-500">{errors.email.message}</span>}

      <Select
        title="Який формат консультації Вас цікавить?"
        name={'consultationFormat'}
        placeholder="Виберіть опцію"
        options={optionsConsultationFormat}
        setValue={setValue as any}
      />
      {errors.consultationFormat && (
        <span className="-mt-3 text-red-500">{errors.consultationFormat.message}</span>
      )}

      <Textarea
        placeholder="Опишіть детально свій запит чи проблему та яка послуга Вас цікавить.."
        register={register('problem')}
      />
      {errors.problem && <span className="-mt-3 text-red-500">{errors.problem.message}</span>}

      <Select
        title="Як з Вами зв'язатися?"
        name={'contactVia'}
        options={optionsContactVia}
        placeholder="Виберіть опцію"
        setValue={setValue as any}
      />
      {errors.contactVia && <span className="-mt-3 text-red-500">{errors.contactVia.message}</span>}

      <Input
        {...register('socialNickname', {
          required: "Це поле обов'язкове",
          validate: {
            containsAllowedCharacters: value => {
              if (!/^[a-zA-Z0-9_.]*$/.test(value)) {
                return 'Поле може містити тільки цифри, латинські літери, крапки та підкреслення';
              }
              return true;
            },
          },
          maxLength: {
            value: 60,
            message: 'Максимальна кількість знаків має бути 60',
          },
        })}
        type="text"
        placeholder="Нікнейм в соц. мережі"
      />
      {errors.socialNickname && (
        <span className="-mt-3 text-red-500">{errors.socialNickname.message}</span>
      )}
      <div
        className="items-top flex space-x-2"
        {...register('acceptTermsOfUse', {
          required: "Це поле обов'язкове",
        })}
      >
        <Checkbox id="terms" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="rounded text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Прийняти умови користування та політику конфіденційності
          </label>
          <p className="font-eUkraine text-sm font-light text-accent-dark/50">
            Я погоджуюсь з{' '}
            <Link
              className="underline hover:text-accent-primary focus:text-accent-primary"
              href="/privacy-policy"
            >
              Умовами Користування та Політикою Конфіденційності
            </Link>
          </p>
        </div>
      </div>
      {errors.acceptTermsOfUse && (
        <span className="-mt-3 text-red-500">{errors.acceptTermsOfUse.message}</span>
      )}

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
      {isSubmitSuccessful && <span className="text-green-500">Успішно відправлено!</span>}
    </form>
  );
};
