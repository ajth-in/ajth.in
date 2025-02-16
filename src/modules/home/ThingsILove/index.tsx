import { FAV_BOOK, FAV_MOVIE, FAV_SINGER, FAV_SONG } from "~/constants/routes";

const ThingsILove = () => {
  return (
    <p className="text-left [&>a]:bg-highlight [&>a]:px-[2px]">
      I spend almost all my time in front of my computer, and even when I’m out
      of the office, I&apos;ll always keep myself busy with some random side
      project. <br />
      When I&apos;m not tinkering with something, I love watching good
      movies—The{" "}
      <a href={FAV_MOVIE} target="_blank">
        Lord of the Rings
      </a>{" "}
      is my favorite.
      <br /> I also enjoy reading, with{" "}
      <a href={FAV_BOOK} target="_blank">
        One Hundred Years of Solitude
      </a>{" "}
      being my top pick.
      <br /> Music-wise, I&apos;m a big fan of{" "}
      <a href={FAV_SINGER} target="_blank">
        Passenger
      </a>
      , and{" "}
      <a href={FAV_SONG} target="_blank">
        Circles
      </a>{" "}
      is my go-to song.
      <br /> And when I need a break from screens, you&apos;ll probably find me
      playing football.
    </p>
  );
};
export default ThingsILove;
