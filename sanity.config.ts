import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";

import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./structure";
import { myTheme } from "./theme";
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "defaultProjectId";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "default dataset";

export default defineConfig({
  basePath: "/studio",
  name: "PAPAFAM_Content_Studio",
  title: "PAPAFAM Content Studio",

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
