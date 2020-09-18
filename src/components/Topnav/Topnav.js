import React from 'react';
import { Row } from 'simple-flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import './topnav.css'
const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        display:'flex',
        padding: '5px',
        width: '95%',
        margin: '0 auto',
        marginTop: '20px',
        background: 'rgb(225, 225, 238)'

    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(styles.separator)}></div>
                <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}>Orovwiroro David</span>
                    <img src="https://avatars0.githubusercontent.com/u/60156498?s=400&u=85ed53ea1e977aab8cc0631ceb4c5f09292599c9&v=4" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                </Row>
                <button className='logout__button' type="button" onClick={console.log("clicked")} >logout</button>
            </Row>
        </Row>
    );
}

export default HeaderComponent;


