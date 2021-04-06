let customStyleProps: 'google' | 'facebook' | 'uber'
type customStylePropsType = typeof customStyleProps;

(arg:customStylePropsType) => {
  return arg
}
