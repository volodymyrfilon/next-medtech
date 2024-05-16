'use client';

import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, Coffee, Instagram, Laptop, Send } from 'lucide-react';
import Link from 'next/link';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Мінімальна кількість 3 символи' })
    .max(60, { message: 'Максимальна кількість 60 символів' })
    .refine(
      value => !/[^a-zA-Zа-яА-ЯєЄїЇіІ\s]/.test(value ?? ''),
      'Це поле не має містити символи або цифри'
    ),
  email: z
    .string()
    .email('Невірна пошта')
    .max(265, { message: 'Максимальна кількість 50 символів' }),
  consultationFormat: z.string({ required_error: "Це поле обов'язкове" }),
  problem: z
    .string()
    .min(8, { message: 'Мінімальна кількість 8 символів' })
    .max(2000, { message: 'Максимальна кількість 2000 символів' }),
  contactVia: z.string({ required_error: "Це поле обов'язкове" }),
  socialNickname: z
    .string()
    .min(3, { message: 'Мінімальна кількість 3 символи' })
    .max(60, { message: 'Максимальна кількість 60 символів' })
    .refine(value => /^[a-zA-Z0-9_.]*$/.test(value ?? ''), {
      message: 'Це поле може містити тільки цифри, латинські літери, крапки та підкреслення',
    }),
  isLegal: z.coerce.boolean().refine(bool => bool == true, {
    message: 'Необхідна згода з нашими умовами та політикою',
  }),
});

type FormFields = z.infer<typeof schema>;

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

export const Form = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = data => {
    try {
      const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID || 'service_j8r5h38';
      const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID || 'template_7jx2b3h';
      const EMAIL_JS_PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY || '0plltW8PYgxE3m6KW';

      const formParams = {
        fullName: data.fullName,
        email: data.email,
        consultationFormat: data.consultationFormat,
        problem: data.problem,
        contactVia: data.contactVia,
        socialNickname: data.socialNickname,
      };

      emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, formParams, EMAIL_JS_PUBLIC_KEY);
    } catch (error) {
      setError('root', {
        message: 'Вибачте, сталася помилка. Будь ласка, спробуйте знову пізніше.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex select-none flex-col gap-y-4 font-eUkraine font-light ${className}`}
      autoComplete="off"
    >
      <Input
        {...register('fullName')}
        type="text"
        placeholder="Ім'я та прізвище"
        error={errors.fullName?.message}
      />
      <Input
        {...register('email')}
        type="email"
        placeholder="Email"
        error={errors.email?.message}
      />

      <Controller
        name="consultationFormat"
        control={control}
        render={({ field }) => (
          <>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectGroup>
                <SelectLabel>Який формат консультації Вас цікавить?</SelectLabel>
                <SelectTrigger>
                  <SelectValue placeholder="Виберіть опцію" />
                </SelectTrigger>
                <SelectContent className="flex gap-x-2">
                  {optionsConsultationFormat.map(option => (
                    <SelectItem value={option.value} key={option.value}>
                      <span className="!flex !gap-x-2">
                        {option.icon}
                        {option.value}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
            {errors.consultationFormat && (
              <span className="-mt-3 text-sm text-red-500">
                {errors.consultationFormat.message}
              </span>
            )}
          </>
        )}
      />

      <Textarea
        placeholder="Опишіть детально свій запит чи проблему та яка послуга Вас цікавить.."
        register={register('problem')}
        error={errors.problem?.message}
      />

      <Controller
        name="contactVia"
        control={control}
        render={({ field }) => (
          <>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectGroup>
                <SelectLabel>Як з Вами зв'язатись?</SelectLabel>
                <SelectTrigger>
                  <SelectValue placeholder="Виберіть опцію" />
                </SelectTrigger>
                <SelectContent>
                  {optionsContactVia.map(option => (
                    <SelectItem value={option.value} className="flex gap-x-2" key={option.value}>
                      <span className="!flex !gap-x-2">
                        {option.icon}
                        {option.value}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
            {errors.contactVia && (
              <span className="-mt-3 text-sm text-red-500">{errors.contactVia.message}</span>
            )}
          </>
        )}
      />

      <Input
        {...register('socialNickname')}
        type="text"
        placeholder="Нікнейм в соц. мережі"
        error={errors.socialNickname?.message}
      />

      <div className="items-top flex space-x-2">
        <Controller
          name="isLegal"
          control={control}
          render={({ field }) => (
            <>
              <Checkbox
                id="isLegal"
                aria-label="Прийняти умови користування та політику конфіденційності"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
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
            </>
          )}
        />
      </div>
      {errors.isLegal && (
        <span className="-mt-3 text-sm text-red-500">{errors.isLegal.message}</span>
      )}

      <Button
        disabled={isSubmitting}
        variant="black"
        className="h-20 !rounded-[20px] px-4 !text-sm"
        aria-label="Відправити"
      >
        {isSubmitting ? (
          'Відправка...'
        ) : (
          <>
            Надіслати контакти
            <ChevronRight className="h-6 w-6 text-white" />
          </>
        )}
      </Button>
      {errors.root && <span className="text-sm text-red-500">{errors.root.message}</span>}
      {isSubmitSuccessful && <span className="text-sm text-green-500">Успішно відправлено!</span>}
    </form>
  );
};
