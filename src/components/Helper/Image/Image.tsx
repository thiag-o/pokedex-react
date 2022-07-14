import React from 'react';
import styles from './Image.module.css';

interface Props {
  alt: string;
  src: string;
}

const Image = ({ alt, src }: Props) => {
  const [skeleton, setSkeleton] = React.useState<boolean>(true);

  function handleLoad(event: any) {
    setSkeleton(false);
    event.target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} src={src} />
    </div>
  );
};

export default Image;
