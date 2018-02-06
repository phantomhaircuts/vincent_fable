import React from 'react'
import logo from '../images/logo_crop.png'
import small from '../images/small_logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        </div>
        <div className="content">
            <div className="inner">
                <h1><img className="vince-logo" src={logo} alt="vincent fable" width="630px"/></h1>
                <p>singer | song writer DMV | NYC | ATX | SF | SD </p>
            </div>
        </div>
        <nav>
            {/*<ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>*/}
        </nav>
        <ul className="icons">
          <li><a href="https://twitter.com/vincentfable?lang=en" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="www.facebook.com/vincentfvble" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/vincent.fable/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="https://soundcloud.com/vincentfable" className="icon fa-soundcloud"><span className="label">GitHub</span></a></li>
        </ul>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
