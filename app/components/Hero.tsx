'use client'
import { NextComponentType } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeHigh, faVolumeMute, faXmark, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import TedxLogo from "../images/tedxjmi-logo.png"
import ticketProfile from "../images/ticket-profile.png"
import introBg from "../images/ted-bg.jpg"

const Hero: NextComponentType = () => {
    useEffect(() => {
        const ticketElm = document.getElementById("ticket")
        const { x, y, width, height } = ticketElm!.getBoundingClientRect()
        const centerPoint = { x: x + width / 2, y: y + height / 2 }
        ticketElm!.addEventListener("mousemove", e => {
            const degreeX = (e.clientY - centerPoint.y) * 0.008
            const degreeY = (e.clientX - centerPoint.x) * -0.008

            ticketElm!.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
        })
    })
    return (
        <section className="relative h-screen bg-black text-white flex items-center justify-center">
            <Image src={introBg} alt="" className='absolute z-[1] inset-0' />
            <div className="absolute z-[2] inset-0 bg-black/75" />

            <div className="relative z-10 ticket" id="ticket">
                <div className="left"></div>
                <div className="right"></div>
                <div className="ticket-content-wrapper flex flex-col justify-between px-9 py-7">
                    <div className="flex items-center gap-x-3">
                        <Image src={ticketProfile} alt="" className="rounded-full w-20 h-20" />
                        <div>
                            <h4 className="text-[20px] font-[500]">Arshad Jamal</h4>
                            <p className="text-sm text-[#8E939B]">Diploma in Comp Engg, JMI</p>
                        </div>
                    </div>
                    <div className="flex gap-10 items-end">
                        <div>
                            <div className="flex items-start">
                                <h2 className="text-[#FF2B06] leading-none font-[700] lg:text-[48px] md:text-[36px] text-[30px]">
                                    TED
                                </h2>
                                <h2 className="text-[#FF2B06] leading-none font-[700] lg:text-[30px] md:text-[24px] text-[20px]">
                                    x
                                </h2>
                                <h2 className="w-fit leading-none font-[700] lg:text-[48px] md:text-[36px] text-[30px] glitch" data-text="JMI">
                                    JMI
                                </h2>
                            </div>
                            {/* <p className='text-[#646464] text-[15px]'>Hosted by JMI Students</p> */}
                        </div>
                        <div className=''>
                            <p className="text-[20px] font-[500] uppercase">November 10th, 2023</p>
                            <p className='text-[#646464] text-[15px]'>MA Ansari Auditorium, JMI</p>
                        </div>
                    </div>
                    <div className="ticket-visual_ticket-number-wrapper">
                        <div className="ticket-visual_ticket-number">№ 014747</div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero