import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, children, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-weya-brown mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
} 