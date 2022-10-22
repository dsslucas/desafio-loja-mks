import styled from 'styled-components';
import { SpanComponent } from './Styles';

const Span = (props: any) => {

  return (
    <SpanComponent {...props} onClick={() => console.log("Cliquei aqui")}>
      {props.number}
    </SpanComponent>
  )
}

export default Span