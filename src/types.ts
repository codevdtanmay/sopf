export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'event' | 'holiday' | 'admission';
  content: string;
  isImportant?: boolean;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  image: string;
}

export interface StudentLifeItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
  category: 'academic' | 'sports' | 'olympiad' | 'arts';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'events' | 'celebrations' | 'activities';
  imageUrl: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  relationship: 'Parent' | 'Student' | 'Alumni';
}

export interface TeacherPortalMessage {
  id: string;
  sender: string;
  role: string;
  subject: string;
  message: string;
  time: string;
}
