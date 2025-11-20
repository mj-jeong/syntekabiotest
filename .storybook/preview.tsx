import '../src/styles/reset.scss';
import type { Preview } from '@storybook/react-webpack5';

export const decorators = [];

const preview: Preview = {
  parameters: {
    a11y: {
      element: '#storybook-root',
      manual: false,
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'label',
            enabled: true,
          },
        ],
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#000' },
        light: { name: 'Light', value: '#fff' },
      },
    },
  },
  decorators,
};

export default preview;
