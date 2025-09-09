// import ImageUploader from './ImageUploader';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Image Gallery Optimizer
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Use our AI tool to generate SEO-friendly alt text for your images. Upload an image to get a suggestion.
        </p>
      </div>
      {/* <ImageUploader /> */}
    </div>
  );
}
