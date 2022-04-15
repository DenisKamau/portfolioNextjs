import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image src="/logo.png" priority height={40} width={40} layout="fixed" alt="logo" />
      </div>
      <div>
        <nav>
          <ul className="flex gap-8 text-gray-300 capitalize font-medium font-poppins tracking-wide text-sm">
            <li>About</li>
            <li>My Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
