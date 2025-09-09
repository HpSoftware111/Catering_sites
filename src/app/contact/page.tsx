import { ContactForm } from '@/components/ContactForm';
import { Map } from '@/components/Map';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
            We'd love to hear about your event! Fill out the form below for a
            free quote, or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-headline mb-6">Request a Free Quote</h2>
            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-headline mb-6">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>(732) 418-0160</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>catering@bbistro.com</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>123 Foodie Lane, Edison, NJ 08817</span>
                  </div>
                </div>
            </div>
            <div className="h-80 w-full">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
