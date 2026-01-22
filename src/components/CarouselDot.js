import clsx from "clsx";

export default function CarouselDot({ onClick, active, className }) {
  return (
    <li className="flex flex-col items-center justify-center">
      <button
        type="button"
        aria-label="Carousel Dot"
        onClick={onClick}
        className={clsx(
          className,
          "inline-block h-[12px] w-[12px] cursor-pointer rounded-full border-2 border-[#343a40] outline-none transition-colors duration-500 mr-[6px]",
          active ? "bg-[#f4778d]" : "bg-[#343a40]",
          "hover:bg-[#e45460]"
        )}
      />
    </li>
  );
}
