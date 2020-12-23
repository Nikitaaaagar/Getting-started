import React from 'react';
import axios from 'axios';
import '../App.scss';

// class Form extends React.Component {
//     state = { userName: '' };

//     handleSubmit = async (event) => {
//         event.preventDefault();
//         const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
//         this.props.onSubmit(resp.data);
//         this.setState({ userName: '' });
//     };
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     value={this.state.userName}
//                     onChange={(event) => this.setState({ userName: event.target.value })}
//                     placeholder="GitHub username"
//                     required
//                 />
//                 <button>Add card</button>
//             </form>
//         );
//     }
// }

const Form = (props) => {
    let [userName, setUserName] = React.useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        props.onSubmit(resp.data);
        setUserName('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                placeholder="GitHub username"
                required
            />
            <button>Add card</button>
        </form>
    );
};
export default Form;
