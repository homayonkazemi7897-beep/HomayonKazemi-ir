export type Locale = 'fa' | 'en';

export const site = {
  origin: 'https://homayonkazemi.ir',
  email: 'homayonkazemi7897@gmail.com',
  github: 'https://github.com/homayonkazemi7897-beep',
  phone: '09305907217',
  internationalPhone: '+989305907217',
  whatsapp: 'https://wa.me/989305907217',
  telegram: 'https://t.me/+989305907217',
  indexable: import.meta.env.SITE_INDEXABLE === 'true',
};

export const paths: Record<Locale, string> = { fa: '/', en: '/en/' };
export const canonical = (locale: Locale) => new URL(paths[locale], site.origin).href;

export const content = {
  fa: {
    lang: 'fa-IR',
    direction: 'rtl',
    name: 'همایون کاظمی',
    legalName: 'محمد کاظمی',
    title: 'همایون کاظمی | برنامه‌نویس فول‌استک و توسعه‌دهنده وب',
    description: 'همایون کاظمی، توسعه‌دهنده فول‌استک با ۶ سال تجربه در Node.js، React، Django و PHP؛ طراحی سایت، وردپرس، وب‌اپلیکیشن و اتصال API برای ایران و سراسر جهان.',
    role: 'توسعه‌دهندهٔ فول‌استک | فریلنسر',
    intro: 'ایده‌های شما را به وب‌سایت و وب‌اپلیکیشن تبدیل می‌کنم. با ۶ سال تجربه در برنامه‌نویسی، در طراحی سایت، توسعهٔ وردپرس و افزونه، ساخت وب‌اپلیکیشن و اتصال API فعالیت دارم.',
    availability: 'ساکن کرمان هستم و پروژه‌های داخل و خارج از ایران را به‌صورت دورکاری می‌پذیرم.',
    aboutTitle: 'دربارهٔ من',
    about: [
      'من محمد کاظمی هستم؛ خانواده و دوستانم من را با نام همایون می‌شناسند و همین نام را برای معرفی حرفه‌ای خودم انتخاب کرده‌ام.',
      'مسیر من به دنیای برنامه‌نویسی از مهندسی برق قدرت شروع شد. آشنایی با برنامه‌نویسی PLC برایم جذاب بود؛ اینکه بتوانم با نوشتن دستورها، رفتار یک سیستم را شکل بدهم و نتیجه‌اش را ببینم. این علاقه به‌تدریج من را به سمت طراحی وب‌سایت و ساخت وب‌اپلیکیشن برد. در ۶ سال گذشته در حوزهٔ برنامه‌نویسی فعالیت کرده‌ام.',
      'در کنار این مسیر، علاقهٔ شخصی به خودشناسی و شناخت انسان باعث شد روان‌شناسی بخوانم و تحصیلم را تا کارشناسی ارشد روان‌شناسی بالینی ادامه بدهم. روان‌شناسی برای من پیش از هر چیز یک علاقهٔ شخصی و مسیری برای شناخت بهتر خودم بود.',
      'نقطهٔ تلاقی این علاقه‌ها، ایدهٔ رشدیار بود؛ پروژهٔ شخصی من در زمینهٔ تست‌های آنلاین روان‌شناسی که طراحی، توسعه و اجرای کامل آن را خودم انجام داده‌ام.',
      'امروز به‌صورت فریلنسر فعالیت می‌کنم. Jornilo و رشدیار هر دو پروژه‌های خودم هستند؛ مالکیت، طراحی، توسعه و اجرای کامل آن‌ها با من است. هر شش پروژهٔ معرفی‌شده در این صفحه نیز به‌طور کامل توسط خودم طراحی و توسعه یافته‌اند.',
    ],
    servicesTitle: 'خدمات',
    services: [
      { title: 'طراحی و توسعهٔ سایت', text: 'طراحی و پیاده‌سازی وب‌سایت متناسب با نیاز کسب‌وکار شما.' },
      { title: 'وردپرس و افزونه', text: 'توسعهٔ سایت‌های وردپرسی و ساخت افزونه برای امکانات موردنیاز پروژه.' },
      { title: 'ساخت وب‌اپلیکیشن', text: 'تبدیل ایده‌ها و فرایندها به نرم‌افزارهای قابل استفاده در وب.' },
      { title: 'اتصال API', text: 'برقراری ارتباط میان وب‌سایت، نرم‌افزار و سرویس‌های دیگر.' },
    ],
    projectsTitle: 'نمونه‌کارها',
    projectRole: 'طراحی و توسعهٔ کامل',
    visitProject: 'مشاهدهٔ سایت',
    educationTitle: 'تحصیلات',
    education: [
      { degree: 'مهندسی برق قدرت', university: 'دانشگاه آزاد' },
      { degree: 'کارشناسی روان‌شناسی', university: 'دانشگاه آزاد' },
      { degree: 'کارشناسی ارشد روان‌شناسی بالینی', university: 'دانشگاه آزاد' },
    ],
    contactTitle: 'گفتگو دربارهٔ پروژه',
    contactText: 'برای معرفی پروژه و گفتگو دربارهٔ همکاری، از طریق ایمیل، واتساپ یا تلگرام پیام بدهید.',
    languageLabel: 'English',
    githubLabel: 'گیت‌هاب',
    draftNotice: 'پیش‌نمایش محلی محتوا و زیرساخت؛ طراحی ظاهری هنوز آغاز نشده است.',
  },
  en: {
    lang: 'en',
    direction: 'ltr',
    name: 'Homayoun Kazemi',
    legalName: 'Mohammad Kazemi',
    title: 'Homayoun Kazemi | Freelance Full-Stack Developer',
    description: 'Homayoun Kazemi is a freelance full-stack developer with six years of experience. Node.js, React, Django, PHP, WordPress and API integrations for clients worldwide.',
    role: 'Freelance Full-Stack Developer',
    intro: 'I turn ideas into websites and web applications. With six years of programming experience, I work on website development, WordPress and plugins, web applications, and API integrations.',
    availability: 'Based in Kerman, Iran, I accept remote projects from clients in Iran and worldwide.',
    aboutTitle: 'About me',
    about: [
      'My legal name is Mohammad Kazemi. My family and friends know me as Homayoun, the name I use professionally.',
      'My path into programming began with power electrical engineering. Discovering PLC programming introduced me to the satisfaction of writing instructions, shaping how a system behaves, and seeing the result. That interest gradually led me to website and web application development. I have been working in programming for six years.',
      'Alongside this journey, a personal interest in self-discovery and understanding people led me to study psychology and pursue a master’s degree in clinical psychology. Psychology was first and foremost a personal interest and a way to better understand myself.',
      'These interests came together in Roshdyar, my own online psychological testing project, which I fully designed, developed and launched myself.',
      'Today, I work as a freelancer. Jornilo and Roshdyar are both my own projects: I own them and independently handled their complete design, development and launch. I also designed and developed all six projects presented here.',
    ],
    servicesTitle: 'Services',
    services: [
      { title: 'Website design and development', text: 'Designing and building websites around your business needs.' },
      { title: 'WordPress and plugins', text: 'Developing WordPress websites and plugins for project-specific functionality.' },
      { title: 'Web applications', text: 'Turning ideas and workflows into applications that run on the web.' },
      { title: 'API integrations', text: 'Connecting websites and applications with other services.' },
    ],
    projectsTitle: 'Selected work',
    projectRole: 'Complete design and development',
    visitProject: 'Visit website',
    educationTitle: 'Education',
    education: [
      { degree: 'Power Electrical Engineering', university: 'Islamic Azad University' },
      { degree: 'Bachelor’s degree in Psychology', university: 'Islamic Azad University' },
      { degree: 'Master’s degree in Clinical Psychology', university: 'Islamic Azad University' },
    ],
    contactTitle: 'Discuss your project',
    contactText: 'Introduce your project and discuss working together by email, WhatsApp or Telegram.',
    languageLabel: 'فارسی',
    githubLabel: 'GitHub',
    draftNotice: 'Local content and infrastructure preview. Visual design has not started.',
  },
} as const;

