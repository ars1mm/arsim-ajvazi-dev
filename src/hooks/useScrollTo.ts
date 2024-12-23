export const useScrollTo = () => {
  const scrollTo = (elementId: string | null) => {
    if (!elementId) {
      // Scroll to top
      const start = window.pageYOffset;
      const duration = 1000;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother movement
        const ease = (t: number) => t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(0, start * (1 - ease(progress)));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      const duration = 1000;
      const start = window.pageYOffset;
      const distance = offsetPosition - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother movement
        const ease = (t: number) => t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(0, start + (distance * ease(progress)));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return scrollTo;
};
