import Image from "next/image";
export function Badge() {
  return (
    <div className="relative h-48 w-48">
          <Image
              src="https://drive.google.com/drive/folders/1sV5dI5gPHQiwOaW6Aty8hCDd6iC8bjXl/mark.png"
              alt="A delicious spread of catered food on a buffet line"
              data-ai-hint="catering food buffet"
              fill
              className="object-cover"
              priority
            />
    </div>
  );
}
