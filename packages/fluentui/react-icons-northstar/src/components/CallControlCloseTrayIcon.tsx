import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const CallControlCloseTrayIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path d="M4 4C3.44772 4 3 4.44772 3 5V14C3 14.5523 3.44772 15 4 15H4.5C4.77614 15 5 15.2239 5 15.5C5 15.7761 4.77614 16 4.5 16H4C2.89543 16 2 15.1046 2 14V5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V14C18 15.1046 17.1046 16 16 16H15.5C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15H16C16.5523 15 17 14.5523 17 14V5C17 4.44772 16.5523 4 16 4H4Z" />
      <path d="M10 6C10.2761 6 10.5 6.22386 10.5 6.5V15.2929L13.6465 12.1464C13.8417 11.9512 14.1583 11.9512 14.3536 12.1464C14.5488 12.3417 14.5488 12.6583 14.3536 12.8536L10.3536 16.8536C10.1583 17.0488 9.84171 17.0488 9.64645 16.8536L5.64645 12.8535C5.45118 12.6583 5.45118 12.3417 5.64645 12.1464C5.84171 11.9512 6.15829 11.9512 6.35355 12.1464L9.5 15.2929V6.5C9.5 6.22386 9.72386 6 10 6Z" />
    </svg>
  ),
  displayName: 'CallControlCloseTrayIcon',
});
