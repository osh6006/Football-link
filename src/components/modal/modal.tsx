import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useTheme } from "stores/theme-store";
import clsx from "clsx";

interface IModalProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  desc,
  title,
  isOpen,
  onClose,
  children,
}) => {
  const theme = useTheme((state) => state.theme);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto text-MediumGrey">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "w-full max-w-md transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all",
                  theme === "light" ? "bg-White " : "",
                  theme === "dark" ? "bg-DarkGrey " : "",
                )}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 "
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
