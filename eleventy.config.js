import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    const prettyTitle = (value = "") => {
        return String(value)
            .replace(/[-_]+/g, " ")
            .replace(/([a-z\d])([A-Z])/g, "$1 $2")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
            .replace(/\s+/g, " ")
            .trim()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    // Copy static assets (CSS, images, etc.) directly to the output.
    eleventyConfig.addPassthroughCopy({ "static/assets": "assets" });

    eleventyConfig.addFilter("prettyTitle", prettyTitle);

    eleventyConfig.addCollection("docs", (collectionApi) => {
        return collectionApi
            .getFilteredByGlob("./**/*.md")
            .filter((item) => !item.inputPath.includes("node_modules") && !item.inputPath.includes("_site"));
    });

    eleventyConfig.addCollection("docsBySection", (collectionApi) => {
        const docs = collectionApi
            .getFilteredByGlob("./**/*.md")
            .filter((item) => !item.inputPath.includes("node_modules") && !item.inputPath.includes("_site"));

        const sections = new Map();

        for (const item of docs) {
            const relativePath = item.inputPath.replace(/^\.\//, "").replace(/\\/g, "/");
            const pathParts = relativePath.split("/");
            const hasSection = pathParts.length > 1;
            const sectionKey = hasSection ? pathParts[0] : "general";
            const sectionTitle = hasSection ? prettyTitle(pathParts[0]) : "General";

            if (!sections.has(sectionKey)) {
                sections.set(sectionKey, {
                    key: sectionKey,
                    title: sectionTitle,
                    items: []
                });
            }

            sections.get(sectionKey).items.push(item);
        }

        const grouped = [...sections.values()]
            .map((section) => ({
                ...section,
                items: section.items.sort((a, b) => {
                    const aIsReadme = a.fileSlug.toLowerCase() === "readme";
                    const bIsReadme = b.fileSlug.toLowerCase() === "readme";

                    if (aIsReadme !== bIsReadme) {
                        return aIsReadme ? -1 : 1;
                    }

                    return a.url.localeCompare(b.url);
                })
            }))
            .sort((a, b) => {
                if (a.key === "general") {
                    return -1;
                }

                if (b.key === "general") {
                    return 1;
                }

                return a.title.localeCompare(b.title);
            });

        return grouped;
    });

    eleventyConfig.addGlobalData("layout", "base.njk");
    eleventyConfig.addGlobalData("siteName", "UKHO Engineering Docs");
    eleventyConfig.addGlobalData("eleventyComputed", {
        title: (data) => {
            if (data.title) {
                return data.title;
            }

            if (data.page.fileSlug === "README") {
                const sectionPath = data.page.filePathStem.replace(/\/README$/, "");
                const sectionName = sectionPath.split("/").filter(Boolean).pop();
                return sectionName ? prettyTitle(sectionName) : "Home";
            }

            return prettyTitle(data.page.fileSlug);
        },
        permalink: (data) => {
            if (data.permalink) {
                return data.permalink;
            }

            if (data.page.fileSlug === "README") {
                const sectionPath = data.page.filePathStem.replace(/\/README$/, "");
                return `${sectionPath || ""}/`;
            }

            return undefined;
        }
    });

    return {
        dir: {
            includes: "static/_includes",
            layouts: "static/_layouts",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}