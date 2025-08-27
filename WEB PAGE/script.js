// Animate header text
window.onload = function() {
    document.querySelector('header h1').style.opacity = '1';
    document.querySelector('header h1').style.transform = 'translateY(0)';
    document.querySelector('header p').style.opacity = '1';
    document.querySelector('header p').style.transform = 'translateY(0)';
};

// Scroll reveal for services
window.addEventListener('scroll', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        const position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Active link highlight
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Gallery slider
const images = [
    "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/527667516_781449171210166_603392974690591128_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEV5jgXPhar3gONLxEjSUNjJvOAK4Fzjncm84ArgXOOd6gx1RscOnMH6jgNdH7hc7pu3vD5GyQJIyE8rijbw0oQ&_nc_ohc=iZpgImzOGZsQ7kNvwEKfawg&_nc_oc=Adk5g3WU3w5Cc7fE6CC8YjzOD4ZnaEqK-SzisT6M2DaVkiyVd7UsFUBmxPTjibsCKDs&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=iX10GH-MxmYEn5bDiTYARg&oh=00_AfVLBk3hYVC4EQrHVyHFyG9C7V_Z0R7mLax1xejbfVeJTA&oe=68B5247E",
    "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/518035293_761155723239511_8143370407908056439_n.png?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF1AdTrSmqEhn84vpu4FGSjE0NZF1P5zZETQ1kXU_nNkY3eD32HwelYBoTDQkDWARcCABUK6MX9L16pEdr5gwud&_nc_ohc=1mUAXhN6Ll0Q7kNvwGQOr5m&_nc_oc=AdmZPVHiDM22FXxxCcX5QocnQ49p4qtHjXEHLbh9hIzdRx9iF7LVESK4BoB2jss8Tcg&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=H6I7HfC1wqF4hbeaijXm7w&oh=00_AfU7XQKkX6oVgWXKTLMHx-jiCDvoAPvnfEeW3pVR1PULyg&oe=68B4FFF8",
    "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/510245088_746313274723756_3789542369105899094_n.png?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFXId6tR8xAj9ovgcL-uvRWqppNwGbm0kuqmk3AZubSS8mPgT62wEJ0xiRJPNJ__RhwBBhnKc3-Ufm4HXgKCW_I&_nc_ohc=IW0oWEEBiOQQ7kNvwHSvq1O&_nc_oc=Adkqz0I2Gtk7vaDcXDZDDhrAVIHz2k5egoxufNrhCLArumJffVGkOJKkCNU5oIW15ow&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=-W8pGAFBhNzmfAYSyYWccw&oh=00_AfVdzc5woq7yER5i3AgJ3cSllxiQkkSMb6KpT0QOq5SAjQ&oe=68B4F545"
];
let currentIndex = 0;
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
}

// Prayer Popup
function openPopup() {
    document.getElementById('prayerPopup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('prayerPopup').style.display = 'none';
    alert('Your prayer request has been submitted!');
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
    this.reset();
});

// ✅ Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

// ✅ Upcoming Events
const events = [
    { date: 'September 10, 2025', name: 'Community Worship Night' },
    { date: 'September 17, 2025', name: 'Youth Fellowship' },
    { date: 'September 24, 2025', name: 'Bible Study Marathon' }
];
const eventList = document.getElementById('eventList');
events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.date} - ${event.name}`;
    eventList.appendChild(li);
});

// ✅ Daily Bible Verse (from API)
const verses = [
    { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "For God so loved the world that He gave His only Son.", ref: "John 3:16" },
    { text: "Trust in the Lord with all your heart.", ref: "Proverbs 3:5" },
    { text: "Be still, and know that I am God.", ref: "Psalm 46:10" }
];

function getNewVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verseElement = document.getElementById('verse');
    const refElement = document.getElementById('reference');
    
    // Typing effect
    verseElement.textContent = "";
    refElement.textContent = "";
    let text = verses[randomIndex].text;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            verseElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            refElement.textContent = verses[randomIndex].ref;
        }
    }
    typeWriter();
}

// Load first verse on page load
window.addEventListener('DOMContentLoaded', getNewVerse);
