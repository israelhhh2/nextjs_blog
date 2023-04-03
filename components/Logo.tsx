import Image from "next/image";
import Link from "next/link";
function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Link href="/">
        <Image
          src="/../public/bitmoji.png"
          width={60}
          className="rounded-full"
          height={60}
          alt="logo"
        />
      </Link>
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
