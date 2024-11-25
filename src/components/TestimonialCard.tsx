interface TestimonialCardProps {
  name: string;
  content: string;
  image: string;
  date: string;
}

export default function TestimonialCard({ name, content, image, date }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}