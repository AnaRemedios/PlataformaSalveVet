import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions<OptionType>();

export default function Cidades() {
  const [value, setValue] = React.useState<OptionType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Cria um novo valor a partir da entrada do usuário
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Sugere a criação de um novo valor
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Adicionar "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="autocomplete-cidades"
      options={cidadesList}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.title}
          </li>
        );
      }}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Cidade" 
        sx={{   
            backgroundColor: '#E2FBF9', 
            borderRadius: 2, // Borda arredondada
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', // Remove a borda
                borderRadius: 2, // Mantém os cantos arredondados
              },
            },
          }}
        />
      )}
    />
  );
}

interface OptionType {
  inputValue?: string;
  title: string;
}

// Lista de cidades para o autocomplete
const cidadesList: readonly OptionType[] = [
  { title: 'São Paulo' },
  { title: 'Rio de Janeiro' },
  { title: 'Belo Horizonte' },
  { title: 'Curitiba' },
  { title: 'Porto Alegre' },
  { title: 'Brasília' },
  { title: 'Salvador' },
  { title: 'Fortaleza' },
  { title: 'Recife' },
  { title: 'Manaus' },
];
