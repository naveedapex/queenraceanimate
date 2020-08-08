import React,{useEffect} from 'react'
import './style.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export const RedQueen = () => {
    /* Background animations */
const sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };
  
  
  const background1Movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground,
  })

 
 const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
})

 
  
    const foreground1Movement = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
    })



const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
})

  const spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }   
  ];
  

  const redQueen_alice = useWebAnimations({
      keyframes: spriteFrames,
      timing: {
        easing: 'steps(7, end)',
          direction: "reverse",
          duration: 600,
          playbackRate: 1,
          iterations: Infinity
      }
  })
  
  
  const goFaster = () => {
    /* But you can speed them up by giving the screen a click or a tap. */
    redQueen_alice.getAnimation().playbackRate *= 1.1;
  //  adjustBackgroundPlayback();
  };

  useEffect(() => {
      document.addEventListener("click",goFaster);
  })
  
 

    return (
        <div>

            <div className="wrapper">
                <div className="sky"></div>
                <div className="earth">
                    <div id="red-queen_and_alice">
                        <img id="red-queen_and_alice_sprite" 
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
                        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" 
                        alt="Alice and the Red Queen running to stay in place." 
                        ref={redQueen_alice.ref}
                        />
                    </div>
                </div>

                <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
                    <img id="palm3" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt="Alice and the Red Queen running to stay in place." />
                </div>

                <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
                    <img id="bush" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt="ta" />
                    <img id="w_rook_upright" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt="ad" />
                </div>

                <div className="scenery" id="background1" ref={background1Movement.ref}>
                    <img id="r_pawn_upright" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt="adf" />
                    <img id="w_rook" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt="adfc" />
                    <img id="palm1" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt="eta" />
                </div>

                <div className="scenery" id="background2" ref={background2Movement.ref}>
                    <img id="r_pawn" alt="" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" />
                    <img id="r_knight" alt="" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" />
                    <img id="palm2" alt="" src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"} srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" />
                </div>

            </div>
        </div>
    )
};
