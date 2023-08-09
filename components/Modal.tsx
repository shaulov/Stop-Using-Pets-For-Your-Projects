import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { Devices } from "@/conts";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

function Modal({ isOpen, onChange, title, children }: ModalProps) {
  return (
    <ModalWrapper>
      <Dialog.Root
        open={isOpen}
        defaultOpen={isOpen}
        onOpenChange={onChange}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="modal-overlay" />
          <Dialog.Content className="modal-content">
            <Dialog.Title className="modal-title">{title}</Dialog.Title>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button className="close-button">
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgb(23 23 23 / 0.9);
    backdrop-filter: blur(4px);
  }
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    max-height: 100%;
    width: 100%;
    padding: 24px;
    background-color: rgb(38 38 38);
    border-width: 1px;
    border-color: rgb(64 64 64);
    border-radius: 6px;
  }
  .modal-title {
    margin: 0 0 16px;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    text-align: center;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: rgb(163 163 163);
    border-radius: 50%;
    &:hover {
      color: rgb(255 255 255);
    }
  }
  @media (${Devices.MinMD}) {
    .modal-content {
      max-width: 450px;
      max-height: 85vh;
      width: 90vw;
      height: auto;
    }
  }
`;

export default Modal;