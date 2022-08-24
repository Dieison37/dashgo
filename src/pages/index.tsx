import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})


export default function SignIn() {
 const { register, handleSubmit, formState, formState: {errors}, } = useForm({
  resolver: yupResolver(signInFormSchema)
 });

 const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(values);

 }

  return (
   <Flex 
   w="100vw" 
   h="100vh"
   align="center" 
   justify="center" 
   >
    <Flex
    as="form" 
    width="100%"
    maxWidth={360}
    background="gray.800"
    padding="8"
    borderRadius={8}
    flexDirection="column"
    onSubmit={handleSubmit(handleSignIn)}
    >
      <Stack spacing="4">
        <Input 
         name="email" 
        type="email" 
        label="E-mail" 
        error={errors.email}
        ref={register} 
        {...register('email', {
          required: true,
        })}
        />
        <Input 
        name="passoword" 
        type="password" 
        label="Senha" 
        error={errors.password}
        ref={register} 
        {...register('password', {
          required: true,
        })}       
        />

      </Stack>

      <Button 
      type="submit" 
      marginTop="6" 
      colorScheme="pink" 
      size="lg"
      isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>
      
    </Flex>
   </Flex>
  )
}

