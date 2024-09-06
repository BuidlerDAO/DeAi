import { Col, Row } from "antd";
import Image from "next/image";

const LogoList1 = () => {
  return (
    <Row gutter={[16, 12]} className="px-5 mt-6 md:hidden">
      <Col span={8}>
        <Image
          src="/banner/sponsors/image3.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/sponsors/image1.png"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/sponsors/image4.svg"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/sponsors/image7.svg"
          width={136}
          height={54}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/sponsors/image10.svg"
          width={136}
          height={54}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>

      <Col span={8}>
        <Image
          src="/banner/sponsors/image8.svg"
          width={136}
          height={54}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
      <Col span={8}>
        <Image
          src="/banner/sponsors/image9.png"
          width={136}
          height={48}
          alt="icon"
          className="w-[100px] md:w-[136px]"
        />
      </Col>
    </Row>
  );
};

export default LogoList1;
