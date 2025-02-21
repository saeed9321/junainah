import Image from 'next/image';

interface StoryCardProps {
    year: string;
    title: string;
    image: string;
    content: string;
}

export function StoryCard({ year, title, image, content }: StoryCardProps) {
    return (
        <div className="group relative h-96 rounded-2xl overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <span className="text-white/80 text-sm">{year}</span>
                <h3 className="text-2xl text-white mt-2">{title}</h3>
                <p className="text-white/90 mt-4">{content}</p>
            </div>
        </div>
    );
} 