const music = document.getElementById("bgMusic");
let musicStarted = false;

// Loading Screen
setTimeout(() => {

    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("quiz-page").classList.add("show");

},4000);


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



let index = 0;


// Begin Journey
// Automatically move from Welcome to Letter after 3 seconds



// Typewriter

function typeLetter(){

    if(index < letter.length){

        typing.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }
    else{

    // Wait 5 seconds after the letter finishes typing
    setTimeout(() => {

        document.getElementById("letter-page").classList.remove("show");

        document.getElementById("final-page").classList.add("show");

    }, 5000);

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
// =========================
// Gift Page
// =========================
// ======================================================
// GIFT PAGE
// ======================================================

const giftBox = document.getElementById("giftBox");
const openGift = document.getElementById("openGift");
const giftMessage = document.getElementById("giftMessage");

// Open Gift Button

if (giftBox && openGift && giftMessage) {

    openGift.onclick = () => {

        // Prevent clicking again
        openGift.disabled = true;

        // Open Gift Animation
        giftBox.classList.add("open");

        // Hide Open Button
        openGift.style.display = "none";

        // Show Message after 1 second
        setTimeout(() => {

            giftMessage.style.display = "block";

        }, 1000);

        // Move to Cake Page after 10 seconds
        setTimeout(() => {

            // Hide Gift Page
            document.getElementById("gift-page").classList.remove("show");

            // Show Cake Page
            document.getElementById("cake-page").classList.add("show");

            // Optional: Reset gift for next visit
            giftBox.classList.remove("open");
            giftMessage.style.display = "none";
            openGift.style.display = "inline-block";
            openGift.disabled = false;

        }, 5000);

    };

}


// =========================
// Cake Page
// =========================

// ======================================================
// CAKE PAGE
// ======================================================
// ======================================================
// CAKE PAGE
// ======================================================

const blowBtn = document.getElementById("blowBtn");
const birthdayVideo = document.getElementById("birthdayVideo");

if (blowBtn && birthdayVideo) {

    blowBtn.onclick = () => {

        // Disable button so it can't be clicked twice
        blowBtn.disabled = true;

        // Blow out all candles
        document.querySelectorAll(".flame").forEach(flame => {
            flame.classList.add("off");
        });

        // Change button text
        blowBtn.innerHTML = "🎉 Happy Birthday! 🎉";

        // Wait 2 seconds, then open video page
        setTimeout(() => {

            document.getElementById("cake-page").classList.remove("show");
            document.getElementById("video-page").classList.add("show");

            birthdayVideo.currentTime = 0;
            birthdayVideo.play();

        }, 2000);

    };

}

// ======================================================
// VIDEO PAGE
// ======================================================

if (birthdayVideo) {

    birthdayVideo.onended = () => {

        birthdayVideo.pause();

        birthdayVideo.currentTime = 0;

        document.getElementById("video-page").classList.remove("show");

        document.getElementById("letter-page").classList.add("show");

        // Restart Letter

        index = 0;

        typing.innerHTML = "";

        typeLetter();

    };

} 


// Check Answer Function
// ======================================================
// CHECK ANSWER FUNCTION
// ======================================================
// ======================================================
// CHECK ANSWER FUNCTION
// ======================================================

function checkAnswer(correct, button) {

    // Start background music on the first quiz click
    if (!musicStarted) {

        musicStarted = true;

        music.volume = 0.4; // Adjust volume if needed

        music.play().catch(error => {
            console.log("Music couldn't start:", error);
        });

    }

    if (correct) {

        // Make correct answer green
        button.style.background = "#28a745";
        button.innerHTML = "✅ Your Birthday 🎂";

        // Disable all quiz buttons
        document.querySelectorAll(".option").forEach(btn => {
            btn.disabled = true;
        });

        // Show popup
        document.getElementById("birthdayPopup").classList.add("show");

        // Wait 3 seconds
        setTimeout(() => {

            document.getElementById("birthdayPopup").classList.remove("show");

            document.getElementById("quiz-page").classList.remove("show");

            document.getElementById("welcome").classList.add("show");

            // Stay on Welcome page for 3 seconds
            setTimeout(() => {

                document.getElementById("welcome").classList.remove("show");

                document.getElementById("gallery-page").classList.add("show");

                currentPhoto = 0;

                showPhoto();

                clearInterval(slideInterval);

                slideInterval = setInterval(autoSlide, 1000);

            }, 3000);

        }, 3000);

    } else {

        // Wrong answer animation
        button.classList.add("wrong");

        setTimeout(() => {

            button.classList.remove("wrong");

        }, 500);

    }

}