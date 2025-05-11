import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { userEvent, screen } from '@storybook/testing-library';
import AlertModal from '../component/AlertModal/AlertModal';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/Modal/AlertModal',
  component: AlertModal
};
export default meta;
type Story = StoryObj<typeof AlertModal>;

const AlertModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>알림 모달 열기</button>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} message="이것은 알림입니다." />
    </>
  );
};

export const Default: Story = {
  render: () => <AlertModalExample />,
  play: async ({ step }) => {
    await step('모달 열기', async () => {
      await userEvent.click(await screen.findByText('알림 모달 열기'));
    });
    await step('확인 클릭하여 닫기', async () => {
      await userEvent.click(await screen.findByText('확인'));
    });
  }
};
