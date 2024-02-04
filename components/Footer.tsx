import { logoCar } from "@/public/images";
import Image from "next/image";
import { footerLinks } from "@/contants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 max-w-[1440px] mx-auto">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={logoCar}
            alt="logo car"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((Links) => (
            <div className="footer__link" key={Links.title}>
              <h3 className="font-bold">{Links.title}</h3>
              {Links.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 Carhub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link className="text-gray-500" href="/">
            Privacy Policy
          </Link>
          <Link className="text-gray-500" href="/">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
