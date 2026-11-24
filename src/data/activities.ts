export type ActivityId = 'community' | 'health' | 'education' | 'awareness' | 'professional' | 'fellowship';

export interface Project {
  title: string;
  description: string;
  date?: string;
  category: ActivityId;
  location?: string;
  photos?: string[];
  link?: string;
}

export const areas: { id: ActivityId; title: string; description: string; icon: string }[] = [
  { id: 'community', title: 'Community Service', description: 'Taking action to support and uplift the communities around us.', icon: 'hand-heart' },
  { id: 'health', title: 'Health Programs', description: 'Initiatives that promote wellbeing and healthier communities.', icon: 'heart-pulse' },
  { id: 'education', title: 'Educational Initiatives', description: 'Sharing knowledge and opening doors to learning.', icon: 'graduation-cap' },
  { id: 'awareness', title: 'Awareness Campaigns', description: 'Raising voices and understanding on issues that matter.', icon: 'megaphone' },
  { id: 'professional', title: 'Professional Development', description: 'Building skills, confidence and leadership for the future.', icon: 'briefcase' },
  { id: 'fellowship', title: 'Fellowship and Collaboration', description: 'Meaningful connections and shared projects with fellow changemakers.', icon: 'users' },
];

// Empty until real projects are confirmed. Never fabricate entries.
export const projects: Project[] = [];
