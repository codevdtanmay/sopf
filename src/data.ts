import { NoticeItem, HighlightItem, StudentLifeItem, AchievementItem, GalleryItem, TestimonialItem } from './types';

export const SCHOOL_NOTICES: NoticeItem[] = [
  {
    id: 'not-1',
    title: 'Admissions Open for Academic Session 2026-27',
    date: 'June 10, 2026',
    category: 'admission',
    content: 'Online registration for pre-nursery to Class XI is now active. Please apply early as seat limits are strict to preserve academic quality. Read the admissions guidelines carefully before submitting.',
    isImportant: true,
  },
  {
    id: 'not-2',
    title: 'Annual Science & Tech Exhibition "Invenio"',
    date: 'June 08, 2026',
    category: 'event',
    content: 'Get ready for our annual flagship STEM showcase happening on Friday, July 3rd. Parents and premium institutional delegates are invited. Students will demonstrate custom AI, robotics, and biology projects.',
    isImportant: true,
  },
  {
    id: 'not-3',
    title: 'Summer Vacation Break Announcement',
    date: 'May 20, 2026',
    category: 'holiday',
    content: 'School remains closed for official summer break from June 15 to July 10. Normal administrative processes for admissions will continue operating from 9:00 AM to 1:00 PM on weekdays.',
    isImportant: false,
  },
  {
    id: 'not-4',
    title: 'Curriculum Enhancement: Integrated Artificial Intelligence',
    date: 'May 15, 2026',
    category: 'academic',
    content: 'Starting next semester, we are introducing smart computation modules including introductory Python and generative AI principles in modern laboratory environments for senior students.',
    isImportant: false,
  },
  {
    id: 'not-5',
    title: 'Inter-School Football Championship Finals',
    date: 'May 10, 2026',
    category: 'event',
    content: 'Our senior football team has entered the District Finals. The deciding match will take place at the Imperial Sports Arena tomorrow at 4:00 PM. Let us cheer for our stellar athletes!',
    isImportant: false,
  }
];

export const SCHOOL_HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'hl-1',
    title: 'Academic Excellence',
    description: 'A global curriculum focusing on analytical depth, creative problem solving, and personalized feedback.',
    iconName: 'GraduationCap',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-2',
    title: 'Experienced Faculty',
    description: 'Mentors from top international universities driven by passion and child-centric teaching standards.',
    iconName: 'Users',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-3',
    title: 'Modern Laboratories',
    description: 'State-of-the-art labs equipped with modern scientific models, high-grade devices and tools.',
    iconName: 'FlaskConical',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-4',
    title: 'Sports & Athletics',
    description: 'Professional-grade turf courts, tracking systems, and dedicated national coaches for overall health.',
    iconName: 'Trophy',
    color: 'from-rose-500/20 to-crimson-500/10 border-rose-500/30 text-rose-400',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-5',
    title: 'Arts & Culture',
    description: 'Nurturing theater, performance arts, Indian classical music, and sculptural painting under veteran maestros.',
    iconName: 'Palette',
    color: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-6',
    title: 'Leadership Dev',
    description: 'Structured youth assemblies, debate symposiums, and student council boards that spark self-governance traits.',
    iconName: 'Compass',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-7',
    title: 'Safe & Secure Campus',
    description: 'Round-the-clock visual secure parameters, digital gate passes, and specialized nursing support teams.',
    iconName: 'ShieldAlert',
    color: 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/20 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'hl-8',
    title: 'Smart Class Environment',
    description: 'Classrooms featuring premium overhead displays, air insulation systems, and comfortable ergonomic seating.',
    iconName: 'Cpu',
    color: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30 text-fuchsia-400',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
  }
];

export const STUDENT_LIFE_ACTIVITIES: StudentLifeItem[] = [
  {
    id: 'sl-1',
    title: 'Annual Theatre & Music Play',
    description: 'Expressing historic and modern sagas on campus stages. Our students work as actors, scenographers, light directors and live sound mixers, fostering beautiful collaboration and raw confidence.',
    category: 'Arts & Culture',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sl-2',
    title: 'Community Empowerment Initiatives',
    description: 'Driven by deep social conscience. Students participate in plastic-reduction sweeps, teach basic literacy to adjoining tribal hamlets, and direct blood donation camps in local regions.',
    category: 'Community Engagement',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sl-3',
    title: 'Industrial & Environmental Excursions',
    description: 'Experiencing education beyond text. Highlights include our visits to astronomical centers, pristine nature preserves, and smart manufacturing facilities to witness live industrial engineering.',
    category: 'Educational Trips',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sl-4',
    title: 'Leadership & Mock Parliament Forums',
    description: 'Fostering sharp civic duty. Through curated assemblies and live MUN summits, our students research international affairs, draft global resolutions, and host spirited debates.',
    category: 'Leadership Programs',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  }
];

