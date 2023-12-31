"use client";
import { NextComponentType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeHigh,
  faVolumeMute,
  faXmark,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import TedxLogo from "../images/tedxjmi-logo.png";
import ticketProfile from "../images/ticket-profile-4.jpg";
import introBg from "../images/ted-bg.jpg";
import Counter from "./Counter";
import Script from "next/script";

const Hero = () => {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "TEDxJMI",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for joining us.",
      image: TedxLogo,
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "TEDxJMI",
        email: "tedxjmi@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  useEffect(() => {
    const ticketElm = document.getElementById("ticket");
    const ticketMob = document.getElementById("ticketMobile");
    const { x, y, width, height } = ticketElm.getBoundingClientRect();
    const centerPoint = { x: x + width / 2, y: y + height / 2 };
    ticketElm.addEventListener("mousemove", (e) => {
      const degreeX = (e.clientY - centerPoint.y) * 0.01;
      const degreeY = (e.clientX - centerPoint.x) * -0.01;

      ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
    });
    ticketMob.addEventListener("mousemove", (e) => {
      const degreeX = (e.clientY - centerPoint.y) * 0.01;
      const degreeY = (e.clientX - centerPoint.x) * -0.01;

      ticketMob.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
    });
  });
  return (
    <section className="relative h-screen bg-black pt-[76.5px] md:pt-[82.5px] text-white flex flex-col items-center justify-center gap-7">
      <div className="absolute z-[1] inset-0 w-full h-screen">
        <Image src={introBg} alt="" className="object-cover w-full h-screen" />
      </div>
      <div className="absolute z-[2] inset-0 bg-black/75" />

      <div
        className="relative z-10 ticket ticket-anim hidden md:flex"
        id="ticket"
      >
        <div className="left"></div>
        <div className="right"></div>
        <div className="ticket-content-wrapper flex flex-col justify-between px-12 py-10">
          <div className="flex items-center gap-x-3">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <Image
                src={ticketProfile}
                alt=""
                className="object-cover rounded-full w-20 h-20"
              />
            </div>
            <div>
              <h4 className="text-[20px] font-[500]">Arshad Jamal</h4>
              <p className="text-sm text-[#8E939B]">
                Diploma in Comp Engg, JMI
              </p>
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
                <h2
                  className="w-fit leading-none font-[700] lg:text-[48px] md:text-[36px] text-[30px] glitch"
                  data-text="JMI"
                >
                  JMI
                </h2>
              </div>
              {/* <p className='text-[#646464] text-[15px]'>Hosted by JMI Students</p> */}
            </div>
            <div className="">
              <p className="text-[20px] font-[500] uppercase">Nov 10, 2023</p>
              <p className="text-[#8E939B] text-[15px]">
                MA Ansari Auditorium, JMI
              </p>
            </div>
          </div>
          <div className="ticket-visual_ticket-number-wrapper">
            <div className="ticket-visual_ticket-number">№ 014747</div>
          </div>
        </div>
      </div>
      <div
        id="ticketMobile"
        className="ticket-mobile ticket-anim rounded-[15px] relative z-10 bg-white p-1 flex md:hidden w-[90%] max-w-[320px] h-full min-h-[440px] max-h-[510px]"
      >
        <div className="relative ticket-content rounded-[14px] bg-black w-full h-full min-h-[440px] max-h-[510px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between h-full px-5 py-9">
              <div className="flex items-center gap-x-3">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={ticketProfile}
                    alt=""
                    className="object-cover rounded-full w-16 h-16"
                  />
                </div>{" "}
                <div>
                  <h4 className="text-[20px] font-[500]">Arshad Jamal</h4>
                  <p className="text-sm text-[#8E939B]">
                    Diploma in Comp Engg, JMI
                  </p>
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
                    <h2
                      className="w-fit leading-none font-[700] lg:text-[48px] md:text-[36px] text-[48px] glitch"
                      data-text="JMI"
                    >
                      JMI
                    </h2>
                  </div>
                  {/* <p className='text-[#0f0a0a] text-[15px]'>Hosted by JMI Students</p> */}
                </div>
                <div className="">
                  <p className="text-[22px] font-[500] uppercase">
                    Nov 10, 2023
                  </p>
                  <p className="text-[#8E939B] text-[18px]">
                    MA Ansari Auditorium, JMI
                  </p>
                </div>
              </div>
              <p className="text-[#8E939B] text-[15px]">
                Hosted by JMI Students
              </p>
            </div>
            <div className="border-t-[2px] border-dashed border-t-[#333333] pt-4 pb-9 px-5">
              <div className="font-bold text-[28px] text-center">№ 044797</div>
            </div>
          </div>
        </div>
      </div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <button
        onClick={makePayment}
        className="relative z-10 border bg-gradient-to-b py-3 px-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:w-auto rounded-md lg:bg-zinc-800/30"
      >
        Purchase Now
      </button>
      {/* <Counter /> */}
    </section>
  );
};

export default Hero;
