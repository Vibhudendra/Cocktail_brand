import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {

    const videoRef = useRef();
    const videoTimeLineRef = useRef();
    const isMobile =useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paraSplit = new SplitText('.subtitle', { type: 'lines' });


        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        //CONTENT-ANIMATION
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 0.8,
            ease: 'expo.out',
            stagger: '0.05',
            opacity: 0
        });
        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: '0.06',
            delay:1
        });

          gsap.from('.sub', {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            ease: 'expo.out',
            stagger: '0.06',
            delay:0.8
        });
         gsap.from('.ckt', {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            ease: 'expo.out',
            stagger: '0.06',
            delay:1.5
        });
        

        //LEAVES-ANIMATION
        gsap.timeline({
            scrollTrigger:{
                opacity: 0,
                duration:0.5,
                trigger:'#hero',
                start:'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf',{ y : 300 }, 0)
        .to('.left-leaf',{ y: -300 }, 0)

        //Video Animation
        const startvalue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: 'video',
                start: startvalue,
                end: endValue,
                scrub: true,
                pin: true
                
            }
        })

        videoRef.current.onloadedmetadata = ( ) => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

    }, [])



    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>BELLINI</h1>

                <img
                    src='/images/hero-left-leaf.png'
                    alt='left-leaf'
                    className='left-leaf'
                />
                <img
                    src='/images/hero-right-leaf.png'
                    alt='right-leaf'
                    className='right-leaf'
                />


                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className='sub'>Sip. Savor. Shine.</p>
                            <p className='subtitle'>Elevating every pour <br /> one cocktail at a time</p>
                        </div>

                        <div className="view-cocktails">
                            <p className='subtitle'>
                                Our menu is a symphony of fine ingredients, artistry, and tradition — cocktails made to captivate every sip.
                            </p>
                            <a href='#cocktails' className='ckt'>View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video-absolute inset-0">
                <video
                    ref={videoRef}
                    src='/videos/output.mp4'
                    alt=''
                    muted
                    playsInline
                    preload='auto'
                />
            </div>
        </>
    )
}

export default Hero