/* ============================================================
   EDIT ONLY THIS SECTION
   ============================================================ */
const content = {
  password: "SIP",

  herName: "Sarah Zahalane",
  yourName: "Hani Eid",
  anniversaryDate: "Sep 03, 2024",

  hero: {
    eyebrow: "A little world I made for you",
    title: "Happy Anniversary, hayete❤️",
    subtitle: "Even from different places, there are little ways to be close."
  },

  details: [
    {title:"A tiny memory", text:"Write a very specific memory here — something she may have forgotten."},
    {title:"Something you noticed", text:"A small habit, expression, phrase, or detail you love."},
    {title:"The first time", text:"A memory from when you first met or first started talking."},
    {title:"An inside joke", text:"Put an inside joke here."},
    {title:"Something I admire", text:"A specific quality you admire in her."},
    {title:"A moment I replay", text:"Describe a moment you wish you could relive."},
    {title:"Something you said", text:"A sentence she once said that stayed with you."},
    {title:"A tiny thing", text:"Something incredibly small that makes you smile."},
    {title:"What I miss", text:"A detail about her you miss when you're apart."},
    {title:"What makes us us", text:"Something unique about your relationship."},
    {title:"A promise", text:"A promise you want to make to her."},
    {title:"The detail still missing", text:"Leave this one mysterious — it leads into the final reveal."}
  ],

  timeline: [
    {date:"2015", title:"Where it began", text:"At Bassam Merhi's apartment in Dubai (2015). Your name was brought up"},
    {date:"NOV 19, 2017", title:"First Instagram message", text:"", photo:"photos/photo-19.png"},
    {date:"JUN 23, 2018", title:"First WhatsApp message", text:"", photo:"photos/photo-18.jpg"},
    {date:"AUG 16, 2018", title:"First WhatsApp picture", text:"", photo:"photos/photo-17.jpg"},
    {date:"SEP 04, 2023", title:"Date at SIP", text:"A moment that changed things (For me at least🙄)"},
    {date:"AUG 28, 2024", title:"Date at Steak Bar Sushi", text:"I was so stressed that day because I wanted everything to be just right. I wanted you to be happy, I wanted the moment to be special, and more than anything, I wanted everything between us to work out"},
    {date:"SEP 03, 2024", title:"Date at Kalei", text:"Anniversary", photo:"photos/photo-1.jpg"}
  ],

  littleThings: "There are so many little things about you that I don't think you realize I notice. The way your laugh changes when something genuinely catches you off guard, the little words and expressions you use without thinking, the way you get excited when you're talking about something you love. I notice the way your mood shows in the smallest things, the way you care about details, and all those small pieces of you that might seem ordinary to everyone else, but to me, they're not ordinary at all. They're the little things that make you you, and somehow, after two years, I still find myself loving you a little more because of them.",

  distance: {
    title:"QATAR ↔ LEBANON",
    text:"Distance has probably been the hardest part of our story, but somehow it has also shown me just how much you mean to me."
  },

  songs: [
    {title:"Our song", artist:"ARTIST", url:""},
    {title:"This reminds me of you", artist:"ARTIST", url:""},
    {title:"For our next chapter", artist:"ARTIST", url:""}
  ],

photos: [
  { type: "image", src: "photos/photo-2.jpg" },  
  { type: "image", src: "photos/photo-3.jpg" },
  { type: "image", src: "photos/photo-4.jpg" },
  { type: "image", src: "photos/photo-5.png" },
  { type: "video", src: "photos/video-01.mp4" },  
  { type: "image", src: "photos/photo-8.jpg" },
  { type: "image", src: "photos/photo-9.jpg" },
  { type: "video", src: "photos/video-02.mp4" },  
  { type: "image", src: "photos/photo-10.jpg" },
  { type: "image", src: "photos/photo-11.jpg" },
  { type: "image", src: "photos/photo-12.jpg" },
  { type: "image", src: "photos/photo-13.jpg" },
  { type: "image", src: "photos/photo-14.jpg" },
  { type: "image", src: "photos/photo-15.jpg" },
  { type: "image", src: "photos/photo-16.jpg" }
],

  letter: `Two years with you, and somehow I still find new little reasons to love you

One of the things I love most about you is how caring and thoughtful you are. You notice the smallest details, you remember the little things, and you always think about the people around you

I love how much you care about your family and how naturally you try to make everyone happy. You have this beautiful way of making people feel loved and taken care of, without even realizing you're doing it

And I want you to know that I notice all of it

Even from miles away, you're always somewhere in my thoughts. A little moment, a song, something I see, somehow it reminds me of you

Thank you for being you, my love❤️
Thank you for all the little things

I love you, and I'd choose you all over again (in every life)

Happy 2nd anniversary, hayete❤️`,
};
/* ============================================================ */

