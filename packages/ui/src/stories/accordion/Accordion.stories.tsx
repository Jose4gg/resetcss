import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '@components/accordion';

import { storyConfigs } from './storyConfigs';

const meta: Meta = {
  component: Accordion,
};

export default meta;

export type Story = StoryObj<typeof Accordion>;

const { default: defaultStory, singleItem, allowMultipleOpens } = storyConfigs;

export const Default: Story = defaultStory;

export const SingleItem: Story = singleItem;

export const AllowMultipleOpens: Story = allowMultipleOpens;
