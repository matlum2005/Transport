import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark ">
                    <form className="container-fluid justify-content-start">
                        <button className="btn btn-outline-success me-2" type="button"><i class="fa fa-home" aria-hidden="true">HOME</i></button>
                    </form>
                </nav>

            </div>
        )
    }
}

export default Header