function unlock(){
  const value=document.getElementById("pass").value;
  if(value.toLowerCase() === content.password.toLowerCase()){
    document.getElementById("gate").style.display="none";
    document.getElementById("site").style.display="block";

    const music = document.getElementById("backgroundMusic");
    music.volume = 0.30;
    music.play().catch(() => {});

    render();
  } else document.getElementById("error").textContent="Not quite. Try again ❤️";
}
document.getElementById("pass").addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});

function render(){
  //document.title=`${content.herName} — ${content.anniversaryDate}`;
  heroEyebrow.textContent=content.hero.eyebrow;
  heroTitle.textContent=content.hero.title.replaceAll("HER NAME",content.herName);
  heroSubtitle.textContent=content.hero.subtitle;
  footerNames.textContent=`${content.yourName} × ${content.herName}`;


timeline.innerHTML = content.timeline.map(x => `
  <div class="event">
    <div class="date">${x.date}</div>
    <h3 >${x.title}</h3>
    <h3>${x.text}</h3>

    ${x.photo ? `
      <img
        class="timeline-photo"
        src="${x.photo}"
        alt=""
      >
    ` : ""}
  </div>
`).join("");

  quote.textContent=content.littleThings;
  distanceTitle.textContent=content.distance.title;
  distanceText.textContent=content.distance.text;

  photos.innerHTML = content.photos.map(item => {
  if (item.type === "video") {
    return `
      <video
        class="memory-media"        
        playsinline
        preload="auto"
      >
        <source src="${item.src}" type="video/mp4">
      </video>
    `;
  }

  return `
    <img
      class="memory-media"
      src="${item.src}"
      alt=""
    >
  `;
}).join("");


  letter.textContent=content.letter.replaceAll("HER NAME",content.herName).replaceAll("YOUR NAME",content.yourName);    
}


let musicFadeTimer = null;

function fadeMusicTo(target, duration = 800) {
  const music = document.getElementById("backgroundMusic");

  if (!music) return;

  clearInterval(musicFadeTimer);

  const startVolume = music.volume;
  const difference = target - startVolume;
  const steps = 20;
  let step = 0;

  musicFadeTimer = setInterval(() => {
    step++;

    music.volume = startVolume + difference * (step / steps);

    if (step >= steps) {
      music.volume = target;
      clearInterval(musicFadeTimer);
    }
  }, duration / steps);
}


function startMemoryHighlights() {
  const media = document.querySelectorAll("#photos .memory-media");

  if (!media.length) return;

  let current = 0;
  let timer = null;

  media.forEach(item => {
    item.classList.remove("active");

    if (item.tagName === "VIDEO") {
      item.pause();
      item.currentTime = 0;
    }
  });

  function showNext() {

    const currentItem = media[current];

    currentItem.classList.remove("active");

    if (currentItem.tagName === "VIDEO") {
      currentItem.pause();
      currentItem.currentTime = 0;
    }

    current = (current + 1) % media.length;

    const next = media[current];

    next.classList.add("active");

    // =========================
    // VIDEO
    // =========================
    if (next.tagName === "VIDEO") {

      const music = document.getElementById("backgroundMusic");

      // iPhone/Safari: pause background music
      // so the video can play with sound reliably.
      if (music) {
        fadeMusicTo(0, 500);

        setTimeout(() => {
          music.pause();
        }, 500);
      }

      next.currentTime = 0;
      next.muted = false;
      next.volume = 1;

      next.play().catch(error => {
        console.log("Video playback blocked:", error);
      });

      next.onended = () => {

        // Resume background music
        if (music) {
          music.volume = 0;
          music.play().catch(() => {});
          fadeMusicTo(0.30, 800);
        }

        showNext();
      };
    }

    // =========================
    // PHOTO
    // =========================
    else {

      fadeMusicTo(0.30, 800);

      clearTimeout(timer);

      timer = setTimeout(() => {
        showNext();
      }, 4000);
    }
  }

  // =========================
  // FIRST ITEM
  // =========================

  const first = media[0];

  first.classList.add("active");

  if (first.tagName === "VIDEO") {

    const music = document.getElementById("backgroundMusic");

    if (music) {
      music.pause();
    }

    first.muted = false;
    first.volume = 1;

    first.play().catch(error => {
      console.log("Video playback blocked:", error);
    });

    first.onended = () => {

      if (music) {
        music.volume = 0;
        music.play().catch(() => {});
        fadeMusicTo(0.30, 800);
      }

      showNext();
    };

  } else {

    fadeMusicTo(0.30, 800);

    timer = setTimeout(() => {
      showNext();
    }, 4000);
  }
}

let memoryStarted = false;

const memorySection = document.querySelector("#photos");

if (memorySection) {
  const memoryObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !memoryStarted) {
        memoryStarted = true;
        startMemoryHighlights();
      }
    },
    {
      threshold: 0.35
    }
  );

  memoryObserver.observe(memorySection);
}