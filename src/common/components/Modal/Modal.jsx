import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'common/components/Icon';
import useOutsideClick from 'common/hooks/useOutsideClick';
import { CLOSE } from 'common/constants/icons';

import styles from './modal.less';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  closeIcon: PropTypes.string,
  closeIconClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  onClose: null,
  title: '',
  titleClassName: '',
  closeIcon: CLOSE,
  closeIconClassName: '',
  contentClassName: '',
  maxWidth: 700,
  maxHeight: 700,
};

const Modal = ({
  children,
  className,
  isOpen,
  onClose,
  title,
  titleClassName,
  closeIcon,
  closeIconClassName,
  contentClassName,
  maxWidth,
  maxHeight,
}) => {
  if (!isOpen) {
    return null;
  }

  const modalClasses = classnames(styles.modal, className);
  const titleClasses = classnames(styles.title, titleClassName);
  const closeIconClasses = classnames(styles['close-icon'], closeIconClassName);
  const contentClasses = classnames(styles.content, contentClassName);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, onClose);

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div
        className={modalClasses}
        ref={modalRef}
        style={{ maxWidth, maxHeight }}
      >
        <div className={styles.header}>
          <span className={titleClasses}>{title}</span>
          <Icon
            className={closeIconClasses}
            icon={closeIcon}
            onClick={onClose}
          />
        </div>
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
