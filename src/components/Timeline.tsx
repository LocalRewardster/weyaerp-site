import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-weya-green"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
            {/* Timeline dot */}
            <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-1`}>
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-weya-green rounded-full border-4 border-white shadow-lg"></div>
            </div>
            
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'} order-2 ml-12 md:ml-0`}>
              <Card className="w-full max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {item.icon && <div className="mr-3">{item.icon}</div>}
                    <span className="text-sm font-medium text-weya-green bg-weya-green/10 px-2 py-1 rounded">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-weya-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'} hidden md:block`}></div>
          </div>
        ))}
      </div>
    </div>
  );
} 