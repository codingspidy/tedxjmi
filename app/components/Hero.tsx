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
import ticketProfile from "../images/ticket-profile-4.jpg"
import introBg from "../images/ted-bg.jpg"
import Counter from "./Counter"

const Hero: NextComponentType = () => {
    useEffect(() => {
        const ticketElm = document.getElementById("ticket")
        const ticketMob = document.getElementById("ticketMobile")
        const { x, y, width, height } = ticketElm!.getBoundingClientRect()
        const centerPoint = { x: x + width / 2, y: y + height / 2 }
        ticketElm!.addEventListener("mousemove", e => {
            const degreeX = (e.clientY - centerPoint.y) * 0.010
            const degreeY = (e.clientX - centerPoint.x) * -0.010

            ticketElm!.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
        })
        ticketMob!.addEventListener("mousemove", e => {
            const degreeX = (e.clientY - centerPoint.y) * 0.010
            const degreeY = (e.clientX - centerPoint.x) * -0.010

        ticketMob!.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
        })

    })
    return (
        <section className="relative h-screen bg-black text-white flex flex-col items-center justify-center py-20">
            <div className='absolute z-[1] inset-0 w-full h-screen' >
                <Image src={introBg} alt="" className="object-cover w-full h-screen" />
            </div>
            <div className="absolute z-[2] inset-0 bg-black/75" />

            <div className="relative z-10 ticket ticket-anim hidden md:flex" id="ticket">
                <div className="left"></div>
                <div className="right"></div>
                <div className="ticket-content-wrapper flex flex-col justify-between px-9 py-7">
                    <div className="flex items-center gap-x-3">
                        <div className="h-20 w-20 overflow-hidden rounded-full">
                            <Image src={ticketProfile} alt="" className="object-cover rounded-full w-20 h-20" />
                        </div>
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
                            <p className="text-[20px] font-[500] uppercase">Nov 10, 2023</p>
                            <p className='text-[#646464] text-[15px]'>MA Ansari Auditorium, JMI</p>
                        </div>
                    </div>
                    <div className="ticket-visual_ticket-number-wrapper">
                        <div className="ticket-visual_ticket-number">№ 014747</div>
                    </div>
                </div>
            </div>
            <div id="ticketMobile" className="ticket-mobile ticket-anim rounded-[15px] relative z-10 bg-white p-1 flex md:hidden w-[90%] max-w-[320px] h-full min-h-[440px] max-h-[510px]">
                <div className="relative ticket-content rounded-[14px] bg-black w-full h-full min-h-[440px] max-h-[510px]">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col justify-between h-full px-5 py-9">
                            <div className="flex items-center gap-x-3">
                                <div className="h-16 w-16 overflow-hidden rounded-full">
                                    <Image src={ticketProfile} alt="" className="object-cover rounded-full w-16 h-16" />
                                </div>                                <div>
                                    <h4 className="text-[20px] font-[500]">Arshad Jamal</h4>
                                    <p className="text-sm text-[#64666D]">Diploma in Comp Engg, JMI</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div>
                                    <div className="flex items-start">
                                        <h2 className="text-[#FF2B06] leading-none font-[700] lg:text-[48px] md:text-[36px] text-[48px]">
                                            TED
                                        </h2>
                                        <h2 className="text-[#FF2B06] leading-none font-[700] lg:text-[30px] md:text-[24px] text-[24px]">
                                            x
                                        </h2>
                                        <h2 className="w-fit leading-none font-[700] lg:text-[48px] md:text-[36px] text-[48px] glitch" data-text="JMI">
                                            JMI
                                        </h2>
                                    </div>
                                    {/* <p className='text-[#0f0a0a] text-[15px]'>Hosted by JMI Students</p> */}
                                </div>
                                <div className=''>
                                    <p className="text-[22px] font-[500] uppercase">Nov 10, 2023</p>
                                    <p className='text-[#64666D] text-[18px]'>MA Ansari Auditorium, JMI</p>
                                </div>
                            </div>
                            <p className='text-[#64666D] text-[15px]'>Hosted by JMI Students</p>
                        </div>
                        <div className="border-t-[2px] border-dashed border-t-[#333333] pt-4 pb-9 px-5">
                            <div className="font-bold text-[28px] text-center">№ 044797</div>
                        </div>
                    </div>
                </div>
            </div>
            <Counter />
        </section>
    )
}

export default Hero