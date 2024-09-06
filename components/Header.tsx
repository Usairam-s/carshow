import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Image src="/logo.svg" alt="logo" height={100} width={100} />
      <CustomButton title="Sign in" />
    </header>
  );
}
