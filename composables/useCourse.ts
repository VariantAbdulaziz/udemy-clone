import { ref, computed } from "vue";
import type { CourseDetails } from "~/types/course";

export const useCourse = () => {
  const courseData = ref<CourseDetails>({
    id: "course-123",
    title: "Coinbase Come Comprare Bitcoin e Guadagnare™?",
    subtitle:
      "Come Acquisire e Guadagnare Facilmente Bitcoin. Tu Coinbase Come Online Comprare In Italiano.",
    instructor: {
      id: "instructor-1",
      name: "ACI69 Trading™",
      title: "Crypto Expert & Educator",
      bio: "Expert in cryptocurrency trading with over 5 years of experience teaching beginners.",
      avatar: "/images/instructor.jpg",
      rating: {
        score: 4.7,
        count: 1450,
      },
      students: 27500,
      courses: 12,
      reviews: 1450,
    },
    price: {
      current: 19.99,
      original: 94.99,
      discount: 79,
    },
    rating: {
      score: 4.7,
      count: 50,
    },
    relatedTopics: [
      "Bitcoin",
      "Cryptocurrency & Blockchain",
      "Finance & Accounting",
    ],
    students: 1127,
    lastUpdated: "March 2024",
    language: "Italian",
    description:
      "Corso Intensivo Inizierete per imparare Bitcoin ed altre criptovalute per guadagnare!",
    whatYouWillLearn: [
      "Guadagnare 10$ (circa 8€) di Benvenuto GRATIS",
      "Come Funziona Coinbase Per Comprare Altre Criptovalute",
      "Come Funziona Coinbase Per Comprare BITCOIN",
    ],
    tags: ["Bitcoin", "Cryptocurrency & Blockchain", "Finance & Accounting"],
    includes: {
      videoLength: "2 hours",
      articles: 1,
      resources: 2,
      accessTypes: ["Access on mobile and TV", "Full lifetime access"],
      certificate: true,
    },
    content: [
      {
        id: "section-1",
        title: "INTRODUZIONE A COINBASE Per Comprare BITCOIN",
        lectures: [
          {
            id: "lecture-1-1",
            title: "Introduzione",
            duration: "04:31",
            preview: true,
          },
          {
            id: "lecture-1-2",
            title: "IMPORTANTE Guarda Prima Di Andare Avanti, Grazie...",
            duration: "01:37",
            preview: false,
          },
          {
            id: "lecture-1-3",
            title: "Invito Per Studenti Al Gruppo Telegram ACI69",
            duration: "02:17",
            preview: false,
          },
          {
            id: "lecture-1-4",
            title: "Vantaggi Per Studenti ACI69",
            duration: "06:31",
            preview: false,
          },
        ],
        totalTime: "15min",
      },
      {
        id: "section-2",
        title: "COME SI REGISTRA GRATIS A COINBASE IN ITALIANO?",
        lectures: [
          {
            id: "lecture-2-1",
            title: "Come Registrarsi A Coinbase",
            duration: "03:22",
            preview: false,
          },
          {
            id: "lecture-2-2",
            title: "Verifica Account",
            duration: "05:47",
            preview: false,
          },
        ],
        totalTime: "9min",
      },
      {
        id: "section-3",
        title: "COINBASE COME COMPRARE GUADAGNARE E COME FUNZIONA?",
        lectures: [
          {
            id: "lecture-3-1",
            title: "Come Comprare Bitcoin",
            duration: "04:15",
            preview: false,
          },
          {
            id: "lecture-3-2",
            title: "Come Vendere Bitcoin",
            duration: "03:45",
            preview: false,
          },
        ],
        totalTime: "8min",
      },
    ],
    reviews: [
      {
        id: "review-1",
        user: {
          name: "Antonio B.",
          avatar: "/images/user1.webp",
        },
        rating: 5,
        date: "2 weeks ago",
        content:
          "Spiegazioni dettagliate del corso, ho apprezzato particolarmente i consigli per iniziare. Ottima guida per i principianti!",
        helpful: 12,
      },
      {
        id: "review-2",
        user: {
          name: "Paolo T.",
          avatar: "/images/user2.webp",
        },
        rating: 4,
        date: "1 month ago",
        content:
          "Buon corso introduttivo, molto gli spunti utili, forse avrei preferito approfondire meglio alcuni aspetti. In generale una buona introduzione.",
        helpful: 8,
      },
    ],
    relatedCourses: [
      {
        id: "related-1",
        title:
          "Bitcoin Trading For Beginners: Complete Guide To Trading Bitcoin",
        instructor: "Crypto Academy",
        thumbnail: "/images/other-course.png",
        rating: {
          score: 4.6,
          count: 320,
        },
        price: {
          current: 19.99,
          original: 84.99,
        },
      },
      {
        id: "related-2",
        title: "Complete Crypto Trading Course: Bitcoin & Altcoins",
        instructor: "Blockchain Masters",
        thumbnail: "/images/other-course.png",
        rating: {
          score: 4.8,
          count: 557,
        },
        price: {
          current: 18.99,
          original: 89.99,
        },
      },
    ],
    alsoBought: [
      {
        image: "/images/other-course.png",
        title: "Crypto Condensed: The Complete Guide To Bitcoin",
        duration: "7",
        updatedDate: "2/2024",
        rating: 4.3,
        students: 31355,
        price: "54.99",
      },
      {
        image: "/images/other-course.png",
        title: "Blockchain and Bitcoin Fundamentals",
        duration: "3",
        updatedDate: "4/2025",
        rating: 4.6,
        students: 132813,
        price: "74.99",
        bestseller: true,
      },
      {
        image: "/images/other-course.png",
        title: "Bitcoin Advanced Level: Transactions",
        duration: "1.5",
        updatedDate: "4/2025",
        rating: 4.8,
        students: 5891,
        price: "59.99",
      },
      {
        image: "/images/other-course.png",
        title: "Bitcoin and Cryptocurrency Bootcamp",
        duration: "8.5",
        updatedDate: "6/2018",
        rating: 4.5,
        students: 10706,
        price: "69.99",
      },
    ],
  });

  const expandedSections = ref<Record<string, boolean>>({});
  const isAllSectionsExpanded = ref(false);

  const toggleSection = (sectionId: string) => {
    expandedSections.value[sectionId] = !expandedSections.value[sectionId];
  };

  const toggleAllSections = () => {
    isAllSectionsExpanded.value = !isAllSectionsExpanded.value;

    courseData.value.content.forEach((section) => {
      expandedSections.value[section.id] = isAllSectionsExpanded.value;
    });
  };

  const formattedPrice = computed(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(courseData.value.price.current);
  });

  const formattedOriginalPrice = computed(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(courseData.value.price.original);
  });

  return {
    courseData,
    expandedSections,
    isAllSectionsExpanded,
    toggleSection,
    toggleAllSections,
    formattedPrice,
    formattedOriginalPrice,
  };
};