export const SCHOOL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'National Mathematics Olympiad Gold',
    value: 12,
    suffix: ' Medals',
    description: 'Secured state-wide first ranks with gold commendations in complex analytical challenges.',
    iconName: 'Award',
    category: 'olympiad',
  },
  {
    id: 'ach-2',
    title: 'Perfect 10 CGPA CBSE Board Results',
    value: 100,
    suffix: '% Pass Rate',
    description: 'Our standard average score consistently breaches top-tier state-wide ranges.',
    iconName: 'BookmarkCheck',
    category: 'academic',
  },
  {
    id: 'ach-3',
    title: 'State Athletics Championship Trophy',
    value: 5,
    suffix: ' Years Straight',
    description: 'Stellar runs in high jump, standard sprints, and relay teams across multiple age ranks.',
    iconName: 'Medal',
    category: 'sports',
  },
  {
    id: 'ach-4',
    title: 'Young Innovators Global Grant Winner',
    value: 3,
    suffix: ' Projects Funded',
    description: 'Innovative student patents, including smart agricultural sensors, backed by elite science institutions.',
    iconName: 'Lightbulb',
    category: 'academic',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Our Majestic Main Academic Block',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '16:9'
  },
  {
    id: 'gal-2',
    title: 'Students analyzing formulas in Lab',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4:3'
  },
  {
    id: 'gal-3',
    title: 'Annual Musical Performance Day',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '1:1'
  },
  {
    id: 'gal-4',
    title: 'Smart Class Interactive Presentation',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'gal-5',
    title: 'Independence Day Celebrations',
    category: 'celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '16:9'
  },
  {
    id: 'gal-6',
    title: 'Lush Sports Ground & Practice Nets',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4:3'
  }
];

export const SCHOOL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Amitabh Sen',
    role: 'Senior Scientist at DRDO & Parent of Class XII Student',
    quote: 'The deep integration of critical research processes, robotics, and strong standard ethics here is exceptional. My child has transformed from an average student to a critical deep thinker.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    relationship: 'Parent'
  },
  {
    id: 'test-2',
    name: 'Ananya Deshmukh',
    role: 'Alumna (Batch of 2021) - Oxford University Scholar',
    quote: 'The freedom to explore literature and AI computational theories combined with mentoring from loving faculty prepared me completely for the rigorous atmosphere at Oxford. Pansy Flowers holds my heart.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    relationship: 'Alumni'
  },
  {
    id: 'test-3',
    name: 'Rohan Mehra',
    role: 'Head Boy & Standard XI Student',
    quote: 'Being at this school feels like being part of an advanced innovation group. From running our own student council to pitching environmental projects in global contests, we make decisions ourselves.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    relationship: 'Student'
  },
  {
    id: 'test-4',
    name: 'Meenakshi & Rajesh Nair',
    role: 'Business Owners & Parents of Class VI Student',
    quote: 'We were blown away by the levels of transparency and high-grade safety protocols. The daily analytics regarding academic milestones reassure us that our child is in the best educational hands.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    relationship: 'Parent'
  }
];

export const ADMISSION_PROCESS = [
  {
    step: '01',
    title: 'Online Registration Form',
    desc: 'Fill out our secure digital registration portal attaching necessary student credentials.'
  },
  {
    step: '02',
    title: 'Interactive Consultation',
    desc: 'An informal interactive dialogue with our faculty to assess the child’s natural gifts, spark and social orientation.'
  },
  {
    step: '03',
    title: 'Admissions Panel Review',
    desc: 'Transparent reviews of child’s interactive values. Our priorities are natural curiosity and basic behavioral habits.'
  },
  {
    step: '04',
    title: 'Joining & Onboarding',
    desc: 'On completion of basic verification and fee installments, we present you with our official premium educational starter kit.'
  }
];

export const REQUIRED_DOCUMENTS = [
  'Birth Certificate from certified government registrar.',
  'Affidavit stating permanent residence verification.',
  'Transfer Certificate (TC) from prior head institution (if applicable).',
  'Last two sessions academic reports / developmental profiles.',
  '4 Passport size colored photograph of Student & Parents.',
  'Aadhar Card / Government Passport copy of parents & child.'
];

export const IMPORTANT_DATES = [
  { event: 'Registration Portal Opens', date: 'June 01, 2026', badge: 'Active' },
  { event: 'Interaction Schedule Release', date: 'July 15, 2026', badge: 'Standard' },
  { event: 'First Selected Lists Out', date: 'July 25, 2026', badge: 'Deadline' },
  { event: 'Academic Semester Start', date: 'August 10, 2026', badge: 'Term' }
];