export const projects = [
  { domain: 'darman-yab.ir', url: 'https://darman-yab.ir', note: { fa: '', en: '' } },
  { domain: 'jornilo.com', url: 'https://jornilo.com', note: { fa: 'پروژهٔ بین‌المللی متعلق به من؛ طراحی، توسعه و اجرای کامل توسط خودم.', en: 'My own international project, fully designed, developed and launched by me.' } },
  { domain: 'nobetra.ir', url: 'https://nobetra.ir', note: { fa: '', en: '' } },
  { domain: 'roshdyar.com', url: 'https://roshdyar.com', note: { fa: 'پروژهٔ شخصی من در زمینهٔ تست‌های آنلاین روان‌شناسی؛ طراحی، توسعه و اجرای کامل توسط خودم.', en: 'My own online psychological testing project, fully designed, developed and launched by me.' } },
  { domain: 'payam-saz.ir', url: 'https://payam-saz.ir', note: { fa: '', en: '' } },
  { domain: 'journalsaz.ir', url: 'https://journalsaz.ir', note: { fa: '', en: '' } },
] as const;

export const skills = ['Node.js', 'React', 'Django', 'PHP', 'WordPress', 'API Integration'];
export const resumePaths: Record<Locale, string> = { fa: '/resume/homayoun-kazemi-fa.pdf', en: '/resume/homayoun-kazemi-en.pdf' };
export const workflow = {
  fa: [
    { title: 'شناخت نیاز و هدف', text: 'در یک گفتگوی اولیه، هدف پروژه، مخاطبان، امکانات ضروری و اولویت‌ها را مشخص می‌کنیم تا مسیر اجرا روشن باشد.' },
    { title: 'توافق شفاف', text: 'دامنهٔ کار، خروجی‌ها، زمان‌بندی، هزینه و مراحل پرداخت را پیش از شروع مشخص می‌کنیم. درخواست‌های تازه را جداگانه بررسی و توافق می‌کنیم.' },
    { title: 'طراحی و توسعهٔ مرحله‌ای', text: 'پروژه را مرحله‌به‌مرحله پیش می‌بریم. در نقاط توافق‌شده، نسخهٔ قابل بررسی ارائه می‌دهم و بازخورد شما را در ادامهٔ اجرا لحاظ می‌کنم.' },
    { title: 'بررسی و تحویل', text: 'قابلیت‌های توافق‌شده و نمایش در موبایل و دسکتاپ را بررسی می‌کنیم؛ سپس کد، دسترسی‌ها و راهنمای لازم تحویل می‌شوند. شرایط پشتیبانی را در توافق پروژه مشخص می‌کنیم.' },
  ],
  en: [
    { title: 'Understand the goal', text: 'We discuss your goals, audience, essential features and priorities to define a clear direction for the project.' },
    { title: 'Agree on the scope', text: 'Before starting, we agree on deliverables, timeline, cost and payment milestones. New requirements are reviewed and agreed separately.' },
    { title: 'Design and build in stages', text: 'I develop the project in stages, share reviewable versions at agreed milestones and incorporate your feedback as we move forward.' },
    { title: 'Review and hand over', text: 'We review the agreed features and mobile and desktop layouts. I hand over the code, access and relevant guidance. Support terms are defined in our project agreement.' },
  ],
} as const;
