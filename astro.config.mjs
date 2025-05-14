import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import conf from "./config.json";

// https://astro.build/config
export default defineConfig({
  site: "https://zhuroland.github.io",
  integrations: [
    starlight({
      title: `${conf.infos.author} Protfolio`,
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
              label: "My School Projects",
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
          label: "Documentation",
          autogenerate: { directory: "documentation" },
        },
      ],
    }),
  ],
});
