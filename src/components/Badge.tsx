import Image from "next/image";
export function Badge() {
  return (
    <div className="relative h-48 w-48">
          <Image
              src="https://drive.google.com/file/d/1jK2T5ir2fcAD1YMdbt3TpJ0knrOqMMjw/view?usp=drive_link"
              alt="A delicious spread of catered food on a buffet line"
              data-ai-hint="catering food buffet"
              fill
              className="object-cover"
              priority
            />
    </div>
  );
}
