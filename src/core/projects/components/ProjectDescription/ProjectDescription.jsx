import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import LinkButton from 'common/components/LinkButton';
import Modal from 'common/components/Modal';

import styles from './projectDescription.less';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const LINES_OF_TEXT = 5;
const FONT_SIZE = 14;
const LINE_HEIGHT = 1.5;

const handleLinkButtonClick = (event, setIsModalOpen) => {
  event.stopPropagation();
  setIsModalOpen(true);
};

const ProjectDescription = ({ title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef();
  const descriptionMaxHeight = FONT_SIZE * LINE_HEIGHT * LINES_OF_TEXT;
  const formattedDescription = useMemo(() => description.replace(/<[^>]*>?/gm, ''), [description]);

  useEffect(() => {
    setDescriptionHeight(descriptionRef.current.clientHeight);
  }, []);

  return (
    <div>
      <p
        className={styles.description}
        ref={descriptionRef}
        style={{
          maxHeight: descriptionMaxHeight,
          fontSize: FONT_SIZE,
          lineHeight: LINE_HEIGHT,
          WebkitLineClamp: LINES_OF_TEXT,
        }}
      >
        {formattedDescription}
      </p>
      {descriptionHeight >= descriptionMaxHeight && (
        <>
          <LinkButton
            className={styles['read-more-link-button']}
            label="Read more"
            onClick={(event) => handleLinkButtonClick(event, setIsModalOpen)}
          />
          <Modal
            title={title}
            contentClassName={styles['modal-content']}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <p
              className={styles['modal-description-container']}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

ProjectDescription.propTypes = propTypes;

export default ProjectDescription;
