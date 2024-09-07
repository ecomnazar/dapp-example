import React from "react";
import { HeaderBackground } from "./HeaderBackground";
import { Container } from "../Container";
import { Flex } from "../Flex";
import { BackButton } from "./BackButton";
import { ShadowText } from "./ShadowText";

interface Props {
  className?: string;
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 w-screen">
      <div className="relative w-full">
        <HeaderBackground />
        <Container className="absolute top-[18%] left-0">
          <Flex className="gap-x-4">
            <BackButton className="-translate-y-0.5" />
            <ShadowText
              title={title}
              shadowColor="#974A15"
              shadowSize="3"
              fontSize="30px"
            />
          </Flex>
        </Container>
      </div>
    </div>
  );
};
