// import clsx from "clsx";
// import React from "react";
// import { ReactSVG } from "react-svg";
// import {
//   Dialog,
//   DialogPanel,
//   Transition,
//   TransitionChild,
// } from "@headlessui/react";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: React.ReactNode;
//   height?: number;
//   topButtonClassName?: string;
//   disableButton?: boolean;
//   className?: string;
// }

// // export const DrawerModal: React.FC<Props> = ({ isOpen, onClose, children, height = 60, topButtonClassName }) => {
// export const DrawerModal: React.FC<Props> = ({
//   isOpen,
//   onClose,
//   children,
//   topButtonClassName,
//   disableButton = false,
//   height = 500,
//   className,
// }) => {
//   return (
//     <Transition appear show={isOpen}>
//       <Dialog
//         as="div"
//         className={clsx("relative z-[9999999] focus:outline-none", className)}
//         onClose={onClose}
//       >
//         <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
//           <div className="flex h-screen overflow-hidden items-end justify-end">
//             <TransitionChild
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="h-screen w-screen fixed bg-black/50" />
//             </TransitionChild>
//             <TransitionChild
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-full"
//               enterTo="opacity-100 translate-y-0"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-full"
//             >
//               {/* #FDF9F1 */}
//               <DialogPanel
//                 style={{ height: height.toString() + "px" }}
//                 className="w-full bg-[#FDF9F1] relative z-[999] rounded-t-[25px]"
//               >
//                 <button
//                   onClick={onClose}
//                   className={clsx(
//                     "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99]",
//                     topButtonClassName,
//                     {
//                       hidden: disableButton,
//                     }
//                   )}
//                 >
//                   {/* <img className="w-12" src="/icons/circularBlueArrowDownButton.svg" /> */}
//                   <ReactSVG
//                     className="w-12"
//                     src="/icons/circularBlueArrowDownButton.svg"
//                   />
//                 </button>
//                 {children}
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };
