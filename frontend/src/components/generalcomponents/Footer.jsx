import React, { useState } from 'react';
import logo from '../../assets/images/finarium2.png';
import location from '../../assets/images/location.png';
import sms from '../../assets/images/sms.png';
import globe from '../../assets/images/global.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import xline from '../../assets/images/x-line.png';
import linkedin from '../../assets/images/linkedin.png';
import { ErrorMessage, SuccessMessage } from '../../utils/pageUtilis';

const Footer = () => {
  const [email, setEmail] = useState('');

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubscribe = async () => {
    if (!email || !validateEmail(email)) {
      ErrorMessage('Please enter a valid email address.');
      return setEmail('');
    }
    try {
      const response = await fetch('https://formspree.io/f/mblglqor', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        SuccessMessage('Thank you for subscribing!');
        setEmail(''); 
      } else {
        ErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      ErrorMessage('Something went wrong. Please try again.');
    }
  };

  const links = [
    {
      logo: location,
      title: 'California',
    },
    {
      logo: sms,
      title: 'hello@thefinarium.com',
      url: '/',
    },
    {
      logo: globe,
      title: 'thefinarium.com',
      url: '/',
    },
  ];

  const quicklinks = [
    {
      title: 'privacy policy',
      url: '/',
    },
    {
      title: 'terms of service',
      url: '/',
    },
    {
      title: 'disclaimer',
      url: '/',
    },
    {
      title: 'credits',
      url: '/',
    },
    {
      title: 'FAQ',
      url: '/',
    },
  ];

  const otherPages = [
    {
      title: 'home',
      url: '/',
    },
    {
      title: 'about us',
      url: '/',
    },
    {
      title: 'services',
      url: '/',
    },
    {
      title: 'projects',
      url: '/',
    },
    {
      title: 'contact',
      url: '/',
    },
  ];

  const socialLinks = [
    {
      logo: facebook,
      url: '/',
    },
    {
      logo: xline,
      url: '/',
    },
    {
      logo: instagram,
      url: '/',
    },
    {
      logo: linkedin,
      url: '/',
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full pt-20 lg:pb-40 pb-10 bg-[#000000] text-white">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex items-start flex-col lg:flex-row justify-between">
            {/* Finarium logo */}
            <div className="flex items-start flex-col gap-8 mb-10 lg:mb-0 w-full lg:w-1/3">
              <img src={logo} alt="finarium logo" />
              <div className="flex flex-col gap-3 items-start">
                {links.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={item.logo} alt={`${item.title} image`} />
                    <div className={`${item.url ? 'cursor-pointer' : ''}`}>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other pages and links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-2/3">
              <div className="flex items-center gap-20 w-full">
                <div className="flex items-start flex-col gap-5">
                  <div className="text-[16px] font-bold">Quick Links</div>
                  <div className="flex items-start gap-5 flex-col">
                    {quicklinks.map((item, i) => (
                      <div key={i} className="font-light cursor-pointer capitalize">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start flex-col gap-5">
                  <div className="text-[16px] font-bold">Other Pages</div>
                  <div className="flex items-start gap-5 flex-col">
                    {otherPages.map((item, i) => (
                      <div key={i} className="font-light cursor-pointer capitalize">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start flex-col gap-8 w-11/12 md:w-full">
                <div className="text-[16px] font-bold">NewsLetter</div>
                <div className="w-full bg-white text-black px-3 py-1.5 border rounded-full flex items-center gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full pl-2 outline-none text-balance"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="w-fit text-[13px] px-8 py-3 cursor-pointer rounded-full text-white bg-[#cc5802]"
                  >
                    Subscribe
                  </button>
                </div>

                <div>Get the latest News and Updates</div>
                <div className="flex items-center gap-4">
                  {socialLinks.map((item, i) => (
                    <img
                      key={i}
                      src={item.logo}
                      className="cursor-pointer hover:scale-115 transition duration-500 ease-in-out"
                      alt={`${item.title} logo`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-white px-5 text-[var(--color-dark)]">
        <div className="text-center text-sm md:text-base">
          © 2025 Finarium Inc. 180 Grand Avenue, 6th Floor, Oakland, CA 94612 +1 (929) 256-7807
        </div>
      </div>
    </div>
  );
};

export default Footer;