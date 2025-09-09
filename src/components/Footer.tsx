import Link from 'next/link';
import { Badge } from './Badge';
import Image from 'next/image';

const BBistroLogo = () => (
    <div className="flex items-center gap-2">
      <Image
          src="/images/brand.png"
          alt="A delicious spread of catered food on a buffet line"
          data-ai-hint="catering food buffet"
          fill
          className="object-cover"
          priority
        />
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
