import React from 'react';
import {useStyles} from 'routes/main/Events/EventDetails/EventDetails.style';
import {IconButton, Modal} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {format} from 'date-fns';
import Event from 'entities/Event';

interface EventDetailsProps {
  modalIsOpen: boolean;
  setModalIsOpen: () => void;
  selectedEvent: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  modalIsOpen,
  selectedEvent,
  setModalIsOpen,
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={modalIsOpen}
      onClose={setModalIsOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modalContainer}
    >
      {selectedEvent ? (
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h2>{selectedEvent.title}</h2>
            <IconButton color="inherit">
              <CloseIcon onClick={setModalIsOpen} />
            </IconButton>
          </div>
          <div className={classes.modalWindowContent}>
            <img
              src={`https://testdb-94b3.restdb.io/media/${selectedEvent.thumbnail[0]}?key=5f36d664dc407a17c590ace1`}
              alt={selectedEvent.title}
            />
            <div>
              <div className={classes.textContainer}>
                <h3>{selectedEvent.title}</h3>
                <p className={classes.price}>{selectedEvent.price} грн</p>
                {selectedEvent.description.split('\n').map((item) => (
                  <p className={classes.description}>{item}</p>
                ))}
                <div className={classes.postBottomPart}>
                  <p className={classes.date}>
                    {format(new Date(selectedEvent.startDate), 'dd MMM yyyy hh:mm a')}
                    {selectedEvent.endDate
                      ? ` - ${format(
                          new Date(selectedEvent.endDate),
                          'dd MMM yyyy hh:mm a',
                        )}`
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Selected user not exist</p>
      )}
    </Modal>
  );
};

export default EventDetails;
