import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="max-w-10xl mx-auto">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/logo/logo_horizontal.svg"
            width={180}
            height={180}
            alt="logo"
          />

          {/* <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p> */}
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
