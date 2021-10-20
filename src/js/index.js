import fadeIn from './fadein.js';
import luxy from 'luxy.js';
import { getUserAgent } from './check-ua.js';

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

const setAdHeight = () => {
    const $el = document.getElementById( 'carecheck' );
    const point = window.innerHeight;
    $el.style.top = point + 'px';
}

const followAdWindow = () => {
    const $el = document.getElementById( 'carecheck' );
    const $elHeight = $el.clientHeight;
    const point = window.innerHeight;
    
    setTimeout( () => {
        window.addEventListener( 'scroll', () => {
                $el.style.top = ( window.scrollY + point - $elHeight ) + 'px';            
        }, false );
    }, 300 )

}

const ua = getUserAgent();
const isMobile = ( function() {
    return !!ua === 'ipad' || !!ua === 'iphone' || !!ua === 'android'
} )();


const checkWindowWidth = () => {
    window.addEventListener( 'load', () => {
        if( isMobile ) {
            const $ = document.getElementById( 'main' );
            $.classList.add('sp-smooth-scroll');
        }
    }, false );
}


setTimeout( () => {
    alert(isMobile);
    // luxyの慣性スクロールはモバイルに向かないのでやらない
    if( !isMobile ) {
        luxy.init();
    } else {
        checkWindowWidth();
    }

    setAdHeight();
    fvFadeIn();
    closeBtn( 'bnrCloseBtn', 'carecheck' );
    followAdWindow();
}, 100 )