import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="text-[#8ebbff] flex items-center justify-start p-5">
        <ArrowUturnLeftIcon className="h-6 w-6 text-[#8ebbff] mr-2" />
        <Link href="/">Go to Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
