import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
// import DisplayScreen from './DisplayScreen';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Lifespan(props) {
    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row"　justify="spaceAround"　alignItems="baseline">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="生まれた年"
                        value={props.value}
                        onChange={props.onChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="目標を達成したい時"
                        format="yyyy/MM/dd"
                        value={props.value}
                        onChange={props.onChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <TextareaAutosize 
                    aria-label="empty textarea" placeholder="目標を入力してください" 
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}
//親コンポーネントから子コンポーネントでpropsを受け取る場合は value={selectedData} は props.valueで受け取る