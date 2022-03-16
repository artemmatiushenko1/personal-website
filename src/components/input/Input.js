import * as S from './Input.style';

const Input = ({
  value = '',
  onChange,
  onBlur,
  placeholder,
  name,
  type = 'text',
  id,
  error,
  helperText,
  label,
  isTextArea = false,
}) => {
  return (
    <div>
      <S.LabelsWrapper>
        <S.Label htmlFor={id}>{label}</S.Label>
        {error && <S.HelpreText htmlFor={id}>{helperText}</S.HelpreText>}
      </S.LabelsWrapper>
      {isTextArea ? (
        <S.TextArea
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <S.Input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </div>
  );
};

export default Input;
