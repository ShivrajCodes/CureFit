import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Hospitals", link: "/hospitals" },
  { name: "Doctors", link: "/doctors" },
  { name: "About", link: "/about" },
];

const socialLinks = [
  { icon: FaGithub, name: "GitHub", dropdown: true, accounts: [
      { name: "Shivraj", link: "https://github.com/ShivrajCodes" },
      { name: "Rudrangshu", link: "https://github.com/RUDRANGSHU2004" },
      { name: "Simantini", link: "https://github.com/Simantini06" },
    ]
  },
  { icon: FaLinkedin, name: "LinkedIn", dropdown: true, accounts: [
      { name: "Shivraj", link: "https://www.linkedin.com/in/shivraj-bhattacharya-516287282/" },
      { name: "Rudrangshu", link: "https://www.linkedin.com/in/rudrangshu-bose-03a83228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Simantini", link: "https://www.linkedin.com/in/simantini-das-34a314293/" },
    ]
  },
  { icon: FaTwitter, name: "Twitter", link: "https://x.com/scaryexistence" },
  { icon: FaInstagram, name: "Instagram", dropdown: true, accounts: [
      { name: "Shivraj", link: "https://www.instagram.com/shivrajdecodes/?hl=en" },
      { name: "Rudrangshu", link: "https://www.instagram.com/sv_rudra/?hl=en" },
      { name: "Simantini", link: "https://www.instagram.com/simantini06/?hl=en" },
    ]
  },
];

const Footer = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseEnter = (name) => {
    setVisibleDropdown(name);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <footer className="mt-auto bg-secondary-foreground py-6 text-sm text-primary-foreground lg:py-10">
      <div className="container mx-auto space-y-8">
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>CureFit</p>
            <p>Made by Script Squad</p>
          </div>
          <div className="space-x-6">
            {navLinks.map((link) => (
              <Link key={link.link} to={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="relative flex gap-4 text-base">
            {socialLinks.map(({ icon: Icon, name, link, dropdown, accounts }) => (
              <div
                key={name}
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Icon size={24} />
                </a>
                {dropdown && visibleDropdown === name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {accounts.map(({ name, link }) => (
                        <a
                          key={name}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4 text-muted-foreground sm:flex-row-reverse sm:justify-between">
          <Link to="/privacy">Privacy Policy</Link>
          <p>
            Built by{" "}
            <a
              target="_blank"
              className="font-medium transition-colors hover:text-muted"
              href="https://x.com/scaryexistence"
              rel="noopener noreferrer"
            >
              ShivrajCodes
            </a>{" "}
            2024
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
