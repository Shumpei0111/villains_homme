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

setTimeout( () => {
    fvFadeIn();
}, 100 )