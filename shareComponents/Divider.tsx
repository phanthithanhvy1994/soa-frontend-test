const Divider = (): JSX.Element => {
  return (
    <hr
      style={{
        margin: 0,
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.12)',
        borderBottomWidth: 'thin'
      }}
    />
  )
}

export default Divider
