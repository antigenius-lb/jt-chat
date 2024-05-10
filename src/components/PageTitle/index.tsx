import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · JtChat` : 'JtChat';
  }, [title]);

  return null;
});

export default PageTitle;
