"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/components/lib/utils";
import {
  frontend,
  datascraping,
  data_labeling,
  google_colab,
  feature_visualization,
} from "@/media/";

export default function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="bottom-6" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Technologies">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://go.dev/">Go</HoveredLink>
            <HoveredLink href="https://www.selenium.dev/">Selenuim</HoveredLink>
            <HoveredLink href="https://www.chess.com/news/view/published-data-api">
              Chess.com API
            </HoveredLink>
            <HoveredLink href="https://visualstudio.microsoft.com/vs/features/cplusplus/">
              C++
            </HoveredLink>
            <HoveredLink href="https://stockfishchess.org/">
              Stockfish
            </HoveredLink>

            <HoveredLink href="https://stockfishchess.org/">
              Stockfish
            </HoveredLink>

            <HoveredLink href="https://www.tensorflow.org/">
              Tensorflow
            </HoveredLink>

            <HoveredLink href="https://react.dev/">React</HoveredLink>

            <HoveredLink href="https://nextjs.org/">Next</HoveredLink>

            <HoveredLink href="http://tailwindcss.com/">Tailwind</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Github"
          item_href="https://github.com/tawfiqkhalilieh"
        >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Frontend"
              href="https://github.com/tawfiqkhalilieh/chess_smart_thinking_frontend"
              src={frontend}
              description="Shows the project and provides a playground for the user to test the model"
            />
            <ProductItem
              title="Data Scraping"
              href="https://github.com/tawfiqkhalilieh/chess_data_scraper"
              src={datascraping}
              description="Scraping data from the chess.com public API | note: in the first phases of the project I wanted to use selenium but ended up removing it"
            />
            <ProductItem
              title="Data/Feature engineering"
              href="https://github.com/tawfiqkhalilieh/chess_time_positions_analyzations_data_labeling/tree/development"
              src={data_labeling}
              description="Developed an end-to-end data pipeline that scraped, processed, and annotated chess positions using Stockfish to create a high-quality dataset for machine learning models."
            />
            <ProductItem
              title="Model Training and Data Visualization"
              href="https://github.com/tawfiqkhalilieh/chess_smart_thinking_model"
              src={feature_visualization}
              description="Training the tensorflow model and visualize the feature data and the training history"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Custom Model">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/tawfiq-khalilieh/">
              {" "}
              Coming Soon | Message me on linkedin{" "}
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
