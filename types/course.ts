export interface Rating {
  score: number;
  count: number;
}

export interface CourseDetails {
  id: string;
  title: string;
  subtitle: string;
  instructor: Instructor;
  price: {
    current: number;
    original: number;
    discount: number;
  };
  relatedTopics: string[];
  rating: Rating;
  students: number;
  lastUpdated: string;
  language: string;
  description: string;
  whatYouWillLearn: string[];
  tags: string[];
  includes: CourseIncludes;
  content: CourseSection[];
  reviews: Review[];
  relatedCourses: RelatedCourse[];
  alsoBought: AlsoBoughtCourse[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  rating: Rating;
  students: number;
  courses: number;
  reviews: number;
}

export interface CourseIncludes {
  videoLength: string;
  articles: number;
  resources: number;
  accessTypes: string[];
  certificate: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  lectures: CourseLecture[];
  totalTime: string;
}

export interface CourseLecture {
  id: string;
  title: string;
  duration: string;
  preview: boolean;
}

export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

export interface RelatedCourse {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: Rating;
  price: {
    current: number;
    original: number;
  };
}

export interface AlsoBoughtCourse {
  image: string;
  title: string;
  duration: string;
  updatedDate: string;
  rating: number;
  students: number;
  price: string;
  bestseller?: boolean;
}
