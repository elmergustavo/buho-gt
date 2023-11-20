import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-bold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <section className=" footer mt-4">
    <div className="max-w-10xl mx-auto py-10">
      <div className="flex justify-between gap-16">
        <div className="flex items-start flex-col">
          <Image
            src="/assets/logo/logo_horizontal_dark.svg"
            width={400}
            height={400}
            alt="logo"
          />

          <div className="flex justify-between gap-4 pt-4 font-semibold">
            <button className="px-4 py-2 text-sm bg-white text-black">
              Vende en Buhogt
            </button>
            <button className="px-4 py-2 text-sm bg-white text-black">
              Contáctanos
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-wrap gap-12">
            {/* <FooterColumn
              title={footerLinks[0].title}
              links={footerLinks[0].links}
            /> */}

            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn
                title={footerLinks[1].title}
                links={footerLinks[1].links}
              />
              {/* <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            /> */}
            </div>

            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />

            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn
                title={footerLinks[4].title}
                links={footerLinks[4].links}
              />
              {/* <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            /> */}
            </div>

            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
        </div>
      </div>
      <div className="flexBetween footer_copyright mt-6">
        <p>© Buhogt. Todos los derechos reservados.</p>
        <p className="text-gray space-x-5">
          <span className="">Política de privacidad </span>{" "}
          <span>|  Condiciones de uso</span>
          <span>|  Política de cookies</span>
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
