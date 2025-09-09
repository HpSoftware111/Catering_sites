import Image from "next/image";
export function Badge() {
  return (
    <div className="relative h-48 w-48">
          <Image
              src="@/images/mark.png"
              alt="A delicious spread of catered food on a buffet line"
              data-ai-hint="catering food buffet"
              fill
              className="object-cover"
              priority
            />
    </div>
  );
}
