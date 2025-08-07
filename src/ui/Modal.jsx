import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="fixed inset-0 top-0 left-0 z-100 h-full w-full overflow-y-auto bg-black/50 backdrop-blur-md">
      <div className="flex items-center justify-center py-20">{children}</div>,
    </div>,
    document.body,
  );
}

export default Modal;
