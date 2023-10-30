import { dataset, projectId, projectTitle } from "@/lib/sanity.api";
import { defineConfig } from "sanity";
import authorType from "@/schemas/author";
import postType from "@/schemas/post";
import settingsType from "@/schemas/settings";
import { deskTool } from "sanity/desk";
import { settingsStructure } from "@/plugins/settings";
import { previewDocumentNode } from "@/plugins/previewPane";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,
  title: projectTitle,
  schema: {
    types: [authorType, postType, settingsType],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
  ],
});
