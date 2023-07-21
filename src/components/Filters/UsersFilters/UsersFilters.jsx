import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import IdFilter from './filters/IdFilter';
import style from "../Filters.module.css"
import UserNameFilter from './filters/UserNameFilter';
import EmailFilter from './filters/EmailFilter';
import RolFilter from './filters/RolFilter';
import StateFilter from './filters/StateFilter';

function UsersFilters () {
    return (
    <ButtonGroup aria-label="Basic example" className={style.buttonContainer}>
        <IdFilter />
        <UserNameFilter />
        <EmailFilter />
        <RolFilter />
        <StateFilter />
    </ButtonGroup>
    )
}

export default UsersFilters;