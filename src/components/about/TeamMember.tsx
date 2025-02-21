import Image from 'next/image';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
    return (
        <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-gray-600">{role}</p>
        </div>
    );
} 