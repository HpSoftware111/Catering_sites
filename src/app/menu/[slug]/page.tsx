import { menuData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PartyPopper } from 'lucide-react';

export async function generateStaticParams() {
  return menuData.map((menu) => ({
    slug: menu.slug,
  }));
}

export default function MenuPage({ params }: { params: { slug: string } }) {
  const menu = menuData.find((m) => m.slug === params.slug);

  if (!menu) {
    notFound();
  }

  const { Icon } = menu;

  return (
    <div>
      {/* Banner Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src={menu.bannerImage}
          alt={`Banner for ${menu.title}`}
          data-ai-hint={`${menu.title.toLowerCase()} food banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <Icon className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            {menu.title}
          </h1>
        </div>
      </section>

      {/* Menu Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">{menu.longDescription}</p>
          </div>

          {menu.promotion && (
            <Alert className="mb-12 max-w-3xl mx-auto bg-accent/20 border-accent">
                <PartyPopper className="h-5 w-5 text-accent-foreground" />
                <AlertTitle className="font-headline text-accent-foreground text-xl">
                  {menu.promotion.title}
                </AlertTitle>
                <AlertDescription className="text-accent-foreground/80">
                  {menu.promotion.description}
                </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {menu.categories.map((category) => (
              <Card key={category.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between gap-4 border-b border-dashed pb-4 last:border-b-0">
                        <div>
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-primary">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-headline mb-4">Ready to Plan Your Event?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us today for a personalized quote and let us make your next event unforgettable.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-8">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
