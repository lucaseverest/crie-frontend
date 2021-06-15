import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  useColorModeValue,
  FormErrorMessage,
  InputLeftElement,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import { IconType } from 'react-icons';

interface InputProps extends ChakraInputProps {
  name: string;
  remixIcon?: IconType;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, remixIcon, label, error = null, ...rest },
  ref
) => {
  // const backgroundColor = useColorModeValue('gray.400', 'gray.800');
  // const hoverColor = useColorModeValue('gray.500', 'gray.900');
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name} color="purple.500">{label}</FormLabel>}

      <InputGroup align="center" display="flex">
        { !!remixIcon && <InputLeftElement
          pointerEvents="none"
          children={<Icon as={remixIcon} color="purple.500" />}
        />}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="purple.500"
          borderRadius="xl"
          // backgroundColor={backgroundColor}
          variant="filled"
          // _hover={{
          //   bgColor: hoverColor,
          // }}
          // _focus={{
          //   bgColor: hoverColor,
          // }}
          size="lg"
          ref={ref}
          {...rest}
        />
      
      </InputGroup>


      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
