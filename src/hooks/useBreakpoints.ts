import { useMediaPredicate } from 'react-media-hook';

const useBreakpoints = () => {
  const less480px = useMediaPredicate('(max-width: 479px)');
  const less768px = useMediaPredicate('(max-width: 767px)');
  const less1000px = useMediaPredicate('(max-width: 999px)');
  const less1280px = useMediaPredicate('(max-width: 1279px)');
  const less1440px = useMediaPredicate('(max-width: 1339px)');
  const less1920px = useMediaPredicate('(max-width: 1919px)');
  const bigger768px = useMediaPredicate('(min-width: 768px)');
  const bigger1280px = useMediaPredicate('(min-width: 1280px)');
  const bigger1000px = useMediaPredicate('(min-width: 1000px)');
  const bigger1920px = useMediaPredicate('(min-width: 1920px)');

  return {
    less480px,
    less768px,
    less1000px,
    less1280px,
    less1440px,
    bigger768px,
    bigger1280px,
    bigger1000px,
    less1920px,
    bigger1920px,
  };
};
export default useBreakpoints;
