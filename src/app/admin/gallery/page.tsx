import { ImageOptimizer } from "@/components/ImageOptimizer";

export default function GalleryAdminPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Image Gallery AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
            Optimize your event photos for search engines with our AI-powered alt text generator.
          </p>
        </div>
        <ImageOptimizer />
      </div>
    </div>
  );
}
