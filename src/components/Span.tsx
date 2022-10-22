import styled from 'styled-components';

const Span = (props: any) => {
  const SpanComponent = styled.span`
    font-size: 18px;
    font-weight: bold;
  `
  return (
    <SpanComponent onClick={() => console.log("Cliquei aqui")}>
      {props.number}
    </SpanComponent>
  )
}

export default Span