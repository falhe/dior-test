import Image from "next/image";

export const Logo = () => {
  return (
    <Image src="/dior.svg" alt="Dior Logo" width={153} height={43} priority />
  );
};
