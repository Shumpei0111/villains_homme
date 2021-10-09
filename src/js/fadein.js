const fadeIn = () => {
    let $tgt = document.querySelectorAll( '.animation' );

    window.addEventListener( 'scroll', () => {
        for (let i = 0; i < $tgt.length; i++) {
            const element = $tgt[i].getBoundingClientRect().top;
            const scroll  = window.pageYOffset || document.documentElement.scrollTop;
            const offset  = element + scroll;
            const windowHeight = window.innerHeight;

            if( scroll > offset - windowHeight + 150 ) {
                $tgt[ i ].classList.add( 'active' );
            }
        }
    } );
}

export default fadeIn;