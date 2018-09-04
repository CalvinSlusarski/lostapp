// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import * as React from 'react';
// import './Comments.css';


// export interface IProps {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }

// function Comments() {
//   return (<div>
//     <TextField id="title" label="Title" margin="normal"/>
//     <br />
//     <TextField id="multiline-flexible" label="Comment" multiline={true} rowsMax="4" margin="normal"/>
//     <br />
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button></div>
//   );
// }

// export default Comments;




class Comments extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  public onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  public updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default Comments;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export interface IProps {
  enthusiasmLevel?: number;
  name: string;
}
export interface IState {
  currentEnthusiasm: number;
}
