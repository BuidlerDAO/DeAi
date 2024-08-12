/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(8);

  // 数据数组
  const speakers = [
    { id: 1, name: "Greg Osuri", company: "Akash Network", img: "/speakers/1.png" },
    { id: 2, name: "Naveen Durvasula", company: "Ritual", img: "/speakers/2.png" },
    { id: 3, name: "Anna Bertha", company: "DCG", img: "/speakers/3.png" },
    { id: 4, name: "Ben Fielding", company: "Gensyn", img: "/speakers/4.png" },
    { id: 5, name: "Christian Ondaatje", company: "Founding Platform Engineer", img: "/speakers/5.png" },
    { id: 6, name: "Guy Wuollet(a16z)", company: "akash founder", img: "/speakers/6.png" },
    { id: 7, name: "Tom Schmidt(dragonfly)", company: "akash founder", img: "/speakers/7.png" },
    { id: 8, name: "jiahao(Flock)", company: "akash founder", img: "/speakers/8.png" },
    { id: 9, name: "Chris(Mirror World)", company: "akash founder", img: "/speakers/9.png" },
  ];

  // 点击按钮后展示更多数据
  const handleShowMore = () => {
    if (visibleCount == 8) {
      setVisibleCount(9);
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
          backgroundPosition: '0px 262px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="w-[1200px] items-center justify-center flex flex-col">
          <header className="w-full flex py-[21px] justify-around">
            <div className="flex items-center">
              <span>
                {/* <svg
                  width="15"
                  height="30"
                  viewBox="0 0 15 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15V30C8.29991 30 15.0047 23.2703 15.0047 15H0Z"
                    fill="#BED74B"
                  />
                  <path
                    d="M15.0047 15H0V0C8.29991 0 15.0047 6.72973 15.0047 15Z"
                    fill="#272727"
                  />
                </svg> */}
              </span>
              <strong className="ml-2">CUBES</strong>
            </div>
            <nav>
              <ul className="flex items-center gap-[36px] h-full text-[#272727]">
                <li className="font-semibold">Home</li>
                <li>About</li>
                <li>
                  <a href="#speakers">Speakers</a>
                </li>
                <li>Partners</li>
                <li>
                  <a href="#agenda">Agenda</a>
                </li>
              </ul>
            </nav>
            <div className="flex px-[64px] py-[16px] text-base font-medium bg-[#272727] text-white">
              Apply for CUBES
            </div>
          </header>
          <div className="flex justify-center relative text-[68px] font-semibold mt-[60px]">
            <span className="z-[1]">CUBES</span>
            <div className="absolute bottom-[10px] w-[322px] h-[28px] bg-[#CFF285]"></div>
          </div>
          <div className="text-[24px] text-[#383F4E] mt-[26px] font-semibold">
            October 3rd ｜ NYC
          </div>
          <p className="text-[#383F4E] text-[20px] text-center mt-[25px]">
            For the first time, top university blockchain clubs are teaming up,
            <br />
            backed by extensive alumni networks, in collaboration with leading
            <br />
            blockchains, projects, and VCs, to ignite emerging talent and
            innovative
            <br />
            projects, shaping the future stars of the crypto world.
          </p>
          <div className="flex gap-[80px] mt-[25px]">
            <div className="flex items-center justify-center w-[280px] h-[56px] text-[16px] font-medium text-[#272727] border-2 border-black rounded-[4px]">
              Register for Summit
            </div>
            <div className="flex items-center justify-center gap-[8px] w-[280px] h-[56px] text-[16px] font-medium text-white bg-[#272727] rounded-[4px]">
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.018 6.86939C15.2192 6.83628 15.4248 6.901 15.5713 7.0434C17.275 8.70002 18.2133 10.9172 18.2133 13.2865C18.2133 18.0911 14.3047 22 9.50025 22C5.52607 22 2.05916 19.3094 1.06937 15.4569C0.881813 14.726 0.786724 13.9958 0.786724 13.2865C0.786724 11.8941 1.112 10.5556 1.75351 9.30824C2.38488 8.08195 3.31321 7.00815 4.43831 6.20263C4.44484 6.19796 4.45149 6.1934 4.45821 6.18892C4.49947 6.1617 4.54354 6.12947 4.5902 6.09533L4.59566 6.09134C4.59979 6.08832 4.60392 6.0853 4.60805 6.08227C4.62743 6.06808 4.64683 6.05388 4.66635 6.03982C6.45528 4.75969 7.57882 2.77521 7.75061 0.593942C7.76754 0.378668 7.89116 0.18621 8.07991 0.0812377C8.26869 -0.0236924 8.49729 -0.0271727 8.68913 0.0719563C10.8928 1.21093 12.5106 3.24082 13.1275 5.64111C13.3152 6.37187 13.4103 7.10205 13.4103 7.8116C13.4103 8.18138 13.3861 8.55019 13.3382 8.9168C13.8188 8.4093 14.2273 7.83518 14.5488 7.21047C14.6423 7.02888 14.8164 6.90234 15.018 6.86939ZM11.8333 13.3335C11.8333 14.8062 10.6394 16.0001 9.16664 16.0001C7.69388 16.0001 6.49997 14.8062 6.49997 13.3335C6.49997 11.8607 7.69388 10.6668 9.16664 10.6668C10.6394 10.6668 11.8333 11.8607 11.8333 13.3335Z"
                  fill="#CFF285"
                />
              </svg>
              <span>Apply to Pitch by August 31</span>
            </div>
          </div>
          <p className="text-[#383F4E] text-[24px] font-semibold mt-[80px] text-left w-full">
            Initiators
          </p>
          <div className="flex flex-wrap gap-x-[34px] gap-y-[24px] mt-[24px]">
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image1.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image2.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image3.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image4.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image5.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image6.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image7.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image8.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image9.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image10.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/initiators/image11.png"
              width={136}
              height={48}
              alt="icon"
            />
          </div>
          <p className="text-[#383F4E] text-[24px] font-semibold mt-[48px] text-left w-full">
            Sponsors
          </p>
          <div className="flex flex-wrap w-full gap-x-[34px] gap-y-[24px] mt-[24px]">
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/sponsors/image1.png"
              width={136}
              height={48}
              alt="icon"
            />
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/sponsors/image2.png"
              width={136}
              height={48}
              alt="icon"
            />
          </div>
          <p className="text-[#383F4E] text-[24px] font-semibold mt-[48px] text-left w-full">
            Organizer
          </p>
          <div className="flex flex-wrap w-full gap-x-[34px] gap-y-[24px] mt-[24px] mb-[40px]">
            <Image
              className="w-[136px] h-[54px]"
              src="/banner/organizer/image1.png"
              width={136}
              height={48}
              alt="icon"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full">
        <div className="flex-1">
          <div
            className="flex flex-col items-start w-[582px] mt-[100px]"
            style={{ marginLeft: 'calc((100vw - 1200px) / 2)' }}
          >
            <div className="flex justify-center relative text-[48px] font-semibold mt-[60px]">
              <span>What is CUBES?</span>
              <div className="absolute left-[8px] bottom-[12px] -z-[1] w-[310px] h-[10px] bg-[#CFF285] rounded-lg"></div>
            </div>
            <p className="mt-[16px] text-[#6B6B6B] text-lg font-weight-normal">
              Hosted in the vibrant city of NewYork on October 3rd, CUBES brings
              together top minds from Yale, Stanford, UCB, Harvard, UPenn, MIT,
              Cornell, NYU, Columbia, and Oxford, along with industry leaders
              from leading AI projects, major public blockchains, and top
              venture capital firms. Featuring panel discussions, keynote
              speeches, pitching sessions, and an exclusive afterParty, we
              leverage powerful alumni networks to shape the future stars of the
              crypto world.
            </p>
            <div className="w-[146px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
              Read more
            </div>
          </div>
        </div>
        <div>
          <Image src="/s2/right.jpg" width={633} height={728} alt="image" />
        </div>
      </section>

      <section className="flex w-full">
        <div className="w-[633px] h-[728px]">
          <Image
            src="/s3/left.png"
            className="w-full h-full"
            width={633}
            height={728}
            alt="image"
          />
        </div>
        <div className="flex flex-1 justify-end">
          <div
            className="flex flex-col items-start w-[562px] mt-[100px]"
            style={{ marginRight: 'calc((100vw - 1200px) / 2)' }}
          >
            <div className="flex justify-center relative text-[48px] font-semibold mt-[60px]">
              <span>CUBES: Uniting Minds, Empowering Networks</span>
              <div className="absolute left-[0px] bottom-[12px] -z-[1] w-[310px] h-[10px] bg-[#CFF285] rounded-lg"></div>
            </div>
            <p className="mt-[16px] text-[#6B6B6B] text-lg">
              We unite top American universities, leveraging robust alumni
              networks to drive innovation in blockchain. By connecting academia
              and industry, we have formed a thriving network. We invite you to
              become a vital part of our community. Join us on October 3rd and
              be a part of CUBES.
            </p>
            <div className="w-[216px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
              Register for Summit
            </div>
          </div>
        </div>
      </section>

      <section
        id="speakers"
        className="flex justify-center w-full py-[40px] bg-[#F6F9FC]"
      >
        <div className="flex flex-col items-center w-[1200px]">
          <div className="w-full text-[48px] font-semibold text-center text-[#272727]">
            Speakers
          </div>
          <p className="w-full text-[18px] text-center text-[#6B6B6B] mt-[16px]">
            Get ready to be inspired by a lineup of world-class industry leaders
            in the crypto
          </p>
          <div className="w-full flex flex-wrap justify-around gap-y-[30px] mt-[55px]">
            {/* <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/1.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Greg Osuri
              </div>
              <div className="text-xs text-[#153C3C]">Akash Network</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/2.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[22px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Naveen Durvasula
              </div>
              <div className="text-xs text-[#153C3C]">Ritual</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/3.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Anna Bertha
              </div>
              <div className="text-xs text-[#153C3C]">DCG</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/4.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Ben Fielding
              </div>
              <div className="text-xs text-[#153C3C]">Gensyn</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/5.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Christian Ondaatje
              </div>
              <div className="text-xs text-[#153C3C]">Founding Platform Engineer</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/6.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Guy Wuollet(a16z)
              </div>
              <div className="text-xs text-[#153C3C]">akash founder</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/7.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Tom Schmidt(dragonfly)
              </div>
              <div className="text-xs text-[#153C3C]">akash founder</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/8.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                jiahao(Flock)
              </div>
              <div className="text-xs text-[#153C3C]">akash founder</div>
            </div>
            <div className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
              <div className="relative">
                <img src="/speakers/9.png" alt="" className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                <img src="/speakers/0.png" alt="" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
              </div>
              <div className="text-lg text-[#153C3C] font-medium mt-[8px]">
                Chris( Mirror World）
              </div>
              <div className="text-xs text-[#153C3C]">akash founder</div>
            </div> */}

            {speakers.slice(0, visibleCount).map(speaker => (
              <div key={speaker.id} className="flex flex-col items-start p-[18px] rounded-md border-2 border-[#E8E7EE]">
                <div className="relative">
                  <img src={speaker.img} alt={speaker.name} className="w-[238px] h-[238px] bg-[#E7D6FF]" />
                  <img src="/speakers/0.png" alt="overlay" className="w-[105px] h-[38px] absolute left-[23px] bottom-[16px]" />
                </div>
                <div className="text-lg text-[#153C3C] font-medium mt-[8px]">{speaker.name}</div>
                <div className="text-xs text-[#153C3C]">{speaker.company}</div>
              </div>
            ))}
          </div>
          {visibleCount == 8 && (
            <div
              className="w-[282px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727] cursor-pointer"
              onClick={handleShowMore}
            >
              More to be revealed
            </div>
          )}

          {/* <div className="w-[282px] h-[56px] mt-[45px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
            More to be revealed
          </div> */}
        </div>
      </section>

      <section
        id="agenda"
        className="flex justify-center w-full py-[40px] bg-[#F6F9FC]"
      >
        <div className="flex flex-col items-center w-[1200px]">
          <div className="text-[48px] text-[#272727] font-semibold">Agenda</div>
          <div className="flex flex-col w-full mt-[40px] bg-[#EEF5FC]">
            <div className="px-[38px] py-[26px] border-b-[1px] border-[#0000001A]">
              <span className="text-[24px] text-[#153C3CAD] font-extrabold">
                August 15 - August 31:
              </span>
              <span className="text-[24px] text-[#153C3C] font-extrabold">
                &nbsp;&nbsp;Application Period
              </span>
            </div>
            <div className="px-[38px] py-[26px] border-b-[1px] border-[#0000001A]">
              <span className="text-[24px] text-[#153C3CAD] font-extrabold">
                September 1 - September 15:
              </span>
              <span className="text-[24px] text-[#153C3C] font-extrabold">
                &nbsp;&nbsp;Interview Phase
              </span>
            </div>
            <div className="px-[38px] py-[26px] border-b-[1px] border-[#0000001A]">
              <span className="text-[24px] text-[#153C3CAD] font-extrabold">
                September 16 - September 30:
              </span>
              <span className="text-[24px] text-[#153C3C] font-extrabold">
                &nbsp;&nbsp;One-on-One Mentorship and Pitch Preparation
              </span>
            </div>
            <div className="px-[38px] py-[26px] border-b-[1px] border-[#0000001A]">
              <span className="text-[24px] text-[#153C3CAD] font-extrabold">
                October 3:
              </span>
              <span className="text-[24px] text-[#153C3C] font-extrabold">
                &nbsp;&nbsp;Summit Kickoff
              </span>
            </div>
            <div className="px-[38px] py-[26px]">
              <span className="text-[24px] text-[#153C3CAD] font-extrabold">
                The specific agenda for CUBES is coming soon…
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full">
        <div className="text-[48px] text-[#272727] font-semibold text-center mt-[40px]">
          Pitching Session
        </div>
        <div className="flex mt-[40px]">
          <div className="flex-1">
            <div
              className="flex flex-col items-start w-[582px]"
              style={{ marginLeft: 'calc((100vw - 1200px) / 2)' }}
            >
              <div className="flex justify-center relative text-[48px] font-semibold mt-[60px]">
                <span>Who Can Participate？</span>
              </div>
              <p className="mt-[16px] text-[#6B6B6B] text-lg">
                We’re seeking the brightest minds in crypto and AI to join
                “CUBES”. All teams are welcome to apply and present your BIG
                IDEAS, whether you’re working on infrastructure, applications,
                gaming, or social platforms, though priority will be given to
                alumni projects of initiators.
              </p>
              <p className="mt-[16px] text-[#6B6B6B] text-lg">
                As a talented individual, you will have a chance to join forces
                with top talent: find co-founders for your project or join a
                team that inspires you, unlocking limitless possibilities
                together!
              </p>
              <div className="w-[282px] h-[56px] mt-[32px] flex items-center justify-center font-medium text-base border-2 border-[#272727]">
                Apply to Pitch Now
              </div>
            </div>
          </div>
          <div className="w-[469px] h-[616px]">
            <Image
              src="/s5/right.png"
              className="w-full h-full"
              width={469}
              height={616}
              alt="image"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full py-[40px]">
        <div>
          <Image src="/s6/image.png" width={476} height={615} alt="image" />
        </div>
        <div className="flex flex-1 justify-end">
          <div
            className="flex flex-col items-start w-[562px]"
            style={{ marginRight: 'calc((100vw - 1200px) / 2)' }}
          >
            <div className="flex justify-center relative text-[48px] font-semibold mt-[60px]">
              <span> What to expect？</span>
            </div>
            <p className="mt-[16px] text-[#6B6B6B] text-lg">
              Backed by powerful alumni networks, we offer you the opportunity
              to showcase your project to top-tier investors and the heads of
              major public blockchains. Beyond serving as an ideal platform to
              launch your project, you can anticipate:
            </p>
            <ul className="flex flex-col gap-[25px] mt-[46px]">
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" />

                A chance to present on-stage at CUBES in front of some of the
                most influential figures in crypto
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <g clip-path="url(#clip0_161_254)">
                    <path d="M22 11.2964C22 5.22125 17.0751 0.296387 11 0.296387C4.92487 0.296387 0 5.22125 0 11.2964C0 17.3715 4.92487 22.2964 11 22.2964C17.0751 22.2964 22 17.3715 22 11.2964Z" fill="#CFF285" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83145 12.8387L14.2319 7.63037L15.8887 9.30398L8.83145 16.1859L4.88867 12.3266L6.54537 10.6529L8.83145 12.8387Z" fill="#272727" />
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
                <img src="/icon.png" width={22} height={22} alt="" srcset="" />

                Opportunities for fast-track reviews into accelerators like
                A16z’s CSS, SpringX, MIT accelerator, and Stanford accelerator
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" srcset="" />

                Tap into a powerful investor network to connect with top-tier
                VCs looking to fund the next big crypto innovations
              </li>
              <li className="flex items-center gap-2">
                <img src="/icon.png" width={22} height={22} alt="" srcset="" />

                Directly connecting with top-tier public blockchains eager to
                attract quality projects to thrive in their ecosystem.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full bg-[#272727] py-[40px]">
        <div className="text-[#DDF472] text-[48px] font-semibold">Partners</div>
        <div className="flex flex-col">
          <div className="flex py-[16px] gap-[120px]">
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
          </div>
          <div className="flex gap-[120px] py-[16px]">
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
            <div
              className="w-[136px] h-[32px]"
              style={{ background: 'url("/s7/image1.png")' }}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col py-[112px] items-center w-full">
        <div className="text-[48px] text-[#272727] font-semibold">FAQs</div>
        <div className="flex flex-col gap-y-[16px] w-[768px]">
          <div
            className="flex flex-col border-[1px] border-black"
            style={{ '--open-var': 'none' } as React.CSSProperties}
          >
            <div className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold">
              Are Projects at All Stages Welcome to Apply?
              <span
                className="cursorPointer"
                onClick={(env) =>
                  env.currentTarget.parentElement?.parentElement?.style.setProperty(
                    '--open-var',
                    'block'
                  )
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              style={{ display: 'var(--open-var)' }}
            >
              Yes, projects at all stages of development are welcome to apply.
              Whether you&apos;re in the early ideation phase or have a more
              developed project, we encourage you to participate
            </div>
          </div>

          <div
            className="flex flex-col border-[1px] border-black"
            style={{ '--open-var': 'none' } as React.CSSProperties}
          >
            <div className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold">
              Can I Participate in the Pitching Sessions Online?
              <span
                className="cursorPointer"
                onClick={(env) =>
                  env.currentTarget.parentElement?.parentElement?.style.setProperty(
                    '--open-var',
                    'block'
                  )
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              style={{ display: 'var(--open-var)' }}
            >
              No, the pitching sessions must be conducted in person at the
              CUBES.
            </div>
          </div>

          <div
            className="flex flex-col border-[1px] border-black"
            style={{ '--open-var': 'none' } as React.CSSProperties}
          >
            <div className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold">
              What Benefits Do I Receive Upon Acceptance?
              <span
                className="cursorPointer"
                onClick={(env) =>
                  env.currentTarget.parentElement?.parentElement?.style.setProperty(
                    '--open-var',
                    'block'
                  )
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              style={{ display: 'var(--open-var)' }}
            >
              Acceptance to CUBES grants you access to all summit events,
              including panel discussions, keynote speeches, pitching sessions,
              and the exclusive afterParty. You&apos;ll also receive
              opportunities for networking with industry leaders and peers, and
              special rewards.
            </div>
          </div>

          <div
            className="flex flex-col border-[1px] border-black"
            style={{ '--open-var': 'none' } as React.CSSProperties}
          >
            <div className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold">
              How many projects will be accepted?
              <span
                className="cursorPointer"
                onClick={(env) =>
                  env.currentTarget.parentElement?.parentElement?.style.setProperty(
                    '--open-var',
                    'block'
                  )
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              style={{ display: 'var(--open-var)' }}
            >
              CUBES 2024 only accept approximately 10-12 projects.
            </div>
          </div>

          <div
            className="flex flex-col border-[1px] border-black"
            style={{ '--open-var': 'none' } as React.CSSProperties}
          >
            <div className="flex justify-between items-center py-[20px] px-[24px] text-lg text-black font-semibold">
              Will My Expenses Be Covered?
              <span
                className="cursorPointer"
                onClick={(env) =>
                  env.currentTarget.parentElement?.parentElement?.style.setProperty(
                    '--open-var',
                    'block'
                  )
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              style={{ display: 'var(--open-var)' }}
            >
              Selected Demo Day teams will receive a grant to cover their
              expenses incurred during the event.
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full pt-[50px] px-[64px] pb-[30px] bg-[#272727]">
        <div className="flex justify-between">
          <svg
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
          </svg>
          <nav>
            <ul className="flex gap-[32px] text-white">
              <li className="font-semibold">Home</li>
              <li>About</li>
              <li>Speakers</li>
              <li>Agenda</li>
              <li>Partners</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className="flex items-center gap-[14px]">
            <svg
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="19.1979"
                height="19.1977"
                transform="matrix(-1 0 0 1 19.4454 0.00195312)"
                fill="url(#pattern0_11_864)"
              />
              <defs>
                <pattern
                  id="pattern0_11_864"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_11_864"
                    transform="translate(-0.262263 -0.22759) scale(0.00301054)"
                  />
                </pattern>
                <image
                  id="image0_11_864"
                  width="500"
                  height="500"
                  xlinkHref="data:image/png;base64,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++cpdxkFYT2d45BN07tv3LhxA4PrKBMtAgicU2D16tVfZV0ANUa0m22YeeuHH3roIVJNcs7lu4CsC3CxnH9mqVWzIAqvvxbIkBv6pHw/UOwQAQT0BOrUqVNkyZIlw7IqYHPxO3ulqb9aQco0bZ79TpVkH9v79etXWy9StoRA7gSmTZvWVc7NE/J2ZZ2j5zuXw/Hfsv/WTfldhw8f/jJ3ynw62ARYDz3Yjlgu4n300UfL1KhRo5V85UJ5F816m3Wdzdrk6fLOkLf5f//brPfsX/f57PWhzd+bz6dt2rTp15kzZybnIhQ+ioC6gCSdqSXriteRDZs1x8357V+X3KQ+zb7uufmz/3w+1xrm2f/OH+e51kn/s38zf+///Nl/9n/n7H1kv/aefR0+37ayf9a/Xrt/HXb/f/3lN/s2f2d+t155705ISNg7ZswY89vnhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCBgqcD/A0xL2ZjX/K3pAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-full h-[1px] mt-[24px] mb-[32px] bg-[#6B6B6B]" />
        <p className="text-sm text-[#D4D4D4] text-center">
          2024 CUBES. All right reserved.
        </p>
      </footer>
    </main>
  )
}
