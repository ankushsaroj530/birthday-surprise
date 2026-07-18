// Loading Screen

setTimeout(() => {

    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("welcome").classList.add("show");

}, 4000);



// Letter
const letter = `

💌 My Dearest Annu ❤️

Happy Birthday, My Love!

These last three years with you have been the most beautiful part of my life. Every smile, every laugh, and every moment we've shared has become a memory I'll cherish forever.

You are my happiness, my peace, my biggest strength, and the person I want to spend my entire life with. I am so proud of the amazing person you are, and I will always stand beside you, supporting you through every dream and every challenge.

On your special day, I pray that you always stay healthy, happy, and surrounded by love. Seeing you smile is the greatest gift I could ever ask for.

Thank you for loving me, believing in me, and making my life so beautiful.

I love you more than words can ever express.

❤️ Happy Birthday, My Forever Love. ❤️

Forever Yours,

❤️ Dirty Vishal ❤️

`;

const typing = document.getElementById("typing");

const nextBtn = document.getElementById("nextBtn");

const music = document.getElementById("bgMusic");

let index = 0;


// Begin Journey
// Automatically move from Welcome to Letter after 3 seconds

setTimeout(() => {

    document.getElementById("welcome").classList.remove("show");

    document.getElementById("letter-page").classList.add("show");

    music.play().catch(() => {});

    typeLetter();

}, 7000);

// Typewriter

function typeLetter(){

    if(index < letter.length){

        typing.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

    else{

    // Wait 4 seconds after the letter finishes
    setTimeout(() => {

        document.getElementById("letter-page").classList.remove("show");

        document.getElementById("gallery-page").classList.add("show");

        currentPhoto = 0;

        showPhoto();

        slideInterval = setInterval(autoSlide, 1000);

    }, 4000);

}


}


// Temporary

// ============================
// Gallery Data
// ============================

const photos = [

{
    image:"assets/photos/photo1.jpeg",
    text:"The day we created our first beautiful memory ❤️"
},

{
    image:"assets/photos/photo6.jpeg",
    text:"Every smile of yours makes my world brighter 🌸"
},

{
    image:"assets/photos/photo3.jpeg",
    text:"Another unforgettable moment together 💕"
},

{
    image:"assets/photos/photo4.jpeg",
    text:"My favourite place is wherever you are ❤️"
},

{
    image:"assets/photos/photo5.jpeg",
    text:"You are my happiest memory ✨"
},


];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");

// Open Galle

let slideInterval;

nextBtn.onclick = () => {

    document.getElementById("letter-page").classList.remove("show");

    document.getElementById("gallery-page").classList.add("show");

    currentPhoto = 0;
    showPhoto();

    slideInterval = setInterval(autoSlide, 1000);

};

// Display Photo

function showPhoto(){

    galleryImage.style.opacity = 0;

    galleryCaption.style.opacity = 0;

    setTimeout(()=>{

        galleryImage.src = photos[currentPhoto].image;

        galleryCaption.innerHTML = photos[currentPhoto].text;

        galleryImage.style.opacity = 1;

        galleryCaption.style.opacity = 1;

    },100);

}

// Automatic Slideshow

function autoSlide() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        clearInterval(slideInterval);

        document.getElementById("gallery-page").classList.remove("show");

        document.getElementById("gift-page").classList.add("show");

        return;
    }

    showPhoto();
}
// Next


// Gift Box
// Gift Box

const giftBox = document.getElementById("giftBox");
const openGift = document.getElementById("openGift");
const giftMessage = document.getElementById("giftMessage");

if (giftBox && openGift && giftMessage) {

    openGift.onclick = () => {

        console.log("Gift button clicked");

        giftBox.classList.add("open");

        openGift.style.display = "none";

        setTimeout(() => {
            giftMessage.style.display = "block";
        }, 1000);

    };

}

blowBtn.onclick = () => {

    document.querySelectorAll(".flame").forEach(flame => {

        flame.classList.add("off");

    });

    setTimeout(() => {

        document.getElementById("cake-page").classList.remove("show");

        document.getElementById("video-page").classList.add("show");

        document.getElementById("birthdayVideo").play();

    },1500);

};

const birthdayVideo = document.getElementById("birthdayVideo");

birthdayVideo.onended = () => {

    document.getElementById("video-page").classList.remove("show");

    document.getElementById("final-page").classList.add("show");

};


openGift.addEventListener("click", () => {

    // Open the gift box
    giftBox.classList.add("open");

    // Hide the button
    openGift.style.display = "none";

    // Show the gift message after 1 second
    setTimeout(() => {

        giftMessage.style.display = "block";

    }, 1000);

    // Automatically go to Cake page after 2 seconds
    setTimeout(() => {

        document.getElementById("gift-page").classList.remove("show");

        document.getElementById("cake-page").classList.add("show");

    }, 10000);

});