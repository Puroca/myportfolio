import { FaFacebook,  FaGithub,  FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-slate-800">
        <div className="md:w-[80%] p-4 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <a>
            <Link to={'/'} className="text-xl">
              <img src="/logo_h.png" className="w-[4rem]" />
            </Link>
          </a>
          <div className="text-center text-slate-300 md:text-start">
            <p>{`© 2024 P. Rocherdi AIHOUNDA. Tous droits réservés.`}</p>
          </div>
          <div className="flex space-x-4 items-center text-4xl text-slate-300">
            <Link target="_blank" to={'https://github.com/Puroca'}>
              <FaGithub />
            </Link>
            <Link
              className=""
              target="_blank"
              to={'https://linkedin.com/in/rocher-aihounda-583698300'}
            >
              <FaLinkedin />
            </Link>
            <Link
              className=""
              target="_blank"
              to={'https://wa.me/+22991225343'}
            >
              <FaWhatsapp />
            </Link>
            <Link
              className=""
              target="_blank"
              to={'https://web.facebook.com/profile.php?id=100082296141255'}
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    )
};

export default Footer;
