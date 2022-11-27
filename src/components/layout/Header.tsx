import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex-none bg-white px-4 w-full">
      <div className="py-2 px-4 flex items-center justify-between shadow-lg rounded-b-lg text-gray-600">
        <div className="font-bold">DevStreetLab</div>

        <div className="flex items-center space-x-3">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link
            href="https://github.com/ashymee/nextts-project-starter.git"
            target="_blank"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
