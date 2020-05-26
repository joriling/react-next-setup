import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/Router';

class indexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'});
            }, 1000);
        });

        return promise;
    }

    render() {
        return (
            <div>
                <h1>This is Main Page. {this.props.appName}</h1>
                <Link href="/auth">Auth</Link>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        );
    }
}

export default indexPage;