import Heading from "./Heading";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-zinc-900 px-6 py-12 pb-24 text-white">
      <div className="flex flex-col items-center">
        <Heading>Say Hello</Heading>

        <SocialLinks
          className="mt-3 flex flex-wrap justify-center"
          linkClassName="m-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#fbab7e] to-[#f4778d] text-gray-900"
          iconClassName="h-4 w-4"
        />
      </div>

      <hr className="my-6 w-full max-w-6xl border-white/20" />

      <small>
        <a
          className="font-bold text-white hover:underline"
          href="https://godiego.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Diego Bernal
        </a>
      </small>
    </footer>
  );
}
