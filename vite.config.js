import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import fg from 'fast-glob';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const pages = fg.sync(["index.html", "articles/**/*.html" ])
    .reduce((acc, file) => {
        acc[file] = resolve(_dirname, file)
        return acc
    }, {});


export default defineConfig({
    base: "./",
    plugins: [
        nunjucks({
            templatesDir: 'src/templates' // путь к твоим шаблонам и страницам
        })
    ],
    build: {
        rollupOptions: {
            input: pages
        }
    }
});