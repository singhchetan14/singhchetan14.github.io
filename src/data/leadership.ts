export interface Leader {
  name: string;
  position: string;
  photo?: string; // path under /images/leadership/
  bio?: string;
  social?: string;
  featured?: boolean;
}

export const leadershipYear = 'RY 2026–27';

export const leaders: Leader[] = [
  { name: 'Rtr. Ashna Awasthi', position: 'President', featured: true },
  { name: 'Rtr. Sushant Regmi', position: 'Immediate Past President' },
  { name: 'Rtr. Prabesh Bastakoti', position: 'President Elect' },
  { name: 'Rtr. Deepa Mehta', position: 'Vice President' },
  { name: 'Rtr. Ritu Sharma', position: 'Secretary' },
  { name: 'Rtr. Dilip Parajuli', position: 'Treasurer' },
  { name: 'Rtr. Samyog Acharya', position: 'Club Service Director' },
  { name: 'Rtr. Diksha Khadka', position: 'Community Service Director' },
  { name: 'Rtr. Raj Rajeshwori Lekhak', position: 'Professional Development Director' },
  { name: 'Rtr. Nishant Kc', position: 'International Service Director' },
  { name: 'Rtr. Dikshya Adhikari', position: 'Public Image Director' },
  { name: 'Rtr. Nikita Khanal', position: 'Membership Development Director' },
  { name: 'Rtr. Saksham Puri', position: 'Sergeant at Arms' },
];
