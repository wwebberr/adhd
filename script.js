function toggleControls() {
    const controls = document.getElementById('controls');
    if (controls.style.display === 'none' || controls.style.display === '') {
        controls.style.display = 'flex';
    } else {
        controls.style.display = 'none';
    }
}

function toggleSpotify() {
    const spotifyContainer = document.getElementById('spotifyContainer');
    if (spotifyContainer.style.display === 'none' || spotifyContainer.style.display === '') {
        spotifyContainer.style.display = 'block';
    } else {
        spotifyContainer.style.display = 'none';
    }
}

function toggleCalculator() {
    const calculator = document.getElementById('calculator');
    if (calculator.style.display === 'none' || calculator.style.display === '') {
        calculator.style.display = 'flex';
    } else {
        calculator.style.display = 'none';
    }
}

function updateContent() {
    const websiteUrl = document.getElementById('websiteUrl').value;
    const videoUrl = document.getElementById('videoUrl').value;
    const videoFrame = document.getElementById('videoFrame');

    if (websiteUrl) {
        document.getElementById('websiteFrame').src = websiteUrl;
    }

    if (videoUrl) {
        const videoId = extractVideoId(videoUrl);
        if (videoId) {
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
        } else {
            alert('Invalid YouTube URL. Please try again.');
        }
    }
}

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}

function adjustHeights() {
    const websiteHeight = document.getElementById('websiteHeight').value;
    const videoHeight = document.getElementById('videoHeight').value;
    const websiteContainer = document.getElementById('websiteContainer');
    const videoContainer = document.getElementById('videoContainer');

    websiteContainer.style.height = `${websiteHeight}%`;
    videoContainer.style.height = `${videoHeight}%`;
}

function appendToCalcDisplay(value) {
    const display = document.getElementById('calcDisplay');
    display.value += value;
}

function clearCalcDisplay() {
    const display = document.getElementById('calcDisplay');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('calcDisplay');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}