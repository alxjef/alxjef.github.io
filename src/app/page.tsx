import FacePhoto from "@/components/FacePhoto";

type ContactData = {
  id: number;
  title: string;
  url: string;
};

const contactData: ContactData[] = [
  {
    id: 1,
    title: "+371 27848582",
    url: "tel:+37127848582",
  },
  {
    id: 2,
    title: "Telegram",
    url: "https://t.me/alxjef",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alex-jef-0b521a167/",
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://www.instagram.com/alx.jef/",
  }
];

export default function Page() {
  return (
    <main className="relative isolate mx-6 my-10 max-w-[768px] bg-primary md:mx-auto">
      <div className="flex h-full w-full flex-col rounded-primary bg-primary px-8 py-10 shadow-primary">
        <span className="mb-4 mt-4 text-sm font-light md:my-0 md:hidden">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="inline mr-2 motion-safe:animate-pulse opacity-100">
            <circle cx="6" cy="6" r="6" fill="#80F79A"/>
          </svg>
          Riga - San Francisco - Berlin
        </span>
        <div className="flex flex-row justify-between">
          <FacePhoto className=""/>
          <div className="flex-1 px-10 hidden md:block">
            <h1 className="text-3xl font-bold text-black/70">
              Alex Jef
            </h1>
            <ul className="w-full flex-col gap-1 text-black/60 mt-4 hidden md:flex">
              {contactData.map((item) => (
                  <li className="" key={item.id}>
                    <a className="font-normal hover:font-bold underline underline-offset-4" href={item.url}>
                      <span className="animate-bounce direction-alternate-reverse">→&nbsp;&nbsp;</span>
                      {item.title}
                    </a>
                  </li>
              ))}
            </ul>
          </div>
          <span className="mb-4 mt-4 text-sm font-light md:my-0 hidden md:block">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="inline mr-2 motion-safe:animate-pulse">
              <circle cx="6" cy="6" r="6" fill="#80F79A"/>
            </svg>
            Riga - San Francisco - Berlin
          </span>
        </div>
        <div className="block md:hidden mt-4">
          <h1 className="text-3xl font-bold text-black/70">
            Alex Jef
          </h1>
          <ul className="flex w-full flex-col gap-1 text-black/60 mt-4">
            {contactData.map((item) => (
                <li className="" key={item.id}>
                  <a className="font-normal hover:font-bold underline" href={item.url}>
                    → {item.title}
                  </a>
                </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-4 font-light text-black/60 mt-4">
          <li>
            <h1 className="font-bold">founder of <a className="underline" href="https://plus-pace.com/">content-pace</a></h1>
            <h2>*social platform to connect creatives with clients.</h2>
          </li>
          <li>
            <h1 className="font-bold">co-founder of startup-pace</h1>
            <h2>*disrupting the venture market by creating a new breed of founders.</h2>
          </li>
          <li>
            <h1 className="font-bold">co-founder of the Generative Model Agency</h1>
            <h2>*using AI to successfully solve crime and catch suspects with the state police.</h2>
          </li>
        </ul>
      </div>
    </main>
  );
}
