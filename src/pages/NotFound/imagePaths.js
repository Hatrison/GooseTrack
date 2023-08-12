const imagePaths = {
  webp2x: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-mob-2x.webp`),
  webp1x: require.context(
    '../../images/notFound',
    false,
    /\.webp$/
  )(`./rocket-mob-1x.webp`),
  png2x: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-mob-2x.png`),
  png1x: require.context(
    '../../images/notFound',
    false,
    /\.png$/
  )(`./rocket-mob-1x.png`),
};

export default imagePaths;
