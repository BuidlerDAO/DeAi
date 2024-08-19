import { Col, Row } from "antd";
import Image from "next/image";

const LogoList = () => {
  return (
    <Row gutter={[16, 12]} className="px-5 mt-6 md:hidden">
      <Col span={8}>
        <Image
          src="/banner/initiators/image6.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/initiators/image7.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/initiators/image2.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/initiators/image4.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px] h-[48px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image5.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] h-[52px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image14.png"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px] h-[48px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image12.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image13.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image3.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/initiators/image1.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
    </Row>
  );
};

export default LogoList;
