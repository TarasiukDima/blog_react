import { useCallback, useEffect, useRef, useState } from "react";

interface IUseModalProps {
  onClose: () => void;
  isOpen?: boolean;
  animationDelay?: number;
}

export const useModal = ({
  onClose,
  isOpen,
  animationDelay = 250,
}: IUseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [onClose, animationDelay]);

  return {
    isClosing,
    isMounted,
    closeHandler,
  };
};
