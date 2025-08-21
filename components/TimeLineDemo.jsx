import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  staircase_algo_math,
  ide_scraping_first_run,
  _500_status_code_chessAPI,
  waiting,
  data_error,
  running_fish_max_cpu,
  seoul_market,
  hikaru_game_stockfish,
  low_model_loss,
  data_visuals,
  many_data_flex,
  seoul_nights,
  random,
} from "@/media";

import Image from "next/image";

export default function TimelineDemo() {
  const data = [
    {
      title: "Automations and Web Scraping",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-15">
            <span className="text-gray-200 text-2xl font-serif ">
              Data Collection and analyzation, In this section of the project I
              focused on automating the proccess of scarping the data from the
              chess.com public API, so I can use it later in training the
              models. This was an oppurtunity for me to practice thinking
              algorithmically of most effictive algorithm, since working with
              huge amounts of data ( 118k+ games and 21m+ raw pieces of data ).
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={ide_scraping_first_run}
              alt="IDE Scraping first run"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={staircase_algo_math}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={_500_status_code_chessAPI}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 mx-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={waiting}
              alt="waiting time"
              width={500}
              height={500}
              className="h-20 mx-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Chess AI & Big Data",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-15">
            <span className="text-gray-200 text-2xl font-serif ">
              Data Labeling, It is true that the chess.com API provides a lot of
              data, but it is not labeled, so I had to label it myself, and then
              I used the labeled data to train the models. e.g, adding
              evaluations to each position, link each move with the time stamps,
              calculate the time delta of each time stamp to get the thinking
              time for each move, adding some chess infornation nessaary for
              training the model such as the amount of legal moves, is-check, or
              even can the player castle. and of course having fun in the
              beautify city I'm visiting, Seoul.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={data_error}
              alt="data errors 😅"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={running_fish_max_cpu}
              alt="running the fish on max cpu"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={seoul_market}
              alt="walking in seoul nights"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={hikaru_game_stockfish}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Machine Learning & Data",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-15">
            <span className="text-gray-200 text-2xl font-serif">
              Machine Learning and Data Visualization, Visualizing some data,
              playing for a bit with it and training the neural networks ( the
              fun part 🪄)
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={low_model_loss}
              alt="low model loss"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={data_visuals}
              alt="data"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={many_data_flex}
              alt="many data flex"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={seoul_nights}
              alt="walking in seoul nights"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Custom Models | [ Under Construction 🛠️ ]",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-15">
            <span className="text-gray-200 text-2xl font-serif">
              Initially, I was pressed for time since the challenge I put for
              myself allowed only a week of development. I may return to this
              part of the project later, as it’s both the most productive and
              the one I’m most excited about.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={random}
              alt="random"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={random}
              alt="random"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={random}
              alt="random"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
            <Image
              src={random}
              alt="random"
              width={500}
              height={500}
              className="h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-auto lg:h-auto"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
