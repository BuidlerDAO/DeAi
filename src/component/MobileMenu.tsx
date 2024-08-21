"use client";

import { useState } from "react";
import { Drawer, message } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const list = [
    {
      text: "Home",
      link: "#",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Speakers",
      link: "#speakers",
    },
    {
      text: "Partners",
      link: "#partners",
    },
    {
      text: "Pitching Session",
      link: "#pitching",
    },
    {
      text: "Timeline",
      link: "#timeline",
    },
    {
      text: "Contact Us",
      link: "#contact",
    },
  ];

  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ops@cubesummit.xyz");
      message.success("Email copied");
    } catch (err) {
      message.error("Email copied error");
    }
  };
  return (
    <>
      <span onClick={() => setShow(!show)} className="block px-2 md:hidden">
        <Image src="/option.svg" alt="option" width={20} height={20} className="md:hidden mx-2" />
      </span>
      <Drawer
        width={326}
        closable={false}
        placement="left"
        open={show}
        onClose={() => setShow(false)}
        style={{
          backgroundColor: "#272727",
          position: "relative",
        }}
      >
        <div className="relative">
          <Image
            src="/close.svg"
            alt="close"
            width={28}
            height={28}
            onClick={() => setShow(false)}
            className="absolute top-0"
            style={{ right: 0 }}
          />

          <ul className="flex flex-col">
            {list.map((item) => {
              return (
                <li
                  key={item.text}
                  className="text-white text-base font-medium mb-5"
                  onClick={() => {
                    if (item.text === "Contact Us") {
                      handleCopy();
                    } else {
                      router.push(item.link);
                    }
                  }}
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
