import { SpanComponent } from './Styles';

const Span = (props: any) => {

  return (
    <SpanComponent {...props}>
      {props.number}
    </SpanComponent>
  )
}

export default Span