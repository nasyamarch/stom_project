import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
    plugins: [
        nunjucks({
            templatesDir: 'src/templates', // путь к твоим шаблонам и страницам
            outputDir: 'dist'     // куда будет собираться готовый HTML
        })
    ]
});