import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  price?: string;
};

export default function PropertyCard({ title, subtitle, image, price }: Props) {
  return (
    <div className="rounded-lg overflow-hidden border bg-white shadow-sm">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        {price && <p className="mt-2 font-medium">{price}</p>}
      </div>
    </div>
  );
}
