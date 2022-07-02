import React from "react";

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: '',
    };
  }

  handlerChangeCount = () => {
    // this.setState({count: this.state.count + 1})
    this.setState(state => ({ count: state.count + 1 }));
  }
  handlerOnChange = (e) => {
    this.setState({ text: e.target.value });
    // console.log(this.state.text, e.target.value);
  }

  render() {
    const { name, surname, link } = this.props;
    const { count, text } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handlerOnChange} value={text} />
        <h1>My name is {name}, surname - {surname}</h1>
        <a href={link}>My profile: {count}</a>
        <button onClick={this.handlerChangeCount} style={{ padding: '20px' }}>INCREMENT</button>
      </div>
    );
  }
}

export default WhoAmI;

{/* <WhoAmI name='John' surname='Smith' link='aaa.com' />
    <WhoAmI name='Bred' surname='Tomson' link='bbb.com' /> */}

// const WhoAmI = ({ name, surname, link }) => {
//     return (
//         <div>
//             <h1>My name is {name}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     );
// }
