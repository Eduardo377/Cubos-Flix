import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer footer__icons">
      <span className="footer__contact">
        <p>CONTACT</p>
        <div>
          <a
            href="https://discord.com/channels/#8875/"
            alt="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./assets/discord.svg"
              alt="Discord"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521982646297"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./assets/whatsapp.svg"
              alt="Contato por WhatsApp"
              width={30}
              height={30}
            />
          </a>
          <a
            href="mailto:eduardogomes377@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./assets/email.svg"
              alt="Contato por Email"
              width={30}
              height={30}
            />
          </a>
        </div>
      </span>
      <span>
        <div className="footer__followUS">
          <p>FOLLOWS US</p>
          <div>
            <a
              href="https://www.linkedin.com/in/eduardogomes377"
              alt="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://github.com/Eduardo377"
              alt="Perfil no GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/github.svg"
                alt="GitHub"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://gitlab.com/eduardo377"
              alt="Perfil no GitLab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/gitlab.svg"
                alt="GitLab"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div>
            <a
              href="https://codepen.io//users/eduardo377"
              alt="CodePen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/codepen.svg"
                alt="CodePen"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://pt.stackoverflow.com/users/259231/eduardo377"
              alt="Stack Overflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/stackoverflow.svg"
                alt="Stack Over Flow"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.codewars.com/users/eduardo377"
              alt="Codewars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/codewars.svg"
                alt="Code Wars"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </span>
    </footer>
  );
};

export default Footer;
