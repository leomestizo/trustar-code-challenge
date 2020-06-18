import React, {
  Children,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { debounce } from 'common/utils/function';
import { isNil, isNumber } from 'common/utils/type';

import MasonryGridColumn from './MasonryGridColumn';
import MasonryGridTile from './MasonryGridTile';

import styles from './masonryGrid.less';

const DEFAULT_NUMBER_OF_COLUMNS = 4;

const propTypes = {
  children: PropTypes.node,
  columnBreakpoints: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        columns: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }),
    ),
  ]),
  columnClassName: PropTypes.string,
  gridClassName: PropTypes.string,
  tileClassName: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  children: null,
  columnBreakpoints: DEFAULT_NUMBER_OF_COLUMNS,
  columnClassName: '',
  gridClassName: '',
  tileClassName: '',
  gap: 0,
};

const renderGrid = (children, numberOfColumns, columnClassName, tileClassName, gap) => {
  const arrayOfChildren = Children.toArray(children);
  const columnElements = [];

  for (let i = 0, j = numberOfColumns; i < j; i++) {
    const childrenElements = [];

    for (let k = i, l = arrayOfChildren.length; k < l; k += numberOfColumns) {
      childrenElements.push(
        <MasonryGridTile key={`tile-${k}`} className={tileClassName}>
          {arrayOfChildren[k]}
        </MasonryGridTile>,
      );
    }

    columnElements.push(
      <MasonryGridColumn
        key={`column-${i}`}
        className={columnClassName}
        // We apply a right margin to all the columns, except the last one.
        style={{ marginRight: i !== j - 1 ? gap : 0 }}
      >
        {childrenElements}
      </MasonryGridColumn>,
    );
  }

  return columnElements;
};

const updateGridWidth = (setGridWidth, gridElement) => setGridWidth(
  gridElement.current.offsetWidth,
);

const getNumberOfColumns = (columnBreakpoints, gridWidth) => {
  if (isNumber(columnBreakpoints)) {
    return columnBreakpoints;
  }

  let numberOfColumns = null;
  columnBreakpoints.forEach((breakpoint) => {
    // TODO: I should sort the breakpoints by `width` in descending order
    // so that this logic always work.
    numberOfColumns = breakpoint.width >= gridWidth ? breakpoint.columns : numberOfColumns;
  });

  return isNil(numberOfColumns) ? DEFAULT_NUMBER_OF_COLUMNS : numberOfColumns;
};

const MasonryGrid = ({
  children,
  columnBreakpoints,
  columnClassName,
  gridClassName,
  tileClassName,
  gap,
}) => {
  const gridElement = useRef(null);
  const [gridWidth, setGridWidth] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // If `columnBreakpoints` is a number, it doesn't make any sense to register
    // the resize listener.
    if (!isNumber(columnBreakpoints)) {
      const handleResize = debounce(() => updateGridWidth(setGridWidth, gridElement));
      window.addEventListener('resize', handleResize);

      // Initial width of the grid.
      updateGridWidth(setGridWidth, gridElement);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const numberOfColumns = getNumberOfColumns(columnBreakpoints, gridWidth);

  const gridClasses = classnames(styles['masonry-grid'], gridClassName);

  return (
    <div
      className={gridClasses}
      ref={gridElement}
      style={{ padding: gap }}
    >
      {renderGrid(children, numberOfColumns, columnClassName, tileClassName, gap)}
    </div>
  );
};

MasonryGrid.propTypes = propTypes;
MasonryGrid.defaultProps = defaultProps;

export default MasonryGrid;
