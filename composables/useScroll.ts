import { ref, onMounted, onUnmounted } from "vue";

export const useScroll = () => {
  const scrollY = ref(0);
  const isHeaderFixed = ref(false);
  const isCartFixed = ref(false);

  const headerFixedThreshold = ref(80);
  const cartFixedThreshold = ref(150);

  const handleScroll = () => {
    scrollY.value = window.scrollY;
    isHeaderFixed.value = scrollY.value > headerFixedThreshold.value;

    const footer = document.querySelector("footer");
    const purchaseCard = document.querySelector(".lg\\:sticky");

    if (footer && purchaseCard) {
      const footerTop = footer.getBoundingClientRect().top;
      const cardHeight = purchaseCard.getBoundingClientRect().height;

      const stopThreshold = footerTop - cardHeight - 40;

      isCartFixed.value =
        scrollY.value > cartFixedThreshold.value && stopThreshold > 0;
    } else {
      isCartFixed.value = scrollY.value > cartFixedThreshold.value;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    scrollY,
    isHeaderFixed,
    isCartFixed,
  };
};
