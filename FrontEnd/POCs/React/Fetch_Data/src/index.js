import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import EnquiryForm from './components/EnquiryForm';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <Header />
                    <EnquiryForm />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));