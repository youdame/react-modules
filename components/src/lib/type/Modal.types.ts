import { ReactNode, ComponentProps } from 'react';

export type ModalPosition = 'center' | 'bottom';

export type ModalSizeType = 'small' | 'medium' | 'large';

/**
 * @typedef ModalMainProps
 * @property {boolean} isOpen - 모달이 열려 있는 상태 여부
 * @property {() => void} onClose - 모달을 닫는 함수
<<<<<<< HEAD
 *  @property {'center' | 'bottom'} position - 모달 콘텐츠의 위치
=======
>>>>>>> d81f1417918a6e7d7e6fd015419274b3e8808d30
 * @property {ReactNode} children - 모달 하위 요소
 */
export type ModalMainProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
<<<<<<< HEAD
  position: ModalPosition;
  size: ModalSizeType;
  container?: ReactNode;
=======
>>>>>>> d81f1417918a6e7d7e6fd015419274b3e8808d30
} & ComponentProps<'div'>;

/**
 * @typedef ModalContentProps
<<<<<<< HEAD
 
 * @property {ReactNode} children - 콘텐츠 자식 노드
 */
export type ModalContentProps = {
=======
 * @property {'center' | 'bottom'} position - 모달 콘텐츠의 위치
 * @property {ReactNode} children - 콘텐츠 자식 노드
 */
export type ModalContentProps = {
  position: ModalPosition;
>>>>>>> d81f1417918a6e7d7e6fd015419274b3e8808d30
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
<<<<<<< HEAD

export type ModalFooterProps = {
  align?: 'left' | 'center' | 'right';
} & ComponentProps<'div'>;
=======
>>>>>>> d81f1417918a6e7d7e6fd015419274b3e8808d30
