import { ReactNode, ComponentProps } from 'react';

export type ModalPosition = 'center' | 'bottom';

/**
 * @typedef ModalMainProps
 * @property {boolean} isOpen - 모달이 열려 있는 상태 여부
 * @property {() => void} onClose - 모달을 닫는 함수
 * @property {ReactNode} children - 모달 하위 요소
 */
export type ModalMainProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
} & ComponentProps<'div'>;

/**
 * @typedef ModalContentProps
 * @property {'center' | 'bottom'} position - 모달 콘텐츠의 위치
 * @property {ReactNode} children - 콘텐츠 자식 노드
 */
export type ModalContentProps = {
  position: ModalPosition;
  children: ReactNode;
} & ComponentProps<'div'>;

/**
 * @typedef ModalBackDropProps
 * 백드롭 스타일 및 이벤트 처리용 props
 */
export type ModalBackDropProps = ComponentProps<'div'>;

/**
 * @typedef ModalTitleProps
 * 제목 태그용 props
 */
export type ModalTitleProps = {
  children: ReactNode;
} & ComponentProps<'h2'>;

/**
 * @typedef ModalCloseButtonProps
 * 닫기 버튼용 props (컨텍스트에서 onClose 가져옴)
 */
export type ModalCloseButtonProps = {
  children: ReactNode;
} & ComponentProps<'button'>;

/**
 * @typedef ModalButtonProps
 * 일반 버튼 props (onClick 포함)
 */
export type ModalButtonProps = {
  onClick: () => void;
  children: ReactNode;
} & ComponentProps<'button'>;
