import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

interface Item {
  link: string;
  icon: React.ReactNode;
}

const SOCIAL_ITEMS: Array<Item> = [
  {
    link: "https://www.linkedin.com/in/israelhhh2/",
    icon: <AiOutlineLinkedin size={35} />,
  },
  {
    link: "https://github.com/israelhhh2",
    icon: <AiOutlineGithub size={35} />,
  },
  {
    link: "https://www.instagram.com/josephhh__17/",
    icon: <AiOutlineInstagram size={35} />,
  },
  {
    link: "https://twitter.com/israelhhh2",
    icon: <AiOutlineTwitter size={28} />,
  },
];
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/../public/bitmoji.png"
            width={70}
            className="rounded-full"
            height={70}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex space-x-8 ">
        {SOCIAL_ITEMS.map((item) => {
          return (
            <div className="flex ">
              <a href={item.link} target="_blank">
                {item.icon}
              </a>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
