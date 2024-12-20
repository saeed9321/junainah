export interface Farm {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  details: string;
  activities: string[];
  contact: {
    phone: string;
    email: string;
  };
}