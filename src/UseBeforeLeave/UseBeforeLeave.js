import { useEffect } from "react";

const isEmpty = (onBefore) => {
  if (!onBefore) return false;
  if (typeof onBefore !== "function") return false;

  return true;
};

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    isEmpty(onBefore) && document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [handle, onBefore]);
};

export default useBeforeLeave;
