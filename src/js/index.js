import fadeIn from './fadein.js';

fadeIn();

const fvFadeIn = () => {
    const $tgt = document.getElementById( 'fvAnimationTgt' );
    $tgt.classList.add( 'active' );
}

setTimeout( () => {
    fvFadeIn();
}, 100 )