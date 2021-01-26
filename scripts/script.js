let animeNumber = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let txtNumber = Math.floor(progress * (end - start) + start) + "";
    if (txtNumber.length > 3) {
      txtNumber = txtNumber.charAt(0) + "," + txtNumber.slice(1);
    }
    obj.innerHTML = txtNumber;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

let numbers = document.querySelectorAll(".counter-number");
numbers.forEach((number) => {
  animeNumber(number, 0, number.dataset.number, 1000);
});

let ratio = 0.4
let observer = new IntersectionObserver(
    (observables) => {
      observables.forEach((observable) => {
        if (observable.intersectionRatio > ratio) {
          observable.target.classList.remove("enter-right-a");
          observable.target.classList.remove("enter-left-a");
          observable.target.classList.remove("enter-bottom-a");
          observer.unobserve(observable.target);
        }
      });
    },
    {
      threshold: [ratio],
    }
  );
  
  let enterLeft = document.querySelectorAll(".enter-left");
  let enterRight = document.querySelectorAll(".enter-right");
  let enterBottom = document.querySelectorAll(".enter-bottom");
  
  enterLeft.forEach((item) => {
    item.classList.add("enter-left-a");
    observer.observe(item);
  });
  
  enterRight.forEach((item) => {
    item.classList.add("enter-right-a");
    observer.observe(item);
  });

  enterBottom.forEach((item) => {
    item.classList.add("enter-bottom-a");
    console.log("script.js -> 58: item", item  )
    observer.observe(item);
  });
  