import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export default function ModalPortal({ children, container }: ModalPortalProps) {
  const localContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!container) {
      const el = document.createElement('div');
      document.body.appendChild(el);
      localContainer.current = el;

      return () => {
        document.body.removeChild(el);
      };
    }
  }, [container]);

  if (!container && !localContainer.current) return null;

  return createPortal(children, container ?? localContainer.current!);
}
