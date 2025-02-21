import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ReviewCardProps {
    id: number;
    name: string;
    rating: number;
    comment: string;
}

export function ReviewCard({ name, rating, comment }: ReviewCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="font-bold">{name}</p>
                    <span className="text-yellow-500">{'★'.repeat(rating)}</span>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">{comment}</p>
            </CardContent>
        </Card>
    );
} 