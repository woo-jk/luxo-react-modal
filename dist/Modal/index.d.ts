import React from "react";
interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}
declare const Modal: ({ isOpen, closeModal, children }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
