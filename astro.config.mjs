import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import conf from "./config.json";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://zhuroland.github.io",
  integrations: [
    starlight({
      title: `${conf.infos.author} Portfolio`,
      social: conf.infos.socials,
      sidebar: [
        {
          label: "About Me",
          link: "/about",
        },
        {
          label: "Projects",
          items: [
            {
              label: "My personal projects",
              link: "/projects/personal",
            },
            {
              label: "My group projects",
              link: "/projects/group",
            },
            {
              label: "My school projects",
              link: "/projects/school",
            },
          ],
        },
        {
          label: "Contact Me",
          link: "/contact",
        },
        {
          label: "Games",
          link: "/games",
        },
        {
          label: "TeamZBL",
          autogenerate: { directory: "teamzbl" },
        },
        {
          label: "Documentation",
          autogenerate: { directory: "documentation" },
        },
        {
          label: "Llms",
          items: [
            {
              label: "llms.txt",
              link: "/llms.txt",
            },
            {
              label: "llms-small.txt",
              link: "/llms-small.txt",
            },
            {
              label: "llms-full.txt",
              link: "/llms-full.txt",
            },
          ],
        },
      ],
      plugins: [
        starlightLlmsTxt({
          exclude: ["documentation/*"],
        }),
      ],
    }),
  ],
});
