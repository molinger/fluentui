import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ScreencastIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5.5C2 4.67157 2.67157 4 3.5 4H16.5C17.3284 4 18 4.67157 18 5.5V14.5C18 15.3284 17.3284 16 16.5 16H3.5C2.67157 16 2 15.3284 2 14.5V5.5ZM3.5 5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H16.5C16.7761 15 17 14.7761 17 14.5V5.5C17 5.22386 16.7761 5 16.5 5H3.5Z"
        />
        <path d="M5.4989 13.2495C5.4989 13.6634 5.16336 13.9989 4.74945 13.9989C4.33554 13.9989 4 13.6634 4 13.2495C4 12.8355 4.33554 12.5 4.74945 12.5C5.16336 12.5 5.4989 12.8355 5.4989 13.2495Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.9973 10.5C3.9973 10.2239 4.22116 10 4.4973 10C6.43169 10 7.99982 11.5681 7.99982 13.5025C7.99982 13.7787 7.77596 14.0025 7.49982 14.0025C7.22368 14.0025 6.99982 13.7787 6.99982 13.5025C6.99982 12.1204 5.87941 11 4.4973 11C4.22116 11 3.9973 10.7761 3.9973 10.5Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.99731 8C3.99731 7.72386 4.22117 7.5 4.49731 7.5C7.81251 7.5 10.5 10.1875 10.5 13.5027C10.5 13.7788 10.2761 14.0027 10 14.0027C9.72386 14.0027 9.5 13.7788 9.5 13.5027C9.5 10.7398 7.26022 8.5 4.49731 8.5C4.22117 8.5 3.99731 8.27614 3.99731 8Z"
        />
      </g>
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 4C2.67157 4 2 4.67157 2 5.5V14.5C2 15.3284 2.67157 16 3.5 16H16.5C17.3284 16 18 15.3284 18 14.5V5.5C18 4.67157 17.3284 4 16.5 4H3.5ZM3.99731 8C3.99731 7.72386 4.22117 7.5 4.49731 7.5C7.81251 7.5 10.5 10.1875 10.5 13.5027C10.5 13.7788 10.2761 14.0027 10 14.0027C9.72386 14.0027 9.5 13.7788 9.5 13.5027C9.5 10.7398 7.26022 8.5 4.49731 8.5C4.22117 8.5 3.99731 8.27614 3.99731 8ZM4.49731 10C4.22117 10 3.99731 10.2239 3.99731 10.5C3.99731 10.7761 4.22117 11 4.49731 11C5.87942 11 6.99984 12.1204 6.99984 13.5025C6.99984 13.7787 7.2237 14.0025 7.49984 14.0025C7.77598 14.0025 7.99984 13.7787 7.99984 13.5025C7.99984 11.5681 6.4317 10 4.49731 10ZM4.74945 13.9989C5.16336 13.9989 5.4989 13.6634 5.4989 13.2495C5.4989 12.8355 5.16336 12.5 4.74945 12.5C4.33554 12.5 4 12.8355 4 13.2495C4 13.6634 4.33554 13.9989 4.74945 13.9989Z"
      />
    </svg>
  ),
  displayName: 'ScreencastIcon',
});
