import fadeIn from './fadein.js';

fadeIn( 150, '.animation', 'active' );
fadeIn( 20, '.scrollin', 'active' );

const fvFadeIn = () => {
    const $tgt = document.getElementById( 'fvAnimationTgt' );
    const $topLogo = document.getElementById( 'fvLogo' );

    const tgtArr = [ $tgt, $topLogo ];

    for (let i = 0, n = tgtArr.length; i < n; i++) {
        tgtArr[i].classList.add( 'active' );
        
    }
}

const closeBtn = ( tgt, wrapper ) => {
    const $tgt = document.getElementById( tgt );
    $tgt.addEventListener( 'click', () => {
        const $w = document.getElementById( wrapper );
        console.log($w);
        $w.classList.add( 'none' );
    } );
}

const handleEv = () => {}

setTimeout( () => {
    fvFadeIn();
    closeBtn( 'bnrCloseBtn', 'carecheck' );
}, 100 )