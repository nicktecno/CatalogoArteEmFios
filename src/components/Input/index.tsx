import React, {
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  useState,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
  containerStyle?: Record<string, unknown>;
}

interface InputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}
// todas as propriedades "rest" sao passadas para o TExt Input, no caso apenas o placeholder
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, placeholder, containerStyle = {} },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  // o texto do onChangeText do TextInput é colocado nessa variavel value aqui de cima

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(any, value) {
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
    <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        placeholderTextColor="#666360"
        placeholder={placeholder}
      />
    </Container>
  );
};
export default forwardRef(Input);
