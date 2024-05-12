'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICONS } from '../../icons';

interface FormFields {
  fullName: string;
  email: string;
  consultationFormat: 'online' | 'offline' | null;
  problem: string;
  contactVia: 'telegram' | 'instagram' | null;
  socialNickname: string;
  acceptTermsOfUse: boolean;
}

const optionsContactVia = [
  {
    icon: <ICONS.INSTAGRAM className="h-8 w-8" />,
    value: 'Instagram',
  },
  {
    icon: <ICONS.TELEGRAM className="h-8 w-8" />,
    value: 'Telegram',
  },
];
const optionsConsultationFormat = [
  {
    value: 'Online',
  },
  {
    value: 'Offline',
  },
];

export const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  setValue('contactVia', null);
  setValue('consultationFormat', null);

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
      if (!data.contactVia || !data.consultationFormat) {
        setError('consultationFormat', {
          type: 'required',
          message: 'Будь ласка, виберіть формат консультації',
        });
        setError('contactVia', {
          type: 'required',
          message: "Будь ласка, виберіть, як з вами зв'язатися",
        });
      }

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
      className="flex select-none flex-col gap-y-4"
      autoComplete="off"
    >
      <Input
        {...register('fullName', {
          required: "Це поле обов'язкове",
          validate: {
            containsNoDigits: value => {
              if (/\d/.test(value)) {
                return "Ім'я не має містити цифри";
              }
              return true;
            },
            containsNoSpecialChars: value => {
              if (/[^a-zA-Zа-яА-ЯєЄїЇіІ\s]/.test(value)) {
                return "Ім'я не має містити спеціальних символів";
              }
              return true;
            },
          },
          minLength: {
            value: 3,
            message: 'Мінімальна кількість знаків має бути 3',
          },
          maxLength: {
            value: 50,
            message: 'Максимальна кількість знаків має бути 50',
          },
        })}
        type="text"
        placeholder="Ім'я та прізвище"
      />
      {errors.fullName && <span className="-mt-3 text-red-500">{errors.fullName.message}</span>}
      <Input
        {...register('email', {
          required: "Це поле обов'язкове",
          validate: value => {
            if (!value.includes('@')) {
              return 'Пошта має мати символ @';
            }
            return true;
          },
          minLength: {
            value: 4,
            message: 'Мінімальна кількість знаків має бути 4',
          },
          maxLength: {
            value: 256,
            message: 'Максимальна кількість знаків має бути 256',
          },
        })}
        type="email"
        placeholder="Email"
      />
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
        register={register('problem', {
          required: "Це поле обов'язкове",
          minLength: {
            value: 10,
            message: 'Мінімальна кількість знаків має бути 10',
          },
          maxLength: {
            value: 800,
            message: 'Максимальна кількість знаків має бути 800',
          },
        })}
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
