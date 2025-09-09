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
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-8 font-bold rounded-full shadow-lg"
            >
              <Link href="/contact">FREE Catering Quote</Link>
            </Button>
          </div>
        </section>

        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 space-y-16">
            {/* Welcome Section */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="https://picsum.photos/600/400"
                    alt="A person holding a large tray of catered appetizers"
                    data-ai-hint="catering appetizers"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                    Welcome to Bistro Bytes
                  </h1>
                  <p className="text-xl text-primary mt-1">
                    New Jersey's Premier Choice for Fresh, Flavorful Catering
                  </p>
                  <p>
                    At Bistro Bytes, we're proud to offer the finest in both
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
              </div>
            </section>

            {/* Featured Services Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Featured Services</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[breakfast, lunch, hotBuffet].map(
                  (service) =>
                    service && (
                      <div key={service.slug} className="border border-border rounded-lg p-6 text-center flex flex-col">
                        <h3 className="text-2xl font-headline text-primary mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                        <div className="mb-4">
                           <Image
                              src={service.thumbnail}
                              alt={`Thumbnail for ${service.title}`}
                              width={400}
                              height={250}
                              className="rounded-md shadow-md w-full object-cover aspect-[16/10]"
                            />
                        </div>
                        <Button asChild>
                          <Link href={`/menu/${service.slug}`}>View Menu</Link>
                        </Button>
                      </div>
                    )
                )}
              </div>
            </section>

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
                        data-ai-hint={img.alt.toLowerCase().split(' ').slice(0,2).join(' ')}
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
                        data-ai-hint={img.alt.toLowerCase().split(' ').slice(0,2).join(' ')}
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
