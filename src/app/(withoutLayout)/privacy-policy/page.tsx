import { ScrollBtn } from '@/components/shared/ScrollBtn';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Mail } from 'lucide-react';
import Link from 'next/link';

const privacyPolicyData = {
  title: 'Політика Приватності Вебсайту',
  dateLastUpdated: 'від Травня 06, 2024',
  content: [
    {
      number: '01',
      subtitle: 'Загальні положення.',
      text: [
        "Ці Умови конфіденційності є Офіційним документом, які становлять невід'ємну частину Умов використання веб-сайту julisadhu-matrix.vercel.app, який регулює взаємовідносини між власником веб-сайту julisadhu-matrix.vercel.app і його користувачами щодо переліку конфіденційної інформації, способів її збору, зберігання, обробки, розкриття, аналізу і процесингу, забезпечення безпеки у зв'язку з, і в процесі використання веб-сайту julisadhu-matrix.vercel.app. Наполегливо рекомендуємо користувачам детально Ознайомитися з викладеними Умовами конфіденційності перед початком використання веб-сайту julisadhu-matrix.vercel.app, його контенту, або Інших пов'язаних продуктів, адже, починаючи використовувати перераховані продукти, ви підтверджуєте свою згоду на використання веб-сайту julisadhu-matrix.vercel.app на умовах, викладених нижче. У разі, якщо Користувачі НЕ згодні повністю або частково з цими Умовами конфіденційності, прохання припинити / НЕ продовжувати роботу з веб-сайтом julisadhu-matrix.vercel.app.",
      ],
    },
    {
      number: '02',
      subtitle: 'Перелік конфіденційної інформації.',
      text: [
        'До персональної інформації, яка збирається, зберігається або обробляється в процесі використання веб-сайту julisadhu-matrix.vercel.app відносяться наступні види інформації',
        "Контактна інформація - до неї відноситься, зокрема: номер мобільного телефону, адреса електронної пошти, ім'я та прізвище Користувача, за допомогою якого Користувач може ідентифікувати себе.",
        'Інформація користувача - До неї відноситься, зокрема: будь-яка інформація, яка створюється і завантажується безпосередньо Користувачем, що передається і отримується, поширюється так чи інакше Користувачем в процесі і за допомогою використання веб-сайту julisadhu-matrix.vercel.app, а також безпосередньо інформація про Користувача.',
        "Матеріали третіх осіб - До неї відноситься, зокрема: дані, продукти, контент, об'єкти інтелектуальної власності, що створені, публікуються або іншим способом виходять від третіх осіб, відмінних від Користувача та / або Власника веб-сайту julisadhu-matrix.vercel.app.",
        'Інформація про акаунт Користувача - До неї відноситься, зокрема: інформація, яка так чи інакше отримана / зібрана про IP-адреси, типи пристроїв, з яких відбувається використання веб-сайту julisadhu-matrix.vercel.app, часу і частоту відвідувань веб-сайту julisadhu-matrix.vercel.app, геолокації Користувача і пристроїв, метадані, відгуки, рейтинги, фідбек, розміщений Користувачем, отриманий від інших користувачів / третіх осіб контенту.',
      ],
    },
    {
      number: '03',
      subtitle: 'Цілі збору інформації.',
      text: [
        'Збір інформації необхідний для того, щоб забезпечити наступне: Виконання завдань Користувача; Виявлення, розслідування та боротьба з шахрайством, несанкціонованим доступом або будь-якою іншою незаконною діяльністю по відношенню до веб-сайту julisadhu-matrix.vercel.app; забезпечення технічної підтримки Користувачів веб-сайту julisadhu-matrix.vercel.app Адміністрування веб-сайту julisadhu-matrix.vercel.app Забезпечення дотримання Умов користування веб-сайтом julisadhu-matrix.vercel.app Аналітика накопичених, знеособлених та анонімних інформацію з метою покращення та оптимізації якості обслуговування, результати якої будуть використані для оптимізації функціональності веб-сайту julisadhu-matrix.vercel.app та покращення наданого сервісу.',
        'Щодо вищезазначеного Власник веб-сайту julisadhu-matrix.vercel.app погоджується отримати повну та чітку згоду Користувача на збір та обробку зазначених даних.',
        'Починаючи фактичне використання веб-сайту julisadhu-matrix.vercel.app та встановлюючи завдання через веб-сайт julisadhu-matrix.vercel.app, включаючи завдання щодо обміну даними, Користувач висловлює свою повну та явну згоду на збір та обробку зазначених персональних даних.',
        'Приймаючи цю Політику конфіденційності, Користувач визнає та погоджується з тим, що дані, перелічені вище, збиратимуться, оброблятимуться та зберігатимуться на серверах Власника веб-сайту julisadhu-matrix.vercel.app. Збір, зберігання, обробка або будь-яке використання інформації для цілей, відмінних від зазначених у цьому документі, суворо заборонено. Ніхто не має права поширювати, публікувати чи іншим чином використовувати інформацію користувача будь-яким способом, який порушує або потенційно порушує права третіх сторін або інших користувачів.',
      ],
    },
    {
      number: '04',
      subtitle: 'Момент збору інформації.',
      text: [
        'Власник програми збирає інформацію, коли: Користувач безпосередньо використовує інтерфейси веб-сайту julisadhu-matrix.vercel.app; Користувачі створюють, завантажують і обмінюються даними або іншим чином беруть участь у відповідних комунікаціях; Користувач спілкується з Власником веб-сайту julisadhu-matrix.vercel.app через веб-сайт julisadhu-matrix.vercel.app та пов’язані системи.',
      ],
    },
    {
      number: '05',
      subtitle: 'Розкриття персональних даних.',
      text: [
        'Власники веб-сайту julisadhu-matrix.vercel.app залишають за собою право розкривати персональні дані Користувача таким особам: Третім особам, які є партнерами Власника веб-сайту julisadhu-matrix.vercel.app і, таким чином, допомагають у наданні послуг. (обслуговування, підтримка, хостинг, управління базами даних тощо). У цьому випадку інформація розкривається виключно для цілей надання послуг, а особа, якій вона доступна, зобов’язується не розголошувати та не використовувати інформацію поза сферою дії цієї Політики конфіденційності; представники органів державної влади – для відповіді на юридично обґрунтовані запити у зв’язку з офіційними процедурами, розслідуваннями, якщо обов’язок розголошення вимагається чинним законодавством; Професійні консультанти (юристи, аудитори та ін.) для цілей незалежного аудиту, корпоративного управління та процедур комплаєнс.',
      ],
    },
    {
      number: '06',
      subtitle:
        'Розкриття, передача, обмін особистою інформацією відбувається тільки з повної, прямо вираженої і вичерпної згоди Користувача. Користувач має можливість в будь-який момент запобігти, зупинити подальшу передачу, обмін персональної інформації.',
      text: [],
    },
    {
      number: '07',
      subtitle: 'Зберігання і безпека даних.',
      text: [
        "Власник веб-сайту julisadhu-matrix.vercel.app вживає всіх необхідних і об'єктивно обґрунтованих заходів для захисту інформації користувачів від витоку, втрати, незаконного і несанкціонованого використання. Проте, Користувач повинен також усвідомлювати, що веб-сайт julisadhu-matrix.vercel.app знаходиться у відкритому онлайн-доступі, у зв'язку із чим може бути підданий кібератакам, вірусам і іншим подібним негативним явищам, що не гарантує Користувачеві абсолютної безпеки використовуваного сервісу; веб-сайт julisadhu-matrix.vercel.app використовується ним на власний ризик і Власники веб-сайту julisadhu-matrix.vercel.app не несуть жодної відповідальності за шкоду/збиток, що виникли у результаті загроз інформаційної і кібербезпеки. Користувач також усвідомлює, що застосовані заходи інформаційної безпеки і захисту даних не гарантують абсолютний захист будь-якої інформації, що передається. Власники веб-сайту julisadhu-matrix.vercel.app також не відповідають за дії третіх осіб, яким Користувач розкриває або іншим чином передає інформацію. Так як веб-сайт julisadhu-matrix.vercel.app функціонує глобально, Користувач усвідомлює і погоджується з тим, що персональна інформація може бути передана на пристрої, що знаходяться у будь-якій іншій країні світу, і з різними рівнем захисту даних. Використовуючи веб-сайт julisadhu-matrix.vercel.app, Користувач підтверджує і надає згоду на такий рух даних.",
      ],
    },
    {
      number: '08',
      subtitle: 'Зміна персональних даних.',
      text: [
        "Користувачі мають право у будь-який момент змінювати, оновлювати, виправляти і видаляти персональну інформацію за допомогою веб-сайту julisadhu-matrix.vercel.app. Користувач погоджується з тим, що після видалення своїх даних / контенту - копії таких даних можуть продовжувати зберігатись на сервері в результаті резервного копіювання даних протягом деякого часу. Проте Власник веб-сайту julisadhu-matrix.vercel.app не зобов'язаний зберігати такі дані після припинення строку дії даних Умов конфіденційності і Користувач усвідомлює, що під час припинення використання сервісу його дані і контент можуть не зберегтися.",
      ],
    },
    {
      number: '09',
      subtitle: 'Cookies.',
      text: [
        'Файли-сookies можуть бути використані для моніторингу використання веб-сайту julisadhu-matrix.vercel.app і веб-трафіку для оптимізації і покращення сервісу. Користувач усвідомлює, що сookies можуть збирати певну персональну інформацію про Користувачів, включаючи інформацію про IP-адреси Користувачів, інформацію про типи пристроїв, операційні системи, що використовуються, про час і частоту надходжень.',
        'Користувач може змінити налаштування свого браузера, заблокувавши можливість автоматичного використання таких файлів-сookies. Зібрана інформація може бути використана виключно для аналітики акумульованої, деперсоналізованної і анонімізованної інформації, результати якої можуть бути використані Власником веб-сайту julisadhu-matrix.vercel.app для оптимізації функціоналу веб-сайту julisadhu-matrix.vercel.app і поліпшення сервісу, що надається. Відмова від використання сookies, проте, може вплинути на можливість доступу до тих або інших функціональних можливостей веб-сайту julisadhu-matrix.vercel.app.',
      ],
    },
    {
      number: '10',
      subtitle: 'Зміни в Умовах конфіденційності.',
      text: [
        'Власники веб-сайту julisadhu-matrix.vercel.app зберігають за собою право у будь-який момент відкликати дію даних Умов конфіденційності, вносити до них зміни, доповнення без попередньої згоди Користувачів або їх попереднього повідомлення.',
        'У разі визнання окремих положень даних Умов конфіденційності недійсними, або їх недійсності в межах тієї або іншої юрисдикції, це не тягне за собою визнання недійсними Умов конфіденційності в цілому, як і недійсності їх окремих положень у межах конкретних юрисдикцій.',
        'З моменту внесення відповідних змін до цих Умов конфіденційності, вони підлягають публікації на платформі, де знаходиться веб-сайт julisadhu-matrix.vercel.app, а також розміщення вказівки угорі тексту на дату оголошення.',
      ],
    },
    {
      number: '11',
      subtitle: 'Контактні дані.',
      text: [],
    },
  ],
};

