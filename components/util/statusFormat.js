import React from 'react';
import { AZKABAN_STATUS } from 'src/config';

export default (text) =>
  (
    <div>
      <span className={`circle ${AZKABAN_STATUS[text] && AZKABAN_STATUS[text].type}`}></span>
      {text ? (AZKABAN_STATUS[text] && AZKABAN_STATUS[text].name) : null}
    </div>
  );
