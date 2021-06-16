import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Icon,
    FormErrorMessage,
  } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { EyeButton } from '../../Buttons/EyeButton';
import { FieldError } from 'react-hook-form';

import { RiLock2Line } from 'react-icons/ri';

interface PasswordInputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}
  
const PasswordBase: ForwardRefRenderFunction<HTMLInputElement, PasswordInputProps> = (
    { name, label, error = null, ...rest }, 
    ref
) => {
    // const backgroundColor = useColorModeValue('gray.400', 'gray.800');
    // const hoverColor = useColorModeValue('gray.500', 'gray.900');
  
    const [show, setShow] = useState(false);
    const toogle = () => setShow(!show);

    return (
      <FormControl>
        {!!label && <FormLabel htmlFor={name} color="purple.500">{label}</FormLabel>}
  
        <InputGroup>
            <InputLeftElement
                height="100%"
                pointerEvents="none"
                children={<Icon as={RiLock2Line} color="purple.500" fontSize="20"/>}
            />
            <ChakraInput
                name={name}
                id={name}
                fontSize="0.9rem"
                type={show ? 'text' : 'password'}
                focusBorderColor="purple.500"
                borderRadius="xl"
                // backgroundColor={backgroundColor}
                variant="filled"
                // _hover={{
                //   bgColor: hoverColor,
                // }}
                size="lg"
                ref={ref}
                {...rest}
            />
            <InputRightElement align="center" height="100%" mr="2">
                <EyeButton show={show} aria-label="Toogle theme" onClick={toogle} />
            </InputRightElement>
        </InputGroup>

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }

export const PasswordInput = forwardRef(PasswordBase);
  