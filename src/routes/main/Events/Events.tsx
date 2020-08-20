import React, {useEffect, useState} from 'react';
import {useStyles} from 'routes/main/Events/Events.style';
import {useEventsActions} from 'state/hooks/UseActions';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';
import {List, ListItem} from '@material-ui/core';
import Event from 'entities/Event';
import {useParams} from 'react-router-dom';
import {format} from 'date-fns';
import EventDetails from './EventDetails/EventDetails';
import {Loader} from 'components';

const Events = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const classes = useStyles();

  const actions = useEventsActions();

  const {id} = useParams<{id: string | undefined}>();

  useEffect(() => {
    actions.fetchEvents();
  }, []);

  const state = useSelector((state: State) => state.events);

  const openEventDetails = (event: Event) => {
    setModalIsOpen(true);
    setSelectedEvent(event);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {state.isSuccess ? (
          <>
            <List
              component="nav"
              aria-label="main mailbox folders"
              // className={styles.list}
            >
              {state.events.map((event: Event) => {
                const description = event.description.slice(0, 500).split('\n');

                return (
                  <ListItem
                    key={event.id}
                    button
                    selected={id === event.id}
                    onClick={() => openEventDetails(event)}
                    className={classes.eventItem}
                  >
                    <div className={classes.event}>
                      <div className={classes.imageContainer}>
                        <img
                          src={`https://testdb-94b3.restdb.io/media/${event.thumbnail[0]}?key=5f36d664dc407a17c590ace1`}
                          alt={event.title}
                        />
                      </div>
                      <div className={classes.textContainer}>
                        <h3>{event.title}</h3>
                        <p className={classes.price}>{event.price} грн</p>
                        {description.map((item, index) => (
                          <p className={classes.description}>
                            {item}
                            {description.length - 1 === index && '...'}
                          </p>
                        ))}
                        <div className={classes.postBottomPart}>
                          <p className={classes.date}>
                            {format(new Date(event.startDate), 'dd MMM yyyy hh:mm a')}
                            {event.endDate
                              ? ` - ${format(
                                  new Date(event.endDate),
                                  'dd MMM yyyy hh:mm a',
                                )}`
                              : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                );
              })}
            </List>
            {selectedEvent && (
              <EventDetails
                modalIsOpen={modalIsOpen}
                selectedEvent={selectedEvent}
                setModalIsOpen={() => setModalIsOpen(!modalIsOpen)}
              />
            )}
          </>
        ) : (
          <div className={classes.loaderContainer}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
