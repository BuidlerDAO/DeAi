/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import { Tooltip, Button, Row, Col } from "antd";
import LogoList from "@/component/LogoList";
import LogoList1 from "@/component/LogoList1";
import MobileMenu from "@/component/MobileMenu";
import { useRouter } from "next/navigation";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(12);
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const registerTo = () => router.push("https://lu.ma/hdbfank6")

  const questions = [
    {
      question: "Are Projects at All Stages Welcome to Apply?",
      answer:
        "Yes, projects at all stages of development are welcome to apply. Whether you're in the early ideation phase or have a more developed project, we encourage you to participate.",
    },
    {
      question: "Can I Participate in the Pitching Sessions Online?",
      answer: "No, the pitching sessions must be conducted in person at the CUBE Summit.",
    },
    {
      question: "What Benefits Do I Receive Upon Acceptance?",
      answer:
        "Acceptance to CUBE Summit grants you access to all summit events, including panel discussions, keynote speeches, pitching sessions, and the exclusive afterParty. You'll also receive opportunities for networking with industry leaders and peers, and special rewards.",
    },
    {
      question: "How many projects will be accepted?",
      answer: "CUBE Summit 2024 only accepts approximately 10-12 projects.",
    },
    {
      question: "Will My Expenses Be Covered?",
      answer: "Selected Demo Day teams will receive a grant to cover their expenses incurred during the event.",
    },
  ];

  // 数据数组
  const speakers = [
    { id: 8, name: "Guy Wuollet", company: "Investment Partner at a16z crypto", img: "/speakers/6.png", icon: "6" },
    { id: 1, name: "Anna Bertha", company: "Investor at DCG", img: "/speakers/3.png", icon: "1" },
    { id: 9, name: "Jiahao Sun", company: "Founder and CEO of FLock.io", img: "/speakers/8.png", icon: "8" },
    { id: 5, name: "David Attermann", company: "Head of Web3 Investments at M31 Capital", img: "/speakers/13.png", icon: "12" },
    { id: 3, name: "Chris Zhu", company: "Co-founder of Sonic / Mirror World", img: "/speakers/9.png", icon: "3" },
    { id: 4, name: "Christian Ondaatje", company: "Platform Engineer of Hyperbolicd", img: "/speakers/5.png", icon: "4" },
    { id: 7, name: "Greg Osuri", company: "Founder of Akash", img: "/speakers/1.png", icon: "7" },
    { id: 10, name: "Naveen Durvasula", company: "Core Member of Ritual", img: "/speakers/2.png", icon: "9" },
    { id: 2, name: "Ben Fielding", company: "Co-founder of Gensyn", img: "/speakers/4.png", icon: "2" },
    { id: 6, name: "Evan Feng", company: "Partner at CoinFund", img: "/speakers/12.png", icon: "5" },
    { id: 11, name: "Nihal Maunder", company: "Junior Partner at Pantera", img: "/speakers/14.png", icon: "14" },
    { id: 12, name: "Tom Schmidt", company: "Partner at Dragonfly", img: "/speakers/7.png", icon: "13" },
  ];

  // 点击按钮后展示更多数据
  const handleShowMore = () => {
    if (visibleCount == 8) {
      setVisibleCount(11);
    } else {
      setVisibleCount(8);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <section
        className="flex justify-center w-full bg-[#DEE8E8] "
        style={{
          backgroundImage: 'url("/banner/line.svg")',
          backgroundPosition: "0px 282px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="md:w-[1200px] items-center justify-center flex flex-col">
          <header className="w-full flex py-[21px] md:justify-around fixed top-0 left-0 bg-[#DEE8E8] z-50 justify-between px-2 md:px-0">
            <div className="flex items-center">
              <MobileMenu />
              <span>
                <Image src="/logo.svg" width={107} height={46} alt="icon" className="w-[87px] md:w-[107px]" />
              </span>
              {/* <strong className="ml-2">CUBES</strong> */}
            </div>
            <nav className="md:block hidden">
              <ul className="flex items-center gap-[36px] h-full text-[#272727]">
                {["Home", "About", "Speakers", "Partners", "Pitching Session", "Timeline"].map((item, index) => (
                  <li
                    key={index}
                    className={` cursor-pointer ${activeIndex === index ? "font-semibold" : ""}`}
                    onClick={() => handleClick(index)}
                  >
                    <a href={`#${item.split(" ")[0].toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              onClick={() => router.push("https://apply.cubesummit.xyz/")}
              className="flex w-[218px] items-center justify-center md:px-[24px] md:py-[16px] p-[10px] text-xs md:text-base font-medium bg-[#272727] text-white cursor-pointer rounded-[4px]"
            >
              Apply
            </div>
          </header>
          <div
            id="home"
            className="flex justify-center relative text-[#1C2436] text-[48px] md:text-[68px] font-semibold mt-[188px] md:mt-[100px]"
          >
            <span className="z-[1]" style={{ fontFamily: "ClashDisplay, sans-serif" }}>
              {" "}
              CUBE Summit
            </span>
            <div className="absolute bottom-[10px] w-[273px] h-[20px] md:w-[400px] md:h-[28px] bg-[#CFF285]"></div>
          </div>
          <div className="text-[24px] text-[#383F4E] mt-5 md:mt-[26px] font-semibold">October 3rd ｜ NYC</div>
          <p className="text-[#383F4E] text-sm leading-[22px] md:leading-[30px] md:text-[20px] text-center mt-[25px] max-w-[307px] md:max-w-[661px]">
            For the first time, ten distinguished university blockchain clubs are uniting, supported by extensive alumni networks and in collaboration with leading projects and investors. Together,
            we aim to cultivate emerging talents and foster innovative projects, paving the way for the future leaders of crypto.

            <br></br>
            <br></br>
            We warmly welcome and encourage more colleges and institutions to join us in building a collaborative blockchain future.
          </p>
          <div className="flex flex-col md:flex-row gap-[14px] md:gap-[80px] mt-[25px]">
            <div
              onClick={() => router.push("https://lu.ma/hdbfank6")}
              className="flex cursor-pointer items-center justify-center w-[310px] md:w-[280px] h-[56px] text-[16px] font-medium text-[#272727] border-2 border-black rounded-[4px]"
            >
              Register for Summit
            </div>

            <div
              onClick={() => router.push("https://apply.cubesummit.xyz/")}
              className="flex items-center cursor-pointer justify-center gap-[8px] w-[310px] md:w-[280px] h-[56px] text-[16px] font-medium text-white bg-[#272727] rounded-[4px]"
            >
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.018 6.86939C15.2192 6.83628 15.4248 6.901 15.5713 7.0434C17.275 8.70002 18.2133 10.9172 18.2133 13.2865C18.2133 18.0911 14.3047 22 9.50025 22C5.52607 22 2.05916 19.3094 1.06937 15.4569C0.881813 14.726 0.786724 13.9958 0.786724 13.2865C0.786724 11.8941 1.112 10.5556 1.75351 9.30824C2.38488 8.08195 3.31321 7.00815 4.43831 6.20263C4.44484 6.19796 4.45149 6.1934 4.45821 6.18892C4.49947 6.1617 4.54354 6.12947 4.5902 6.09533L4.59566 6.09134C4.59979 6.08832 4.60392 6.0853 4.60805 6.08227C4.62743 6.06808 4.64683 6.05388 4.66635 6.03982C6.45528 4.75969 7.57882 2.77521 7.75061 0.593942C7.76754 0.378668 7.89116 0.18621 8.07991 0.0812377C8.26869 -0.0236924 8.49729 -0.0271727 8.68913 0.0719563C10.8928 1.21093 12.5106 3.24082 13.1275 5.64111C13.3152 6.37187 13.4103 7.10205 13.4103 7.8116C13.4103 8.18138 13.3861 8.55019 13.3382 8.9168C13.8188 8.4093 14.2273 7.83518 14.5488 7.21047C14.6423 7.02888 14.8164 6.90234 15.018 6.86939ZM11.8333 13.3335C11.8333 14.8062 10.6394 16.0001 9.16664 16.0001C7.69388 16.0001 6.49997 14.8062 6.49997 13.3335C6.49997 11.8607 7.69388 10.6668 9.16664 10.6668C10.6394 10.6668 11.8333 11.8607 11.8333 13.3335Z"
                  fill="#CFF285"
                />
              </svg>
              <span>Apply to Pitch by September 1</span>
            </div>
          </div>
          <p className="text-[#383F4E] text-xl md:text-[24px] font-semibold mt-[80px] text-center md:text-left w-full">
            Initiators
          </p>
          <LogoList />
          <div className="hidden md:flex flex-wrap gap-x-5 md:gap-x-[34px] items-center gap-y-5 md:gap-y-[24px] px-4 md:px-0 mt-4 md:mt-[24px]">
            <Image
              src="/banner/initiators/image6.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/initiators/image7.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/initiators/image2.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/initiators/image4.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px] h-[48px]"
            />

            <Image
              src="/banner/initiators/image5.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] h-[52px] md:w-[136px]"
            />

            <Image
              src="/banner/initiators/image14.png"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[116px] h-[48px]"
            />

            <Image
              src="/banner/initiators/image12.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/initiators/image13.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />

            <Image
              src="/banner/initiators/image3.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />

            <Image
              src="/banner/initiators/image1.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
          </div>
          <p className="text-[#383F4E] text-xl md:text-[24px] font-semibold mt-[48px] text-center md:text-left w-full">
            Sponsors
          </p>
          <LogoList1 />
          <div className="hidden md:flex flex-wrap w-full gap-5 md:gap-x-[34px] md:gap-y-[24px] px-4 md:px-0 mt-[24px]">
            <Image
              src="/banner/sponsors/image3.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/sponsors/image4.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/sponsors/image1.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/sponsors/image2.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />

            <Image
              src="/banner/sponsors/image7.svg"
              width={136}
              height={54}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            <Image
              src="/banner/sponsors/image8.svg"
              width={136}
              height={54}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />

            <Image
              src="/banner/sponsors/image5.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
            {/* <Image
              src="/banner/sponsors/image6.svg"
              width={136}
              height={48}
              alt="icon"
            /> */}
          </div>
          <p className="text-[#383F4E] text-xl md:text-[24px] font-semibold mt-[48px] text-center md:text-left w-full">
            Coordinator
          </p>
          <div className="flex flex-wrap w-full gap-5 justify-center md:justify-start md:gap-x-[34px] md:gap-y-[24px] mt-[24px] mb-[40px]">
            <Image
              src="/banner/organizer/image1.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />

            <Image
              src="/banner/organizer/image2.svg"
              width={136}
              height={48}
              alt="icon"
              className="w-[100px] md:w-[136px]"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full" id="about">
        <div className="mt-9 px-5 md:hidden">
          <div
            className="flex relative text-[34px] md:text-[48px] font-semibold"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            <span>CUBE Summit</span>
            <div className="absolute left-[8px] bottom-[12px] -z-[1] w-[244px] h-[10px] bg-[#CFF285] rounded-lg"></div>
          </div>

          <div className="mt-4 text-lg text-[#6B6B6B]">
            Hosted in the vibrant city of NewYork on October 3rd, Collaborative University Blockchain Ecosystem Summit
            (CUBE Summit) brings together top minds from
            <span className="text-[#343434] font-medium ml-1">
              Columbia, Cornell, Harvard, MIT, NYU, Oxford, Stanford, UC Berkeley, UPenn and Yale,
            </span>{" "}
            along with industry leaders from leading AI projects, major public blockchains, and top venture capital
            firms.
            <br />
            <br />
            Featuring panel discussions, keynote speeches, pitching sessions, and an exclusive after-party, we leverage
            powerful alumni networks to shape the future stars of the crypto world.
          </div>

          <div
            onClick={() => router.push("https://medium.com/@cubesummit")}
            className="cursor-pointer rounded-[4px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
          >
            Read more
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div
            className="flex flex-col items-start md:w-[602px] mt-[100px]"
            style={{ marginLeft: "calc((100vw - 1200px) / 2)" }}
          >
            <div
              className="flex justify-center relative text-[48px] font-semibold mt-[60px]"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              <span>Our Mission</span>
              <div className="absolute left-[8px] bottom-[12px] -z-[1] w-[310px] h-[10px] bg-[#CFF285] rounded-lg"></div>
            </div>
            <div className="mt-[16px] text-[#6B6B6B] text-lg font-weight-normal" style={{ fontFamily: "Inter Display" }}>
              The inaugural Collaborative University Blockchain Ecosystem (CUBE) Summit is set in the vibrant founder and investor ecosystem of New York City on October 3rd, bringing together the brightest minds in blockchain. This event will unite eager students and alumni from prominent academic institutions with visionary leaders from cutting-edge AI projects, major public blockchains, and top-tier venture capital firms to shape the future of blockchain.
              <br />
              <br />
              Attendees can expect:

              <div className="pt-0 text-base font-medium leading-7  text-stone-800">
                <div className="h-[23px] flex ">
                  <div className="font-bold text-[28px] h-[23px] mr-1">·</div>
                  <div>Engaging discussions on the future of blockchain technology</div>
                </div>
                <div className="h-[23px] flex ">
                  <div className="font-bold text-[28px] h-[23px] mr-1">·</div>
                  <div>Exclusive networking opportunities with industry leaders</div>
                </div>
                <div className="h-[23px] flex ">
                  <div className="font-bold text-[28px] h-[23px] mr-1">·</div>
                  <div>Showcases of innovative early-stage projects</div>
                </div>
                <div className="h-[23px] flex ">
                  <div className="font-bold text-[28px] h-[23px] mr-1">·</div>
                  <div>Potential partnerships and investment opportunities</div>
                </div>
              </div>
            </div>

            <div
              onClick={registerTo}
              className="cursor-pointer rounded-[4px] w-[219px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
              Register For Summit
            </div>

          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src="/s2/right.jpg" width={633} height={728} alt="image" />
        </div>
      </section>

      <section className="flex w-full flex-col-reverse md:flex-row">
        <div className="mt-6 md:mt-0">
          <Image src="/s3/left.png" width={633} height={728} alt="image" />
        </div>
        <div className="mt-9 px-5 md:hidden">
          <div
            className="flex relative text-[34px] md:text-[48px] font-semibold"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            <span>CUBE Summit: Uniting Minds, Empowering Networks</span>
            <div className="absolute left-[8px] bottom-[12px] -z-[1] w-[244px] h-[10px] bg-[#CFF285] rounded-lg"></div>
          </div>

          <p className="mt-[16px] text-[#6B6B6B] text-lg" style={{ fontFamily: "Inter Display" }}>
            We unite top universities, leveraging robust alumni networks to drive innovation in blockchain. By
            connecting academia and industry, we have formed a thriving network. We invite you to become a vital part of
            our community. Join us on October 3rd and be a part of CUBE Summit.
          </p>

          <div
            onClick={() => router.push("https://lu.ma/hdbfank6")}
            className="cursor-pointer rounded-[4px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
          >
            Register for Summit
          </div>
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          <div
            className="flex flex-col items-start w-[562px] mt-[100px]"
            style={{ marginRight: "calc((100vw - 1200px) / 2)" }}
          >
            <div
              className="flex justify-center relative text-[48px] font-semibold mt-[60px]"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              <span>Unleash Your Potential on the Exclusive Pitching Stage</span>
              <div className="absolute left-[0px] bottom-[12px] -z-[1] w-[510px] h-[10px] bg-[#CFF285] rounded-lg"></div>
            </div>
            <p className="mt-[16px] text-[#6B6B6B] text-lg" style={{ fontFamily: "Inter Display" }}>
              Seize the opportunity to showcase your innovative project at the forefront of “Crypto x AI” by applying for our exclusive pitching stage. This is your chance to present your ideas to a distinguished panel of industry leaders, top-tier investors, and academic experts from some of the world's most prestigious institutions.
            </p>

            <div
              onClick={() => router.push("/#pitching")}
              className="w-[216px]  rounded-[4px] cursor-pointer h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
            >
              Learn More
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="flex justify-center w-full py-[40px] md:bg-[#F6F9FC] relative">
        <img src="/banner/image.png" className="h-[740px]  absolute top-[466px] left-[0px]" />

        <div className="flex flex-col items-center w-[1200px] bg-[#F6F9FC]">
          <div
            className="w-full text-[48px] font-semibold text-center text-[#272727]"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Speakers and Judges
          </div>
          <p className="w-full text-[18px] text-center text-[#6B6B6B] mt-[16px] md:px-0 px-4">
            Get ready to be inspired by a lineup of world-class industry leaders in the crypto
          </p>

          <Row gutter={[20, 14]} className="px-5 pb-5 mt-6 md:hidden">
            {speakers
              .slice(0, visibleCount)
              .sort((a, b) => a.id - b.id)
              .map((speaker, i) => (
                <Col span={12} key={i}>
                  <div className="border rounded-[5px] border-[#E8E7EE] p-[10px] space-y-1 flex flex-col h-full">
                    <div className=" relative">
                      <img src={speaker.img} alt={speaker.name} />
                      <img
                        src={`/speakers/tag${speaker.id}.png`}
                        className="w-[60px] h-[22px] absolute left-[12px] bottom-[8px]"
                      />
                    </div>
                    <span className="text-[#153C3C] text-xs font-medium">{speaker.name}</span>
                    <span className="text-[#153C3C] text-[8px]">{speaker.company}</span>
                  </div>
                </Col>
              ))}
            <Col span={12}>
              <div className="flex flex-col justify-center cursor-pointer rounded-lg border-gray-200 border-solid border h-full">
                <div className="flex flex-col mb-0 h-[194px] items-center justify-center">
                  <div className="flex flex-col justify-center items-center self-center px-2.5 bg-zinc-200 h-[58px] min-h-[58px] rounded-[44px] w-[58px]">
                    <img
                      loading="lazy"
                      src="/imagex.png"
                      className="object-contain w-full rounded-none aspect-square"
                    />
                  </div>
                  <div className="mt-3 text-xs md:text-xl font-medium text-center text-cyan-950 w-full ">
                    More to be revealed
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="w-full flex-wrap justify-start gap-y-[30px] mt-[55px] hidden md:flex">
            {speakers
              .slice(0, visibleCount)
              .sort((a, b) => a.id - b.id)
              .map((speaker) => (
                <div
                  key={speaker.id}
                  className={`flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE] cursor-pointer ${speaker.id % 4 == 0 ? "" : "mr-[25px]"
                    } `}
                >
                  <div className="relative">
                    <img src={speaker.img} alt={speaker.name} className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                    <img
                      src={`/speakers/tag${speaker.icon}.png`}
                      className="w-[105px] h-[38px] absolute left-[22px] bottom-[16px]"
                    />
                  </div>
                  <div className="text-lg text-[#153C3C] font-medium mt-[8px]">{speaker.name}</div>
                  <div className="text-xs text-[#153C3C]">{speaker.company}</div>
                </div>
              ))}
            <div className="flex flex-col justify-center cursor-pointer  rounded-lg border-gray-200 border-solid border-[1.435px] w-[273px] h-[325px]">
              <div className="flex flex-col mb-0">
                <div className="flex flex-col justify-center items-center self-center px-2.5 bg-zinc-200 h-[58px] min-h-[58px] rounded-[44px] w-[58px]">
                  <img loading="lazy" src="/imagex.png" className="object-contain w-full rounded-none aspect-square" />
                </div>
                <div className="mt-3 text-xl font-medium text-center text-cyan-950 w-full ">More to be revealed</div>
              </div>
            </div>
          </div>
          {/* {(
            <div
              className="w-[282px] cursor-pointer h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
              onClick={handleShowMore}
            >
              More Speakers
            </div>
          )} */}

          {/* <div className="w-[282px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
            More to be revealed
          </div> */}
        </div>
      </section>
      {/* <div
        id="partners"
        className="flex px-2 md:px-0 overflow-hidden flex-col justify-center items-center py-10 text-5xl font-semibold leading-none whitespace-nowrap max-md:text-4xl bg-[#F6F9FC]"
      >
        <div className="text-5xl font-semibold leading-none text-neutral-800 max-md:text-4xl">
          Partners
        </div>
        <div className="flex flex-col mt-10 w-full max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/234276c2a6a1d91ea139f59bc9e0db55ad246857759b07ae22e30b84e0ccc67f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
            className="object-contain w-full aspect-[4.5] max-md:max-w-full"
          />
          <img
            loading="lazy"
            srcSet="/logolist.png"
            className="md:hidden mt-6"
          // className="object-contain mt-10 w-full aspect-[5.99] hidden md:block max-md:max-w-full"
          />
        </div>
      </div> */}

      <div
        id="partners"
        className="flex overflow-hidden flex-col justify-center items-center py-10 bg-slate-100">
        <div className="text-5xl font-semibold leading-none text-neutral-800 max-md:text-4xl" style={{ fontFamily: "ClashDisplay, sans-serif" }}>
          Partners
        </div>
        <div className="flex flex-col mt-10 w-full max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/partners.png"
            className="object-contain w-full aspect-[4.5] max-md:max-w-full"
          />
          <img
            loading="lazy"
            srcSet="/logolist.png"
            className="md:hidden mt-6"
          />
        </div>
      </div>








      <section className="flex flex-col justify-center w-full relative" id='pitching'>
        <img src="/banner/image2.png" className="w-[403px]  absolute top-[0px] right-[0px] hidden md:block" />

        <div className="text-[40px] md:text-[48px] text-[#272727] font-semibold text-center mt-[40px]" style={{ fontFamily: "ClashDisplay, sans-serif" }}>
          Pitching Session
        </div>
        <div className="flex flex-col md:flex-row mt-[40px]">
          <div className="flex flex-col px-5 md:hidden">
            <div
              className="text-[#272727] text-[34px] font-semibold"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              Who Can Participate？
            </div>
            <div className="text-[#6B6B6B] text-lg mt-4">
              We’re seeking the brightest minds in Crypto and AI to join “CUBE Summit”. All teams are welcome to apply
              and present your BIG IDEAS, whether you’re working on infrastructure, applications, gaming, or social
              platforms, though priority will be given to alumni projects of initiators.
            </div>
            <div className="text-[#6B6B6B] text-lg mt-4">
              As a talented individual, you will have a chance to join forces with top talent: find co-founders for your
              project or join a team that inspires you, unlocking limitless possibilities together!
            </div>
            <div
              onClick={() => router.push("https://apply.cubesummit.xyz/")}
              className="mb-4 rounded-[4px] cursor-pointer  h-[56px] mt-[32px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
            >
              Apply to Pitch Now
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <div className="flex flex-col items-start w-[582px]" style={{ marginLeft: "calc((100vw - 1200px) / 2)" }}>
              <div
                className="flex justify-center relative text-[48px] font-semibold mt-[60px]"
                style={{ fontFamily: "ClashDisplay, sans-serif" }}
              >
                <span>Who Can Participate？</span>
              </div>
              <p className="mt-[16px] text-[#6B6B6B] text-lg">
                For early-stage projects in the 'AI x Crypto' space, we’re seeking leading candidates to join the CUBE Summit pitching session. All teams are welcome to apply, whether you're working in infrastructure, applications, gaming, or social platforms.
              </p>
              <p className="mt-[16px] text-[#6B6B6B] text-lg">
                For talented individuals, this is a rare chance to connect with top alumni projects and join a high-potential startup team.
              </p>
              <p className="mt-[16px] text-[#2A2020]">
                Let’s “Make Something Great” together!
              </p>

              <div
                onClick={() => router.push("https://apply.cubesummit.xyz/")}
                className="w-[282px] rounded-[4px] cursor-pointer  h-[56px] mt-[32px] flex items-center justify-center font-medium text-base border-2 border-[#272727]"
              >
                Apply Now
              </div>
            </div>
          </div>
          <div className="w-[469px] h-[616px]">
            <Image src="/s5/right.png" className="w-full h-full" width={469} height={616} alt="image" />
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row w-full md:py-[40px]">
        <div>
          <Image src="/s6/image.png" width={439} height={600} alt="image" />
        </div>
        <div className="md:hidden flex flex-col px-5 mb-4">
          <div
            className="flex justify-center relative text-[38px] font-semibold mt-[20px]"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            <span> What to expect</span>
          </div>
          <p className="mt-[6px] text-[#6B6B6B] text-lg">
            Backed by powerful alumni networks, we offer you the opportunity to showcase your project to top-tier
            investors and the heads of major public blockchains. Beyond serving as an ideal platform to launch your
            project, you can anticipate:
          </p>
          <ul className="flex flex-col gap-[24px] mt-[40px]">
            <li className="flex items-center gap-2">
              <img src="/icon.png" width={22} height={22} alt="" />A chance to present on-stage at CUBE Summit in front
              of some of the most influential figures in crypto
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <g clipPath="url(#clip0_161_254)">
                  <path
                    d="M22 11.2964C22 5.22125 17.0751 0.296387 11 0.296387C4.92487 0.296387 0 5.22125 0 11.2964C0 17.3715 4.92487 22.2964 11 22.2964C17.0751 22.2964 22 17.3715 22 11.2964Z"
                    fill="#CFF285"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.83145 12.8387L14.2319 7.63037L15.8887 9.30398L8.83145 16.1859L4.88867 12.3266L6.54537 10.6529L8.83145 12.8387Z"
                    fill="#272727"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_161_254">
                    <rect width="22" height="22" fill="white" transform="translate(0 0.296387)" />
                  </clipPath>
                </defs>
              </svg>
              Special awards from industry leaders (Stay Tuned!)
            </li>
            <li className="flex items-center gap-2">
              <img src="/icon.png" width={22} height={22} alt="" />
              Opportunities for fast-track reviews into accelerators like a16z's CSX and SpringX
            </li>
            <li className="flex items-center gap-2">
              <img src="/icon.png" width={22} height={22} alt="" />
              Tap into a powerful investor network to connect with top-tier VCs looking to fund the next big crypto
              innovations
            </li>
            <li className="flex items-center gap-2">
              <img src="/icon.png" width={22} height={22} alt="" />
              Directly connecting with top-tier public blockchains eager to attract quality projects to thrive in their
              ecosystem.
            </li>
            <li className="flex items-center gap-2">
              <img src="/icon.png" width={22} height={22} alt="" />
              Opportunities for 1-on-1 mentorship such as polishing your deck and improving your pitch.
            </li>
          </ul>
        </div>
        <div className="md:flex flex-1 justify-end hidden">
          <div className="flex flex-col items-start w-[562px]" style={{ marginRight: "calc((100vw - 1200px) / 2)" }}>
            <div
              className="flex justify-center relative text-[38px] font-semibold mt-[20px]"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              <span> What to expect？</span>
            </div>
            <p className="text-[#6B6B6B] text-lg">
              Powered by our extensive alumni networks, we offer you an unparalleled opportunity to showcase your project to top-tier investors and leaders of major public blockchains. Beyond serving as an ideal launchpad for your project, the platform is also a gateway to numerous invaluable opportunities, including:
            </p>
            <ul className="flex flex-col gap-[10px] mt-[16px]">
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[521px] max-md:max-w-full">
                  <span className="font-extrabold">Special prizes</span> presented by
                  industry leaders (stay tuned!)
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  Opportunities for fast-track reviews into accelerators{" "}
                  <span className="font-extrabold">
                    like a16z crypto’s CSX and SpringX Solana Accelerator
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  Tap into an{" "}
                  <span className="font-extrabold">influential investor network</span> to
                  connect with top-tier VCs looking to back the next
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  Opportunities for direct access with{" "}
                  <span className="font-extrabold">leading public chains</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  1:1 mentoring, focused on refining pitch materials and enhancing
                  presentation skills
                </div>              </li>

              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  Exclusive access to an evening event with initiators and speakers for deep
                  connections
                </div>
              </li>

              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />
                <div className="self-stretch my-auto w-[563px] max-md:max-w-full">
                  Grants for{" "}
                  <span className="font-extrabold">travel and accommodation expenses</span>
                </div></li>

              <li className="flex items-center gap-1 text-[#6B6B6B]">
                Seize this chance to propel your project to new heights and make a lasting impact on the future of technology.
              </li>

            </ul>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col items-center w-full bg-[#272727] py-[40px]">
        <div className="text-[#DDF472] text-[48px] font-semibold">Partners</div>
        <div className="flex flex-col mt-[36px]">
          <div className="flex w-full justify-center items-center gap-[120px] pl-[140px] pr-[140px]">
            <Image
              className="w-[136px] h-[48px]"
              src="/s7/image1.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[128px] h-[26px]"
              src="/s7/image2.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[123px] h-[35px]"
              src="/s7/image3.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[32px]"
              src="/s7/image4.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[110px] h-[32px]"
              src="/s7/image5.png"
              width={136}
              height={48}
              alt="icon"
            />
          </div>
          <div className="flex py-[16px] justify-center items-center gap-[110px] pl-[120px] pr-[120px] mt-[36px] ">
            <div
              className="w-[136px] h-[32px]"
            >

              <Image
                className="w-[92px] h-[32px]"
                src="/s7/image6.png"
                width={136}
                height={48}
                alt="icon"
              />
            </div>


            <Image
              className="w-[98px] h-[32px] "
              src="/s7/image7.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[33px]"
              src="/s7/image8.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[33px]"
              src="/s7/image9.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[33px]"
              src="/s7/image10.png"
              width={136}
              height={48}
              alt="icon"
            />
          </div>
        </div>

        <div className="flex justify-stretch items-center gap-[140px] py-[16px] mt-[36px] w-full pl-[150px] pr-[150px]">
          <Image
            className="w-[136px] h-[54px]"
            src="/s7/image11.png"
            width={136}
            height={48}
            alt="icon"
          />
          <Image
            className="w-[84px] h-[29px]"
            src="/s7/image12.png"
            width={136}
            height={48}
            alt="icon"
          />
        </div>

      </section> */}

      <section id="timeline" className="flex justify-center w-full py-5 md:py-[40px] bg-[#F6F9FC] relative">
        <img src="/banner/image1.png" className="h-[172px]  absolute top-[0px] right-[0px]" />

        <div className="flex flex-col items-center w-[1200px] px-4 md:px-0">
          <div className="text-[48px] text-[#272727] font-semibold" style={{ fontFamily: "ClashDisplay, sans-serif" }}>Timeline</div>
          <div className="flex flex-col w-full mt-6 md:mt-[40px] bg-[#EEF5FC]">
            <div className="px-[14px] py-[18px] md:px-[38px] md:py-[26px] border-b-[1px] border-[#0000001A] flex flex-col md:block">
              <span className="text-base md:text-[24px] text-[#153C3CAD] font-semibold">August 15 - August 31:</span>
              <span className="text-base md:text-[24px] text-[#153C3C] font-extrabold md:ml-2">Application Period</span>
            </div>
            <div className="px-[14px] py-[18px] md:px-[38px] md:py-[26px] border-b-[1px] border-[#0000001A] flex flex-col md:block">
              <span className="text-base md:text-[24px] text-[#153C3CAD] font-semibold">
                September 1 - September 15:
              </span>
              <span className="text-base md:text-[24px] text-[#153C3C] font-extrabold md:ml-2">Interview Phase</span>
            </div>
            <div className="px-[14px] py-[18px] md:px-[38px] md:py-[26px] border-b-[1px] border-[#0000001A] flex flex-col md:block">
              <span className="text-base md:text-[24px] text-[#153C3CAD] font-semibold">
                September 16 - September 30:
              </span>
              <span className="text-base md:text-[24px] text-[#153C3C] font-extrabold md:ml-2">
                One-on-One Mentorship and Pitch Preparation
              </span>
            </div>
            <div className="px-[14px] py-[18px] md:px-[38px] md:py-[26px] border-b-[1px] border-[#0000001A] flex flex-col md:block">
              <span className="text-base md:text-[24px] text-[#153C3CAD] font-semibold">October 3:</span>
              <span className="text-base md:text-[24px] text-[#153C3C] font-extrabold md:ml-2">Summit Kickoff</span>
            </div>
            <div className="px-[14px] py-[18px] md:px-[38px] md:py-[26px]">
              <span className="text-base md:text-[24px] text-[#153C3CAD] font-semibold md:ml-2">
                The specific agenda for CUBE Summit is coming soon…
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex overflow-hidden flex-col justify-center items-center py-10 text-5xl font-semibold leading-none text-lime-300 bg-neutral-800 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl" style={{ fontFamily: "ClashDisplay, sans-serif" }}>
        Collaborative Support
      </div>
      <img
        loading="lazy"
        srcSet="/support.png"
        className="object-contain mt-10 w-full aspect-[2.57] max-md:max-w-full"
      />
    </div>

      <section className="flex flex-col py-[34px] md:py-[112px] items-center w-full">
        <div className="text-[34px] md:text-[48px] text-[#272727] font-semibold mb-5 md:mb-0" style={{ fontFamily: "ClashDisplay, sans-serif" }}>FAQs</div>
        <div className="flex flex-col gap-y-[16px] px-5 md:px-0 md:w-[768px]">
          {questions.map((item, index) => (
            <div key={index} className="flex flex-col border-[1px] border-black rounded-[4px]">
              <div
                className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  >
                    <path
                      d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div
                className="p-[24px] border-t-[1px] border-black text-sm text-[#00000099]"
                style={{
                  display: openIndex === index ? "block" : "none",
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#272727] flex items-center justify-center py-[30px] w-full md:hidden">
        <div className="flex flex-col items-center w-[256px]">
          <Image src="/logo1.svg" width={72} height={31} alt="icon" />
          <Row gutter={[32, 16]} className="mt-6">
            {["Home", "About", "Speakers", "Partners", "Agenda"].map((item, index) => (
              <Col
                span={8}
                key={index}
                className={`text-white cursor-pointer ${activeIndex === index ? "font-semibold" : ""}`}
                onClick={() => handleClick(index)}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Col>
            ))}
          </Row>

          <div className="flex items-center gap-[36px] mt-6">
            <svg
              onClick={() => router.push("https://medium.com/@cubesummit")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_436)">
                <path
                  d="M6.76884 5.65625C10.5072 5.65625 13.5374 8.70768 13.5374 12.4715C13.5374 16.2354 10.5069 19.2866 6.76884 19.2866C3.03073 19.2866 0 16.2354 0 12.4715C0 8.70768 3.0305 5.65625 6.76884 5.65625ZM17.5782 6.05547C19.4474 6.05547 20.9626 8.92775 20.9626 12.4715H20.9628C20.9628 16.0144 19.4476 18.8876 17.5784 18.8876C15.7092 18.8876 14.194 16.0144 14.194 12.4715C14.194 8.92867 15.709 6.05547 17.5782 6.05547ZM22.8097 6.72375C23.4669 6.72375 24 9.29708 24 12.4715C24 15.6451 23.4672 18.2193 22.8097 18.2193C22.1522 18.2193 21.6196 15.6458 21.6196 12.4715C21.6196 9.29731 22.1524 6.72375 22.8097 6.72375Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_436">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Image
              onClick={() => router.push("https://x.com/cubesummit")}
              src="/twitter.png"
              alt="twitter"
              width={20}
              height={20}
            />
          </div>

          <div className="h-[1px] w-[90%] bg-[#6B6B6B] bg-opacity-50 mt-6"></div>
          <p className="text-sm text-[#D4D4D4] text-center mt-8">2024 CUBE Summit. All rights reserved.</p>
        </div>
      </footer>

      <footer className="w-full pt-[50px] px-[64px] pb-[30px] bg-[#272727] hidden md:block">
        <div className="flex justify-between">
          <Image src="/logo1.svg" width={38} height={16} alt="icon" />
          {/* <svg
            width="69"
            height="16"
            viewBox="0 0 69 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8V16C4.42662 16 8.00252 12.4108 8.00252 8H0Z"
              fill="#BED74B"
            />
            <path
              d="M8.00252 8H0V0C4.42662 0 8.00252 3.58919 8.00252 8Z"
              fill="white"
            />
            <path
              d="M18.5092 13.16C14.7812 13.16 12.5892 10.984 12.5892 7.64C12.5892 4.296 14.7812 2.12 18.5092 2.12C22.1092 2.12 24.2692 3.832 24.2692 6.696V6.968H20.9092V6.696C20.9092 5.48 20.3332 5 18.5572 5C16.3812 5 15.7892 5.512 15.7892 7.64C15.7892 9.768 16.3812 10.28 18.5572 10.28C20.3332 10.28 20.9092 9.8 20.9092 8.584V8.312H24.2692V8.584C24.2692 11.448 22.1092 13.16 18.5092 13.16ZM30.4697 13.16C26.7257 13.16 24.9977 11.352 24.9977 8.504V2.28H28.0057V8.264C28.0057 9.784 28.4377 10.248 30.4697 10.248C32.5017 10.248 32.9337 9.784 32.9337 8.264V2.28H35.9417V8.504C35.9417 11.352 34.2137 13.16 30.4697 13.16ZM44.0269 13H36.8429V2.28H43.6589C45.9789 2.28 47.1309 3.192 47.1309 4.872C47.1309 6.248 46.4109 7.224 44.4589 7.304V7.464C46.6029 7.544 47.6269 8.536 47.6269 10.024C47.6269 11.832 46.5869 13 44.0269 13ZM39.8349 4.984V6.344H43.3389C43.9469 6.344 44.1229 6.168 44.1229 5.672C44.1229 5.176 43.8829 4.984 43.2589 4.984H39.8349ZM39.8349 8.808V10.296H43.6429C44.3629 10.296 44.5869 10.152 44.5869 9.544C44.5869 8.952 44.3789 8.808 43.6429 8.808H39.8349ZM57.7848 13H48.2648V2.28H57.7848V4.984H51.2728V6.264H57.5448V8.952H51.2728V10.296H57.7848V13ZM63.8398 13.16C60.5598 13.16 58.5598 11.992 58.5598 9.272V9.176H61.5678V9.512C61.5678 10.232 61.8238 10.424 63.8398 10.424C65.6638 10.424 65.8558 10.28 65.8558 9.8C65.8558 9.416 65.6478 9.256 64.7678 9.144L61.4078 8.696C59.4078 8.424 58.3998 7.352 58.3998 5.624C58.3998 3.912 59.7278 2.12 63.5998 2.12C67.0078 2.12 68.6398 3.608 68.6398 6.008V6.104H65.6318V5.864C65.6318 5.096 65.2958 4.84 63.2798 4.84C61.7438 4.84 61.4078 5.048 61.4078 5.512C61.4078 5.848 61.5998 6.008 62.1758 6.088L65.5358 6.584C68.1598 6.968 68.8638 8.312 68.8638 9.688C68.8638 11.528 67.4558 13.16 63.8398 13.16Z"
              fill="white"
            />
          </svg> */}
          <nav>
            <ul className="flex gap-[32px] text-white">
              {["Home", "About", "Speakers", "Partners", "Pitching Session", "Timeline", "Contact Us"].map((item, index) => (
                <li
                  key={index}
                  className={` cursor-pointer ${activeIndex === index ? "font-semibold" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <a href={`#${item.split(" ")[0].toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-[14px]">
            <svg
              onClick={() => router.push("https://medium.com/@cubesummit")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_436)">
                <path
                  d="M6.76884 5.65625C10.5072 5.65625 13.5374 8.70768 13.5374 12.4715C13.5374 16.2354 10.5069 19.2866 6.76884 19.2866C3.03073 19.2866 0 16.2354 0 12.4715C0 8.70768 3.0305 5.65625 6.76884 5.65625ZM17.5782 6.05547C19.4474 6.05547 20.9626 8.92775 20.9626 12.4715H20.9628C20.9628 16.0144 19.4476 18.8876 17.5784 18.8876C15.7092 18.8876 14.194 16.0144 14.194 12.4715C14.194 8.92867 15.709 6.05547 17.5782 6.05547ZM22.8097 6.72375C23.4669 6.72375 24 9.29708 24 12.4715C24 15.6451 23.4672 18.2193 22.8097 18.2193C22.1522 18.2193 21.6196 15.6458 21.6196 12.4715C21.6196 9.29731 22.1524 6.72375 22.8097 6.72375Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_436">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Image
              onClick={() => router.push("https://x.com/cubesummit")}
              src="/twitter.png"
              alt="twitter"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="w-full h-[1px] mt-[24px] mb-[32px] bg-[#6B6B6B]" />
        <p className="text-sm text-[#D4D4D4] text-center">2024 CUBE Summit. All rights reserved.</p>
      </footer>
    </main>
  );
}
