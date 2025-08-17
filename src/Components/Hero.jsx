import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
const Hero = () => {

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
                trigger:'#hero',
                start:'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf',{ y : 200 }, 0)
        .to('.left-leaf',{ y: -200 }, 0)

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
        </>
    )
}

export default Hero