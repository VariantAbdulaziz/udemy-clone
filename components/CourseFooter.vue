<template>
  <footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-8">
        <div
          class="col-span-full flex justify-between items-center lg:col-span-1"
        >
          <h3 class="text-lg">
            Top companies choose
            <a href="#" class="text-indigo-400 hover:text-indigo-300"
              >Udemy Business</a
            >
            to build in-demand career skills.
          </h3>
          <div class="flex items-center space-x-6 mt-4">
            <img src="/images/nasdaq.png" alt="Nasdaq" class="h-8" />
            <img src="/images/volkswagen.png" alt="Volkswagen" class="h-8" />
            <img src="/images/netapp.png" alt="NetApp" class="h-8" />
            <img src="/images/eventbrite.png" alt="Eventbrite" class="h-8" />
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-8">
            Explore top skills and certifications
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div v-for="(section, index) in skillSections" :key="index">
              <h3 class="font-bold mb-4">{{ section.title }}</h3>
              <ul class="space-y-3">
                <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                  <a href="#" class="text-gray-400 hover:text-white">{{
                    link
                  }}</a>
                </li>
                <li v-if="section.seeAll" class="mt-2">
                  <a href="#" class="text-blue-400 hover:text-blue-300">{{
                    section.seeAll
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(section, index) in linkSections" :key="index">
            <h4 class="font-bold mb-4">{{ section.title }}</h4>
            <ul class="space-y-2">
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a href="#" class="text-gray-400 hover:text-white text-sm">{{
                  link
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-udemy-dark-gray"
      >
        <div>
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="Udemy Logo"
            class="h-8"
          />
        </div>

        <div class="mt-4 md:mt-0 text-sm">© 2024 Udemy, Inc.</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const skillSections = [
  {
    title: "In-demand Careers",
    links: [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
    ],
    seeAll: "See all Career Academies",
  },
  {
    title: "Web Development",
    links: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
  },
  {
    title: "IT Certifications",
    links: [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure Fundamentals",
      "AWS Certified Solutions Architect - Associate",
      "Kubernetes",
    ],
  },
  {
    title: "Leadership",
    links: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence",
    ],
  },
];

const linkSections = [
  {
    title: "About",
    links: ["About us", "Careers", "Contact us", "Blog", "Investors"],
  },
  {
    title: "Discover Udemy",
    links: [
      "Get the app",
      "Teach on Udemy",
      "Plans and Pricing",
      "Affiliate",
      "Help and Support",
    ],
  },
  {
    title: "Udemy for Business",
    links: ["Udemy Business"],
  },
  {
    title: "Legal & Accessibility",
    links: ["Accessibility statement", "Privacy policy", "Sitemap", "Terms"],
  },
];
</script>
