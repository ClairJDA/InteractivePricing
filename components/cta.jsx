import Link from "next/link";
import Image from "next/image";

function CTA() {
  return (
    <div className="p-8 flex flex-col gap-y-6 md:flex-row justify-between items-center text-sm text-grayish-blue">
      <ul className="flex flex-col gap-y-1 md:gap-y-0">
        <li>
          <Image
            src="/images/icon-check.svg"
            alt="bullet icon"
            width={10}
            height={10}
            className="inline-block mr-4"
          />
          Unlimited websites
        </li>
        <li>
          <Image
            src="/images/icon-check.svg"
            alt="bullet icon"
            width={10}
            height={10}
            className="inline-block mr-4"
          />
          100% data ownership
        </li>
        <li>
          <Image
            src="/images/icon-check.svg"
            alt="bullet icon"
            width={10}
            height={10}
            className="inline-block mr-4"
          />
          Email reports
        </li>
      </ul>

      <Link
        href="#"
        className="py-2 px-5 align-top text-light-grayish-blue rounded-full bg-dark-desaturated-blue hover:cursor-pointer hover:text-very-pale-blue"
      >
        Start my trial
      </Link>
    </div>
  );
}

export default CTA;
