import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from './styles';

const SelectField =  ({register, name, options, label, ...rest}) => {
    const MenuProps = {
        PaperProps: {
          style: {
            width: 250,
            backgroundColor: "var(--colorThree)",
            color: "var(--colorTwo)"
          },
        },
      };
    return (
        <FormControlStyled variant='outlined'>
            <InputLabel id={name + '-label'}>
                {label}
            </InputLabel>
            
            <Select
                MenuProps={MenuProps}
                labelId = {name + '-label'}
                id={name} 
                {...register(name)} 
                {...rest}
            >
                {options.map((item, index) => (
                    <MenuItem key={index} value={item}>
                    {item}
                    </MenuItem>
                ))}
            </Select>            
        
        </FormControlStyled>

    );
}

export default SelectField;