const page = () => {
  const { title, dateLastUpdated, content } = privacyPolicyData;
  return (
    <section className="mb-24 mt-14 min-h-screen xl:mb-32" id="privacy-policy">
      <div className="container">
        <Link href="/" className="flex items-center gap-x-2 text-white">
          <Button
            variant="primary"
            className="flex items-center gap-x-2 [&>*]:hover:!-translate-x-3"
            aria-label="Повернутись на головну сторінку"
          >
            <ChevronLeft className="h-5 w-5" />
            На головну
          </Button>
        </Link>
        {/* page title and date */}
        <div className="mt-8">
          <h1 className="h1 extended uppercase">{title}</h1>
          <h3 className="text-sm text-accent-dark/60">{dateLastUpdated}</h3>
        </div>

        {/* privacy policy content */}
        <ol className="[counter-reset:section] sm:w-2/3">
          {content.map((item, index) => (
            <li className="mt-12 [counter-increment:section] xl:mt-24" key={index}>
              {/* number */}
              <div className="extended text-4xl font-black md:text-7xl">{item.number}</div>
              {/* subtitle */}
              <h2 className="mb-10 mt-2 text-2xl font-bold leading-6 md:text-4xl ">
                {item.subtitle}
              </h2>
              {/* text */}
              <ol className="font-eUkraine text-sm font-semibold leading-6 text-black/60 [counter-reset:section] md:text-base">
                {item.text.map((text, index) => (
                  <li
                    className="my-2 ml-8 px-2 [counter-increment:section] marker:[content:counters(section,'.')]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ol>
            </li>
          ))}
          {}
        </ol>
        {/* contacts */}
        <div className="mt-6 flex flex-col items-start gap-5 text-left xl:gap-8">
          {/* mail */}
          <div className="flex flex-col gap-x-4 xl:items-start">
            <div className="flex items-center gap-x-2 text-sm md:text-xl">
              <Mail className="h-5 w-5" />
              <h2 className="font-semibold">Пошта</h2>
            </div>
            <Link
              rel="nofollow noreferrer"
              href="mailto:julia.lohvynenko.psychology@gmail.com"
              className="text-sm font-semibold leading-6 text-black/60 hover:text-accent-primary focus:text-accent-primary md:text-base"
            >
              julia.lohvynenko.psychology@gmail.com
            </Link>
          </div>
        </div>
        {/* buttons */}
        <div className="special:flex-row mt-8 flex flex-col gap-4 text-base md:text-lg">
          <Link href="/" className="flex items-center gap-x-2 text-white">
            <Button
              variant="primary"
              className="flex items-center gap-x-2 [&>*]:hover:!-translate-x-3"
              aria-label="Повернутись на головну сторінку"
            >
              <ChevronLeft className="h-5 w-5" />
              На головну
            </Button>
          </Link>
        </div>
      </div>
      <ScrollBtn link="privacy-policy" />
    </section>
  );
};

export default page;
