import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { RiMailLine } from "react-icons/ri";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput } from "../components/Form/Input/PasswordInput";
import sleep from "../utils/sleep";

interface LoginFormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(6, "Senha no mínimo 6 caracteres")
    .required("Senha obrigatória"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginFormData> = async (values) => {
    await sleep(1500);
  };

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
          onSubmit={handleSubmit(handleLogin)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              placeholder="E-mail"
              label="E-mail"
              remixIcon={RiMailLine}
              error={errors.email}
              {...register("email")}
            />
            <PasswordInput
              name="password"
              label="Senha"
              placeholder="Senha"
              error={errors.password}
              {...register("password")}
            />
            <Button colorScheme="purple" type="submit" isLoading={isSubmitting}>
              Entrar
            </Button>

            <Stack
              direction={["column", "row"]}
              justify="space-between"
              spacing="3"
              align="center"
              width='100%'
            >
              <Checkbox
                defaultIsChecked
                color="purple.500"
                colorScheme="purple"
              >
                <Text
                  fontSize="xs">
                  Lembrar-me
                </Text>

              </Checkbox>

              <Link fontSize="xs" color="purple.500" textDecoration="none" >Esqueci a Senha</Link>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}
//
