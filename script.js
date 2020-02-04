'use strict';

function displayHomeView () {
    $('.landing-view').removeClass('hidden');
    $('.signup-view, .billing-view, .support-view, .contact-view').addClass('hidden');
}

function displaySignUpView () {
    $('.signup-view').removeClass('hidden');
    $('.landing-view, .billing-view, .support-view, .contact-view').addClass('hidden');
}

function displayBillingView () {
    $('.billing-view').removeClass('hidden');
    $('.landing-view, .signup-view, .support-view, .contact-view').addClass('hidden');
}

function displaySupportView () {
    $('.support-view').removeClass('hidden');
    $('.landing-view, .signup-view, .billing-view, .contact-view').addClass('hidden');
}

function displayContactView () {
    $('.contact-view').removeClass('hidden');
    $('.landing-view, .signup-view, .billing-view, .support-view').addClass('hidden');
}

function eventHandlers () {
    console.log('it is working')
    $('#home').click(function() {
        console.log('home clicked')
        displayHomeView();
    });

    $('#signup').click(function() {
        console.log('signup clicked')
        displaySignUpView();
    });

    $('#billing').click(function() {
        console.log('billing clicked')
        displayBillingView();
    });

    $('#service-desk').click(function() {
        console.log('service desk clicked')
        displaySupportView();
    });

    $('#contact').click(function() {
        console.log('contact clicked')
        displayContactView();
    });

}

function initializeApp () {
    eventHandlers();
    displayHomeView();
}

$(initializeApp);