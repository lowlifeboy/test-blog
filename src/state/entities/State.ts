import {Auth} from 'state/entities/Auth';
import {SnackBar} from 'state/entities/SnackBar';
import Event from 'state/entities/Event';
import {LoadableContainer} from 'state/entities/LoadableContainer';

export default interface State {
  auth: Auth;
  snackBar: SnackBar;
  events: LoadableContainer<{events: Event[]}>;
}
