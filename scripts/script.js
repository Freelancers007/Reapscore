$( document ).on( 'click','a.nav-link', function ( e ) {
    $('a.nav-link.active').removeClass('active')
    $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
    $('.navbar-collapse').collapse('hide');
} );
