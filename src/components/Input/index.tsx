import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
}

interface InputValueReference {
  value: string;
}
// todas as propriedades "rest" sao passadas para o TExt Input, no caso apenas o placeholder
const Input: React.FC<InputProps> = ({ name, icon, placeholder }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  // o texto do onChangeText do TextInput é colocado nessa variavel value aqui de cima

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        placeholderTextColor="#666360"
        placeholder={placeholder}
      />
    </Container>
  );
};
export default Input;
