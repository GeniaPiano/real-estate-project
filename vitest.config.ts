import { defineConfig } from 'vitest/config'

export default defineConfig({
    esbuild: {
        jsxInject: 'import React from \'react\'',
    },
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            exclude: [
                '**/tests.setup.ts',
                '**/.eslintrc.cjs',
                '**/.prettierrc.js',
                '**/messages.ts',
                '**/style.ts',
                '**/message.ts',
                ]
        }
    },
})