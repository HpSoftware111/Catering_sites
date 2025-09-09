'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateAltTextAction } from '@/lib/actions';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function ImageOptimizer() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [altText, setAltText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAltText('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleGenerateAltText = async () => {
    if (!previewUrl) {
      toast({
        title: 'No image selected',
        description: 'Please upload an image first.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    const result = await generateAltTextAction(previewUrl);
    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.altText) {
      setAltText(result.altText);
      toast({
        title: 'Alt Text Generated!',
        description: 'The AI has suggested alt text for your image.',
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Image Gallery Optimizer</CardTitle>
        <CardDescription>Upload an image to get an AI-powered suggestion for SEO-friendly alt text.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="image-upload">Upload Image</Label>
          <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {previewUrl && (
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border">
              <Image src={previewUrl} alt="Image preview" width={800} height={450} className="w-full object-contain" />
            </div>

            <Button onClick={handleGenerateAltText} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Suggest Alt Text
                </>
              )}
            </Button>

            <div className="space-y-2">
              <Label htmlFor="alt-text">Suggested Alt Text</Label>
              <Textarea
                id="alt-text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder={isLoading ? 'AI is thinking...' : 'Suggested alt text will appear here.'}
                className="min-h-[100px]"
              />
            </div>
          </div>
        )}
      </CardContent>
      {previewUrl &&
        <CardFooter>
          <Button className="w-full" disabled={!altText}>Save to Gallery</Button>
        </CardFooter>
      }
    </Card>
  );
}
