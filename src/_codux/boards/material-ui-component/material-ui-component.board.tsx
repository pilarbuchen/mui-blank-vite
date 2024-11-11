import { createBoard } from '@wixc3/react-board';
import MaterialUIComponent from '../../../components/material-ui-component/material-ui-component';

export default createBoard({
    name: 'MaterialUIComponent',
    Board: () => <MaterialUIComponent />,
});
