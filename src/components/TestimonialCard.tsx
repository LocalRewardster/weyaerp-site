import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'text-weya-gold fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-weya-green rounded-full flex items-center justify-center mr-4">
            {avatar ? (
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <span className="text-white font-semibold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-weya-brown">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 