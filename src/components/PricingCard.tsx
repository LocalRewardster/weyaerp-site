import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { formatDualCurrency } from '@/lib/currency';

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaAction: () => void;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  ctaText,
  ctaAction
}: PricingCardProps) {
  return (
    <Card className={`relative h-full ${popular ? 'border-weya-green border-2' : ''}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-weya-green text-white">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-weya-brown">{title}</CardTitle>
        <div className="mt-4">
          <div className="text-3xl font-bold text-weya-brown">
            {price === 0 ? 'Custom' : formatDualCurrency(price)}
          </div>
          <div className="text-sm text-gray-600">
            {period === 'custom' ? 'pricing' : `per ${period}`}
          </div>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-weya-green mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-weya-green hover:bg-weya-green/90 text-white' 
              : 'bg-white hover:bg-gray-50 text-weya-green border-2 border-weya-green'
          }`}
          onClick={ctaAction}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
} 