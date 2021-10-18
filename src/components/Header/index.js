import React from 'react';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

const Header = () => {
    const counter = useSelector(state => state.counterReducer);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch();
    return(
        <>
        <S.Title>
            <S.ButtonCounter type="button" onClick={() => dispatch(decrement())}>Minus</S.ButtonCounter>
            <div>Counter {counter}</div>
            <S.ButtonCounter type="button" onClick={() => dispatch(increment())}>Plus</S.ButtonCounter>
            {isLogged 
                ?
                <div>Informação confidencial</div>
                :
                ''
            }
        </S.Title>
        </>
    )
}

export default Header;