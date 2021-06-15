import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/Form/Input";
import * as yup from 'yup';
import { RiMailLine } from 'react-icons/ri';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const loginSchema = yup.object().shape({
  email: yup.string().email().required('E-mail obrigatório'),
  password: yup.string().min(6, 'Senha no mínimo 6 caracteres').required('Senha obrigatória')
})

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <div>
      <Head>
        <title>Crie - Login</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="80%"
          maxWidth={720}
          padding="8"
          borderRadius={8}
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Input name="email" label="E-mail" remixIcon={RiMailLine} error={errors.name}/>

        </Flex>
      </Flex>

    </div>
  )
}