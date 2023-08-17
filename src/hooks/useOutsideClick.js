import { useEffect } from "react";

export default function useOutsideClick(callback, ref) {
  function handleOutsideClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
}
