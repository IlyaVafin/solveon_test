import { FocusEvent, useState } from 'react';

export const useShowLinks = () => {
  const [show, setShow] = useState(false);

  const showLinks = () => setShow(true);
  const hideLinks = () => setShow(false);

  const hideLinksOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShow(false);
    }
  };

  return { show, showLinks, hideLinks, hideLinksOnBlur };
};
