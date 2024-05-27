import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }

    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
