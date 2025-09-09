import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/data';
import { Badge } from '@/components/Badge';

export default function Home() {
  const breakfast = menuData.find((m) => m.slug === 'breakfast');
  const lunch = menuData.find((m) => m.slug === 'lunch');
  const hotBuffet = menuData.find((m) => m.slug === 'hot-buffet');
  const picnics = menuData.find((m) => m.slug === 'picnics');
  const sweetStuff = menuData.find((m) => m.slug === 'sweet-stuff');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/id/1074/1600/900"
            alt="A delicious spread of catered food on a buffet line"
            data-ai-hint="catering food buffet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4 flex flex-col items-center gap-8">
            <Badge />
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-8 font-bold rounded-full shadow-lg">
                <Link href="/contact">FREE Catering Quote</Link>
            </Button>
          </div>
        </section>

        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 space-y-12">
            {/* Welcome Section */}
            <section>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-muted-foreground">
                  <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                    Welcome to B Bistro Catering
                  </h1>
                  <p className="text-xl text-primary mt-1">
                    New Jersey's Premier Choice for Fresh, Flavorful Catering
                  </p>
                  <p>
                    At B Bistro Catering, we're proud to offer the finest in both
                    on-site and off-site catering services throughout New
                    Jersey. Whether you're planning a corporate lunch, private
                    party, wedding, or community event, our team delivers
                    exceptional food with unmatched attention to detail.
                  </p>
                  <p>
                    We specialize in making your event stress-free and delicious -
                    offering vegetarian, vegan, and gluten-free choices, as well
                    as all-inclusive packages that come complete with eco-friendly
                    paper goods, homemade desserts, and personalized service. Our
                    goal is simple: to be your go-to New Jersey caterer for any
                    occasion, big or small.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://picsum.photos/600/400"
                    alt="A person holding a large tray of catered appetizers"
                    data-ai-hint="catering appetizers"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </section>

            {/* Service Sections */}
            {[breakfast, lunch, hotBuffet].map(
              (service) =>
                service && (
                  <section
                    key={service.slug}
                    className="border border-border rounded-lg p-6 md:p-8"
                  >
                    <div className="grid md:grid-cols-12 gap-6 items-start">
                      <div className="md:col-span-3">
                        <h2 className="text-3xl font-headline text-primary mb-3">
                          {service.title}
                        </h2>
                        {service.serviceList && (
                          <p
                            className="text-muted-foreground whitespace-pre-line"
                            dangerouslySetInnerHTML={{
                              __html: service.serviceList.replace(/\\n/g, '<br />'),
                            }}
                          />
                        )}
                        <Button asChild className="mt-4">
                          <Link href={`/menu/${service.slug}`}>View Our Menu</Link>
                        </Button>
                      </div>
                      <div className="md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          {service.images?.map((img) => (
                            <Image
                              key={img.src}
                              src={img.src}
                              alt={img.alt}
                              width={250}
                              height={180}
                              className="rounded-md shadow-md w-full object-cover aspect-[4/3]"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground text-center">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </section>
                )
            )}

            {/* Picnic and Sweet Stuff Section */}
            <section className="grid md:grid-cols-2 gap-8">
              {picnics && (
                <div className="bg-primary text-primary-foreground rounded-lg p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-headline">{picnics.title}</h2>
                    <Button
                      asChild
                      variant="secondary"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      <Link href={`/menu/${picnics.slug}`}>View Our Menu</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 flex-grow">
                    {picnics.images?.map((img) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={200}
                        className="rounded-md shadow-md w-full object-cover aspect-video"
                      />
                    ))}
                  </div>
                  <p className="text-center">{picnics.description}</p>
                </div>
              )}
              {sweetStuff && (
                <div className="bg-accent text-accent-foreground rounded-lg p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-headline">{sweetStuff.title}</h2>
                    <Button
                      asChild
                      variant="secondary"
                      className="text-accent-foreground hover:bg-white/20 border-accent-foreground"
                    >
                      <Link href={`/menu/${sweetStuff.slug}`}>View Our Menu</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 flex-grow">
                    {sweetStuff.images?.map((img) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={200}
                        className="rounded-md shadow-md w-full object-cover aspect-video"
                      />
                    ))}
                  </div>
                  <p className="text-center">{sweetStuff.description}</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
