import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectField =  ({register, name, options, ...rest}) => {
    return (
        <FormControl variant='filled'>
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
        
        </FormControl>

    );
}

export default SelectField;
