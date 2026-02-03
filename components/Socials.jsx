import Link from "next/link";

import {
  RiGithubLine,
  RiTelegramLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/Sidikov213",
    Icon: RiGithubLine,
  },
  {
    name: "Telegram",
    link: "https://t.me/sidikovsd",
    Icon: RiTelegramLine,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/sidikov213",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
