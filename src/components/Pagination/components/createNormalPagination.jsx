import React from 'react';
import uuid from 'uuid';
import { PaginationItem, PaginationLink } from 'reactstrap';

const createNormalPagination = (
  pages,
  handlePageChange,
  currentPage,
  itemsOnPage,
  lastSearch,
) => Array(pages)
  .fill(1)
  .map((item, id) => (
    <React.Fragment key={uuid.v4()}>
      <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
        <PaginationLink
          onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
          key={uuid.v4()}
        >
          {id + 1}
        </PaginationLink>
      </PaginationItem>
    </React.Fragment>
  ));

export default createNormalPagination;
