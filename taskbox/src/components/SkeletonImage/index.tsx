/** @jsxRuntime classic */
/** @jsx jsx */
import { colors, size} from "../constant"
import { css, jsx } from '@emotion/react';

import ShineEffect from './shineEffect';

export interface SkeletonImageProps {
  width?: string;
  padding: string;
  className?: string;
  style?: any;
  height?: string | undefined;
}

const SkeletonImage = ({ width, height, padding, ...rest }: SkeletonImageProps) => {
  return (
    <div css={css`height: ${height};`}>
      <div
        css={css`
          width: ${width};
          height: ${height ? height : width};
          background-color: rgb(192,192,192);
          padding: ${size[padding]}px;
          text-align: center;
          display: grid;
          ${ShineEffect}
        `}
        {...rest}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgb(255,255,255, 0.4)" className="bi bi-images" viewBox="0 0 16 16" css={css`
            align-self: center;
            justify-self: center;
          `}>
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
        </svg>
      </div>
    </div>
  );
};

SkeletonImage.displayName = 'SkeletonImage';

SkeletonImage.defaultProps = {
  padding: 'sm',
};
export default SkeletonImage;
