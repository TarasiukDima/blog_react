import { Suspense } from "react";
import { Modal } from "@/shared/ui/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Spinner } from "@/shared/ui/Spinner";
// import { LoginForm } from "../LoginForm/LoginForm";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames("", {}, [className])}
    isOpen={isOpen}
    closeModalHandler={onClose}
    lazy
  >
    <Suspense fallback={<Spinner />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
