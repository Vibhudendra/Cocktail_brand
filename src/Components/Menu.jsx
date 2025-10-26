import { useGSAP } from "@gsap/react"
import { cocktailLists, mockTailLists } from "../../Constants"
import gsap from 'gsap';
import { SplitText } from 'gsap/all'


const Menu = () => {

    useGSAP(() => {

        //------------------------MENU ANIMATION START----------------------------------
        const titlesplit = SplitText.create('.list', {
            type: 'words',
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.list',
                start: 'top center',

            }
        })
        scrollTimeline
            .from(titlesplit.words, {
                opacity: 0, duration: 0.8, yPercent: 100, ease: 'expo.out', stagger: 0.01
            })
        //-------------------------MENU ANIMATION END------------------------------------
        
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                opacity: 0,
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        })

        parallaxTimeLine
            .from('#c-left-leaf', {
                x: -200, y: 200
            })
            .from('#c-right-leaf', {
                x: 100, y: 200
            }
            )

    })


    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu