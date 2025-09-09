import Link from 'next/link';
import { Badge } from './Badge';

const BBistroLogo = () => (
    <div className="flex items-center gap-2">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M14.664 3.74H7.53C5.323 3.74 3.52 5.543 3.52 7.75V26.25C3.52 28.457 5.323 30.26 7.53 30.26H14.664C18.674 30.26 21.623 27.818 21.623 23.36C21.623 18.647 18.06 17.062 15.617 17.062H11.53V17.052H15.22C18.52 17.052 20.87 14.966 20.87 11.1C20.87 6.84 18.23 3.74 14.664 3.74ZM11.53 24.31H14.16C15.91 24.31 17.062 23.918 17.062 22.54C17.062 20.955 15.518 20.955 14.16 20.955H11.53V24.31ZM11.53 13.16H14.16C15.91 13.16 16.51 12.905 16.51 11.575C16.51 9.942 15.518 9.842 14.16 9.842H11.53V13.16Z"
          fill="currentColor"
        />
         <path
          d="M13.62 10.97c0-1.14-.92-2.07-2.06-2.07s-2.07.93-2.07 2.07c0 1.14.93 2.06 2.07 2.06s2.06-.92 2.06-2.06z"
          fill="currentColor"
        />
        <path 
          d="M13.62 22.99a2.06 2.06 0 10-4.12 0 2.06 2.06 0 004.12 0z"
          fill="currentColor"
        />
      </svg>
      <span className="text-xl font-semibold">bistro</span>
    </div>
);

export function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute left-4 bottom-0 transform translate-y-1/4 hidden lg:block">
                <Badge />
            </div>
            <div className="lg:pl-56 w-full lg:w-auto flex flex-col items-center md:items-start text-center md:text-left gap-4">
                 <div className="flex justify-center w-full lg:w-auto">
                    <BBistroLogo />
                 </div>
                 <p className="text-sm text-gray-400 max-w-sm">
                    If you have any questions or need more detailed information, please feel free to contact us via phone or email.
                 </p>
            </div>
            <div className="text-sm text-center md:text-right space-y-2">
                <p>Request a Quote: <a href="mailto:catering@bbistro.com" className="hover:underline">catering@bbistro.com</a></p>
                <p>B Bistro Catering - (732) 418-0160</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
