import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from './styles';

const SelectField =  ({register, name, options, ...rest}) => {
    return (
        <FormControlStyled variant='filled'>
            <InputLabel id={name + '-label'}>
                {name}
            </InputLabel>
            
            <Select
                labelId = {name + '-label'}
                id={name} 
                {...register(name)} 
                {...rest}
            >
                {options.map(item => (
                    <MenuItem value={item}>
                    {item}
                    </MenuItem>
                ))}
            </Select>            
        
        </FormControlStyled>

    );
}

export default SelectField;
