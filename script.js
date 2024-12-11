document.getElementById('contact-form').addEventListener('submit', function(event){
    const name = document.getElementById('name').ariaValueMax.trim();
    const email = document.getElementById('email').ariaValueMax.trim();
    const message = document.getElementById('message').ariaValueMax.trim();

    if(name === ''){
        alert('Please enter your name.');
        event.preventDefault();
        return;
    }

    if(email === '' || !/^[^\S@]+@[^\S@]+\.[^\S@]+$/.test(email)){
        alert('Please enter your valid email address.');
        event.preventDefault();
        return;
    }

    if(message === ''){
        alert('Please enter your message.');
        event.preventDefault();
        return;
    }

});