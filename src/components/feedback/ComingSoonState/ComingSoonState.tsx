import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './ComingSoonState.styles';

interface ComingSoonStateProps {
  title: string;
  description?: string;
  animationSrc?: string;
  badgeText?: string;
}

export const ComingSoonState = ({
  title,
  description = 'Estamos trabajando en esta sección. Muy pronto estará disponible.',
  animationSrc = '/animations/coming-soon.lottie',
  badgeText = 'Próximamente',
}: ComingSoonStateProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.decorations}>
        <div className={styles.decorationOne} />
        <div className={styles.decorationTwo} />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>{badgeText}</span>

        <DotLottieReact
          src={animationSrc}
          loop
          autoplay
          useFrameInterpolation={false}
          renderConfig={{ devicePixelRatio: 1 }}
          className={styles.animation}
        />

        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};